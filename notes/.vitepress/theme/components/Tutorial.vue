<script setup lang='ts'>
import { ref } from 'vue'
import { CourseVideoSeriesProps } from '../../configuration/modules/types'

const props = defineProps<{
    video: CourseVideoSeriesProps
}>()
</script>

<template>
    <div class="video-wrapper">
        <div class="tutorial-cover">封面</div>
        <div class="tutorial-cover-content">
            <h1 class="tutorial-cover-title">title</h1>
            <video
                src="https://v2.kwaicdn.com/ksc2/28RpiInDAmQNwMUt1fvwkSTwvqwYPLFZFlogMeZ4o6wZfWztVKXID-EKJ_B8dGx2icN8UPOx53ibT5kuzLtWlgVDXzxL_qJh3nSW3e0HR9r1Mwz7iFRp5oUftXlQdxEU.mp4?pkey=AAUYmlE2vK2UNWE2dugooUqKDiB-sCHMUxWCvgeMyYYIJxAFRnNmO-QsWO1rTXGS_VI4b_1EPvdpfrjKGB_zpZMZSxKE6JrGMsUPogiAX_4XJRDXKXr_eNTZocMLMLZrvYA&tag=1-1729071274-unknown-0-6eanr9ufbi-7ac0c8100b63e3de&clientCacheKey=3x3zkkppqd32r8c_78c6ad55&di=24141828&bp=14944&tt=hd15&ss=vp"
                controls></video>
        </div>
        <p class="tutorial-cover-footer"></p>
    </div>
</template>

<style scoped lang='scss'></style>