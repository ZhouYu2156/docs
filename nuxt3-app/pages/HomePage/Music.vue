<script setup lang="ts">
import { features } from '~/site/defaultConfig'
import type { Music } from '~/types/site'
import { VideoPlay } from '@element-plus/icons-vue'
import {usePlayMusic} from "~/composables/effects";

const musics = ref<Music[]>([])

const pagination = reactive({
  page: 1,
  pageSize: 5,
})

// 列定义
const columns = [
  {
    key: 'singer',
    label: '歌手',
  },
  {
    key: 'songName',
    label: '音乐名',
  },
  {
    key: 'actions',
  },
]
// 每一页的数据
const rows = computed(() => {
  return musics.value.slice((pagination.page - 1) * pagination.pageSize, pagination.page * pagination.pageSize)
})
// 页码选择器
const pageSizeOptions = [
  { label: '5首', value: 5 },
  { label: '10首', value: 10 },
  { label: '20首', value: 20 },
  { label: '50首', value: 50 },
  { label: '100首', value: 100 },
]

// 请求数据
const baseURL = 'http://localhost:8000'
const { data } = await useAsyncData('get-musics', async () => {
  return $fetch('/api/musics', { baseURL })
})
musics.value = (data.value as Music[]).map(item => {
  item.isPlaying = false
  return item;
})
// 全局记录播放状态
const isPlaying = computed(() => {
  /** 只要有一个音乐正在播放，就认为全局正在播放 */
  return musics.value.some(item => item.isPlaying)
})

/** 根据传入的音乐实例和canvas实例就能够实现音乐的可视化动效播放 */
// canvas 绘制音乐动效
const canvasRef = ref<HTMLCanvasElement | null>(null)
const audioRef = ref<HTMLAudioElement | null>(null)
const currentMusic = ref<Music>({
  id: 0,
  songName: '',
  cover: '',
  play_url: '',
  remote_url: '',
  lyrics: '',
  isPlaying: false
})

onMounted(() => {
    usePlayMusic(canvasRef.value as HTMLCanvasElement, audioRef.value as HTMLAudioElement)
})


const playMusic = (row: Music) => {
  /**
   * 如果播放音乐的id和当前播放的id不相同，则停掉之前的播放
   */
  if (row.id !== currentMusic.value.id) {
    musics.value.some(item => {
      if (item.id === currentMusic.value.id) {
        item.isPlaying = false;
        return true;
      }
    })
  }
  /**
   * 切换点击行的音乐播放状态，并更新当前播放的音乐对象
   */
  row.isPlaying = !row.isPlaying;
  currentMusic.value = row;
  // 等待DOM更新完毕再执行，否则会报错
  nextTick(() => {
    if (currentMusic.value.isPlaying) {
      audioRef.value?.play()
    } else {
      audioRef.value?.pause()
    }
  })
}
</script>

<template>
  <ULandingSection
    icon="i-heroicons-rocket-launch"
    headline="听音乐 就现在"
    title="一切从自由开始"
    :align="'right'"
    description="一款由 Nuxt 3.0 打造的博客应用, 更懂你的心！还在犹豫什么，赶紧去探索吧！">
    <img
      style="width: 640px; height: 360px"
      src="https://picsum.photos/640/360"
      alt="xxx"
      class="w-full rounded-2xl shadow-xl ring-1 ring-gray-300 dark:ring-gray-700" />
  </ULandingSection>

  <UPageGrid class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 w-full px-64 pb-24">
    <ULandingCard
      v-for="(feature, index) in features"
      :title="feature.title"
      :description="feature.description"
      :icon="feature.icon"
      :color="'primary'" />
  </UPageGrid>

  <div class="px-64 py-12">
    <UCard
      class="w-full"
      :ui="{
        base: '',
        ring: '',
        divide: 'divide-y divide-gray-200 dark:divide-gray-700',
        header: { padding: 'px-4 py-5' },
        body: { padding: '', base: 'divide-y divide-gray-200 dark:divide-gray-700' },
        footer: { padding: 'p-4' },
      }">
      <template #header>
        <div class="flex items-center justify-between gap-3 px-4">
          <h2 class="font-semibold text-xl text-gray-900 dark:text-white leading-tight">音乐列表</h2>
          <div class="flex items-center gap-1.5">
            <span class="text-sm leading-5">每页行数:</span>
            <USelect
              :model-value="pagination.pageSize"
              @update:model-value="(val: string) => {pagination.pageSize = Number(val)}"
              :options="pageSizeOptions"
              class="me-2 w-40"
              size="xl">
              <template #leading>
                <UIcon name="i-heroicons-flag" class="w-5 h-5" />
              </template>
            </USelect>
          </div>
        </div>
      </template>

      <UTable :rows="rows" :columns="columns" :loading="!musics.length">
        <template #loading-state>
          <div @click="" class="flex items-center justify-center h-32">
            <i class="loader --6" />
          </div>
        </template>
        <template #actions-data="{ row }">
          <el-button circle :icon="VideoPlay" v-if="!row.isPlaying" @click="() => playMusic(row)" />
          <UButton :icon="'hugeicons:music-note-square-02'" @click="() => playMusic(row)" v-else />
        </template>
      </UTable>
      <div class="flex justify-end px-3 py-6 border-t border-gray-200 dark:border-gray-700">
        <UPagination v-model="pagination.page" :page-count="pagination.pageSize" :total="musics.length" />
      </div>
    </UCard>
  </div>

  <UPageHero
    class="py-64 text-violet-700"
    :class="!isPlaying ? 'px-24' : ''"
    title="音乐动效空间"
    description="尽情享受音乐带来的视觉冲击."
    :align="'center'">
    <canvas
      v-show="isPlaying"
      width="1920"
      height="360"
      ref="canvasRef"
      id="canvas"
      class="border border-stone-800 px-1 w-full bg-gray-900"></canvas>
    <audio :src="currentMusic.play_url" ref="audioRef" class="hidden"  controls crossorigin="anonymous"></audio>
    <img
      src="https://picsum.photos/640/180"
      alt="random_picture"
      class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      v-show="!isPlaying" />
  </UPageHero>
</template>

<style scoped lang="scss">
.loader {
  --color: rgb(var(--color-primary-400));
  --size-mid: 6vmin;
  --size-dot: 1.5vmin;
  --size-bar: 0.4vmin;
  --size-square: 3vmin;

  position: relative;
  width: 50%;
  display: grid;
  place-items: center;
}

.loader::before,
.loader::after {
  content: '';
  box-sizing: border-box;
  position: absolute;
}

/**
loader --6
**/
.loader.--6::before {
  width: var(--size-square);
  height: var(--size-square);
  background-color: var(--color);
  top: calc(50% - var(--size-square));
  left: calc(50% - var(--size-square));
  animation: loader-6 2.4s cubic-bezier(0, 0, 0.24, 1.21) infinite;
}

@keyframes loader-6 {
  0%,
  100% {
    transform: none;
  }

  25% {
    transform: translateX(100%);
  }

  50% {
    transform: translateX(100%) translateY(100%);
  }

  75% {
    transform: translateY(100%);
  }
}
</style>
