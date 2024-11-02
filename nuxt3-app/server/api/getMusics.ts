import { useAsyncData } from 'nuxt/app'

export default defineEventHandler(async (event) =>
{
  try {
    return await useAsyncData(async () =>
    {
      return await $fetch('http://127.0.0.1:8001/api/musics')
    })
  } catch (error: any) {
    console.error(error)
    return { error: error.message }
  }
})
