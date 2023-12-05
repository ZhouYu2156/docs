<script setup>

// defineProps是宏定义，不再需要导入，可以直接使用
defineProps({
    /* 需要传入标题文本 */
    text: {
        type: String,
        required: true
    }
})

</script>

<template>
    <div class="margin-auto w-100 text-center">
        <h1 class="gradient-title">
        {{ text }}
        <a class="header-anchor" :href="'#'+text">​</a>
    </h1>
    </div>
</template>

<style scoped>
.gradient-title {
    display: inline-block;
    -webkit-background-clip: text;
    background-clip: text;
    color: #0000;
    white-space: nowrap;
    background-image: linear-gradient(to right,#09c8ce,#eb2f96);
    margin-bottom: 20px;
}

</style>