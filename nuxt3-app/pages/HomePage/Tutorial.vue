<script setup lang="ts">
import Avatar from '~/public/images/avatar.jpg'

interface Category {
  id: number
  name: string
  cover: string
  description: string
  created_at: string
  updated_at: string
  is_deleted: boolean
}

const categories = ref<Category[]>([])

/** 请求数据 */
const baseURL = 'http://zhouyu2156.cn:8000'
const { data } = await useAsyncData('get-categories', async () => {
  return $fetch('/api/categories', { baseURL })
})
categories.value = data.value as Category[]

</script>

<template>
  <ULandingSection
    :ui="{
      wrapper: 'sm:py-6 md:py-12 lg:py-24 py-12',
    }"
    title="呕心沥血、倾情制作！"
    description="专注研究前端和人工智能领域，深入浅出讲解全栈开发核心技术，让学习更简单！">
    <template #headline>
      <h3 class="py-2 font-bold text-xl flex items-center justify-between">
        <UAvatar
          :src="Avatar"
          alt="Avatar"
          chip-color="primary"
          chip-position="top-right"
          :chip-text="'vip'"
          class="me-5 scale-150" />
        <UBadge label="全栈开发攻城狮" color="primary" variant="subtle" />
      </h3>
    </template>
  </ULandingSection>

  <ULandingGrid
    :ui="{
      wrapper: 'flex flex-col lg:grid gap-8 lg:grid-cols-12 relative px-36',
    }">
    <ULandingCard
      :ui="{
        icon: {
          wrapper: 'mb-2 pointer-events-none w-1/4 mx-auto rounded',
        },
      }"
      v-for="category in categories"
      :key="category.id"
      :to="{ path: '/HomePage/TutorialSeries', query: { id: category.id } }"
      :target="'_self'"
      class="col-span-4 row-span-4"
      icon="i-heroicons-swatch"
      :title="category.name"
      :description="category.description">
      <template #icon>
        <img :src="category.cover" :alt="category.name" class="rounded" />
      </template>
    </ULandingCard>
  </ULandingGrid>
</template>

<style scoped lang="scss"></style>
