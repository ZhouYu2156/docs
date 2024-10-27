<script setup lang='ts'>
import { ElIconMoon } from '#imports'
import { Fragment } from 'vue/jsx-runtime'
import defaultConfig from '~/site/defaultConfig'

const toggleMode = () =>
{
  // 切换主题
  const html = document.documentElement
  html.classList.toggle('dark')
}

const { site } = defaultConfig
</script>

<template>
  <div id="app" class="xxxl:bg-gradient-to-tr xxxl:from-green-600 xxxl:to-violet-600">
    <div :class="[
      'jumbotron py-40',
      site.banner && 'jumbotron-bg',
      site.gradient && 'rainbow-gradient-bg'
    ]" style="width: 100%; height: 100%;">
      <div class="flex flex-col">
        <div class="flex flex-row justify-evenly px-8 pb-40">
          <!-- 左侧 hero 标题、描述 -->
          <div :class="[
            site.hero_title && ''
          ]">
            <h1 v-if="site.hero_title" :class="[
              'text-gradient-bg',
              'jumbotron-title',
              'font-black',
              site.typing && 'typing',
              site.repeatTyping && 'typing-repeat',
              site.text_typing_and_gradient ? 'text-typing-and-gradient' : (site.text_gradient ? 'text-gradient-animation' : '')
            ]">
              {{ site.hero_title }}
            </h1>
            <p class="lead font-bold">
              {{ site.lead }}
            </p>
            <hr v-if="site.divider" class="my-4">
            <p class="text-teal-700 px-4 py-6">
              {{ site.subtitle }}
            </p>
            <!-- motto 座右铭 -->
            <p v-if="site.motto" :class="[
              'my-0',
              'text-gradient-bg',
              site.motto_text_gradient ? 'text-gradient-animation' : ''
            ]" style="padding-top: 1rem; padding-left: 1.5rem;font-size: 1.5rem;">
              {{ site.motto }}
            </p>
            <NuxtLink
              class="btn btn-lg btn-outline-primary mt-3 block md:inline-block lg:px-8 lg:py-3 lg:float-end sm:float-none   text-2xl"
              :to="{ name: 'HomePage' }" role="button">
              <span v-if="site.Go_isGradient" class="text-gradient-bg text-gradient-animation">
                {{ site.Go }}
              </span>
              <Fragment v-else>
                {{ site.Go }}
              </Fragment>
            </NuxtLink>
          </div>
          <!-- 右侧 hero 图片 -->
          <div class="flex items-center">
            <img v-if="site.hero_img" :src="site.hero_img" alt="hero-icon" class="hero-image">
          </div>
        </div>
        <div class="flex justify-center z-10">
          <el-button size="large" type="primary" @click="ElMessage.info('快去开启宇宙探索吧~')">
            自
          </el-button>
          <el-button size="large" type="success" @click="ElMessage.success('快去开启宇宙探索吧~')">
            定
          </el-button>
          <el-button :icon="ElIconMoon" size="large" style="font-size: larger;" @click="toggleMode" />
          <el-button size="large" type="danger" @click="ElMessage.error('快去开启宇宙探索吧~')">
            主
          </el-button>
          <el-button size="large" type="info" @click="ElMessage.info('快去开启宇宙探索吧~')">
            题
          </el-button>
        </div>
      </div>
      <svg class="waves sm:hidden md:block fixed bottom-0" xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none"
        shape-rendering="auto">
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g class="parallax">
          <use xlink:href="#gentle-wave" x="48" y="0" />
          <use xlink:href="#gentle-wave" x="48" y="3" />
          <use xlink:href="#gentle-wave" x="48" y="5" />
          <use xlink:href="#gentle-wave" x="48" y="7" />
        </g>
      </svg>
    </div>
  </div>
</template>

<style scoped lang='scss'>
/** 波浪 */
@use '~/assets/scss/wave.scss';
/** 巨幕 */
@use '~/assets/scss/jumbotron.scss';
/** 打字机动画 */
@use '~/assets/scss/typing.scss';
</style>
