<script setup lang='ts'>
import { ref } from 'vue'

/** 定义记录行的结构 */
interface User { id: number, name: string, age: number }
/** 请求数据 */
const { error, data } = await useFetch('/api/getUsers')
/** 解构实际的数据出来 => 类型断言(获取更好的类型提示) */
const { rows } = data.value as { rows: User[]; error?: undefined }

const users = ref<User[]>(rows || [])

interface Music
{
  songName: string
  cover: string
  playUrl: string
  remote_url: string
  lyrics: string
}

type Musics = Record<string, Music[]>

const musics = ref<Musics>({})

onMounted(async () =>
{
  const response = await fetch('http://localhost:3000/musics.json')
  if (!response.ok) {
    throw new Error('Network response was not ok!')
  }
  musics.value = (await response.json()) as Musics
  console.log(musics.value)
})
</script>

<template>
  <div id="app">
    <NuxtPage />
  </div>
</template>

<style scoped lang='scss'></style>