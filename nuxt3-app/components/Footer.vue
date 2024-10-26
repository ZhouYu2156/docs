<script setup lang="ts">

import defaultConfig from '~/site/defaultConfig'

const { site, footer } = defaultConfig
</script>

<template>
    <footer class="bd-footer {# py-4 py-md-5 mt-5 #} bg-body-tertiary">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 text-body-secondary text-decoration-none logo"
                        href="/" :aria-label="site.title">
                        <img class="d-block me-2" style="width: 40px; height: 32px" :src="site.logo" alt="" />
                        <span class="fs-5" v-if="site.title">{{ site.title }}</span>
                    </a>
                    <ul class="list-unstyled small">
                        <li class="mt-3">
                            {{ footer.lisense }}
                        </li>
                        <li class="mt-3">{{ footer.copyright }}</li>
                    </ul>
                </div>
                <div v-for="(child, index) in footer.links" :key="index"
                    :class="['col-6 col-lg-2', index === 0 ? 'offset-lg-1' : '', 'mb-3']">
                    <h5>{{ child.title }}</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2" v-for="item in child.sublinks" :key="item.text">
                            <a :href="item.link" target="_blank">
                                {{ item.text }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="scss"></style>