<script setup lang="ts">
interface TutorialVideo {
  title: string
  summary: string
  cover: string
  play_url: string
  views: number
  likes: number
  created_at: string
  updated_at: string
  is_deleted: boolean
  is_paid: boolean
  category: number
}


/**
 * 前置守卫 - 判断是否给定<分类 id>
 */
const route = useRoute()

/**
 * 视频列表数据
 */
const videos = ref<TutorialVideo[]>([])
/**
 * 当前播放视频
 */
const currentVideo = ref<TutorialVideo>({
  title: '',
  summary: '',
  cover: '',
  play_url: '',
  views: 0,
  likes: 0,
  created_at: '',
  updated_at: '',
  is_deleted: false,
  is_paid: false,
  category: 0
})

/** 请求数据 */
const baseURL = 'http://zhouyu2156.cn:8000'
/** 获取所有视频 */
const { data } = await useAsyncData('get-videos', () => {
  return $fetch('/api/videos', { baseURL })
})
videos.value = (data.value as TutorialVideo[]).filter(item => item.category === Number(route.query.id))
currentVideo.value = videos.value[0] ?? currentVideo.value

/**
 * 侧边栏 - 视频列表
 */
const links = computed(() => {
  return videos.value.map(item => {
    /**
     * 侧边栏每个链接绑定点击事件
     */
    return {
      label: item.title,
      click: (e: MouseEvent) => {
        currentVideo.value = item
      },
    }
  })
})

/**
 * 播放时隐藏封面
 */
const videoRef = ref()
const coverRef = ref()
onMounted(() => {
  videoRef.value?.addEventListener('playing', () => {
    coverRef.value?.classList.add('hidden')
  })
  videoRef.value?.addEventListener('pause', () => {
    coverRef.value?.classList.remove('hidden')
  })
})

</script>

<template>
  <ULandingGrid
    :ui="{
      wrapper: 'px-12 mt-6',
    }">
    <ULandingCard class="col-span-4 row-span-12" title="视频列表">
      <UPageLinks :links="links" />
    </ULandingCard>

    <ULandingCard color="violet" class="col-span-8 row-span-12" :title="currentVideo.summary">
      <template #description>
        <div class="w-full h-full relative video-area">
          <img :src="currentVideo.cover"
               :alt="currentVideo.title"
               class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
               ref="coverRef"
          />
          <video
              controls
              :src="currentVideo.play_url"
              ref="videoRef" />
        </div>
      </template>
    </ULandingCard>
  </ULandingGrid>
</template>

<style scoped lang="scss">
.video-area {
  margin-top: 20px;
  img, video {
    width: 100%;
    max-height: 600px;
    border-radius: 15px;
    object-fit: fill;
  }
}
</style>
