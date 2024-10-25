# Nuxt 快速入门

::: tip 推荐 
- 前往：[Nuxt官网](https://nuxt.com/)
:::


## Nuxt 是什么？

::: tip 介绍
Nuxt 是一个基于 Vue 的应用框架，它提供了一些开箱即用的特性，如服务器端渲染、路由懒加载、数据预取、代码分割等。
:::


## 项目安装
::: info 初始化
```bash
$ npx nuxi@latest init my-nuxt-app
```
:::

::: details 安装`Nuxt`项目报错的解决办法
- 在安装`Nuxt`项目时报错如下，如何解决？

ERROR Error: Failed to download template from registry: Failed to download https://raw.githubusercontent.com/nuxt/starter/templates/templates/v3.json: TypeError: fetch failed.

- 报错原因：

可能是因为国内的网络政策，对 `raw.githubusercontent.com` 进行了 DNS 污染，这会导致你的请求在到达 DNS 服务器后解析到错误的服务器 IP 地址，从而无法正确连接到 `githubusercontent` 的服务，所以当 ping 这个地址的时候也是 ping 不通的（`ping raw.githubusercontent.com`）。

- 解决办法：在本地配`Host`
> 在本地的 hosts 文件中新加一行配置，即可解决报错问题，其实就是配置本地域名和主机映射关系表，当本机向外部发起域名请求时，会优先从本地`IP - 域名`映射表中查找对应关系，如果找到了域名的IP映射就不会再走DNS服务器解析，即可拿着映射的IP地址直接向目标主机进行访问。

> 路径: `C:/Windows/System32/drivers/etc/hosts`。权限问题不能直接修改`hosts`文件，可以先复制到桌面，添加了下面的配置之后再替换回原来的位置即可。

```txt
# ...
185.199.108.133 raw.githubusercontent.com
```

> 转载自: [Nuxt 项目安装时报错（TypeError: fetch failed）的解决](https://jsnoteclub.com/blog/nuxt-fetch-failed/)
:::

- 解决成功再次安装`Nuxt项目`

![解决nuxt项目安装问题](/pictures/nuxt/解决nuxt项目安装问题.png)


## 项目启动

```bash
$ cd my-nuxt-app
$ npm run dev
```

![nuxt项目结构](/pictures/nuxt/nuxt项目结构.png)

注意：

- composables下如果有嵌套目录，则需要在嵌套目录下放置index.ts，再在里面export相应对象。
- components组件嵌套在目录内，可以用驼峰式引入，如引入components/user/avatar.vue，可以用`<UserAvatar>`
- server目录，下面可以有api，middleware, plugin等子目录，api下面每个文件对应一个restful API，好像没法一个文件定义多个API。

> 转载自: [Nuxt3+ElementPlus构建打包部署全过程](https://www.jb51.net/article/272319.htm)

## 全局配置

> 可以定义服务端(或客户端都可以)全局访问的变量、预处理器配置等

::: code-group
```ts [nuxt.config.ts]
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	// css: ['~/assets/styles/global.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/styles/global.scss" as *;',
                    // 第一种方式: 去掉某些特性弃用的警告信息
                    // silenceDeprecations: ['legacy-js-api'],
                    // 第二种方式: 去掉某些特性弃用的警告信息
					api: 'modern-compiler',
				},
			},
		},
	},
	runtimeConfig: {
		// 可以在服务端全局访问
		count: 100,
        // 可以在服务端 & 客户端全局访问
		public: {
			baseURL: 'http://localhost:8000/',
		},
	},
	modules: ['@element-plus/nuxt'],
	elementPlus: {
		/** Options */
	},
})
```

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const config = useRuntimeConfig()
console.log(config.count)   // 服务端可以获取到, 客户端获取不到
console.log(config.public.baseURL)  // 服务端和客户端都可以获取到
const site = reactive({
  title: 'Nuxt 3',
  content: 'This is a Nuxt 3 app.'
})
</script>

<template>
  <div>
    <h1>{{ site.title }}</h1>
    <h3>{{ site.content }}</h3>
  </div>
</template>

<style scoped lang="scss">
h3 {
  color: $primary;
}
</style>
```
:::


## 配置 `Element-Plus`

> 参考自: [Nuxt安装扩展插件](https://nuxt.com/modules)

```bash
$ npm i element-plus @element-plus/nuxt -D
```

- 配置`nuxt.config.ts`

> 参考上面`nuxt.config.ts`中`element`的配置部分。初次配置时，需要执行`npm run dev`，否则会有报错信息。运行一遍生成了`.nuxt`的缓存文件后，就会自动添加可以配置`element`的配置属性，从而不会报错了。上面的`element`组件库的配置默认内置了`自动导入功能`，不需要再关心这个，直接使用组件即可。

## 路由

- `NuxtLink` 配置路由

- `NuxtPage` 配置路由出口


## 路由命名约定

::: tip 说明
`Nuxt`项目中页面默认启用约定式路由匹配规则，路由会自动匹配项目根路径下的`pages`页面。其中页面路由命名规则如下：
:::

- `home.vue` 精确路由

- `[...404].vue` 配置全局路由

- `[[path]]` 可选路径路由

- `[id].vue` 动态路由路径参数

- `user`目录 默认加载目录下面的`index.vue`页面

- `user.vue` 和 同名的`user`目录同时存在，则`user`目录是`user.vue`的子路由(此时构成嵌套路由)


## 编程式导航

- 客户端跳转: `useRouter` => `router.push('/')`

- 服务端跳转: `navigateTo('/login')` => 确切地应该叫`重定向`