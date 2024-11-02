<script setup lang="ts">
import defaultConfig from '../site/defaultConfig'
</script>

<template>
  <UHeader :links="defaultConfig.navbars">
    <template #logo>
      <Logo class="w-auto h-6" />
    </template>

    <template #right>
      <UColorModeToggle />
      <UButton
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        to="https://github.com/ZhouYu2156"
        target="_blank" />
      <UButton
        icon="i-simple-icons-bilibili"
        color="sky"
        variant="ghost"
        to="https://space.bilibili.com/431828034"
        target="_blank" />
      <UButton
        icon="i-simple-icons-gitee"
        color="rose"
        variant="ghost"
        to="https://gitee.com/ZhouYu2156"
        target="_blank" />
    </template>
  </UHeader>

  <UMain>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UMain>

  <!-- 页脚 -->
  <UFooterColumns :links="defaultConfig.footer.links" class="w-full px-64 py-10">
    <template #right> Copyright © {{ new Date().getFullYear() }} By MIT License. </template>
  </UFooterColumns>
</template>
