### 默认容器标题
- 代码如下：
```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```
- 效果如下：
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


::: warning 全局块标题更改
可以全局更换块标题，让其对整个项目生效。
:::

```js
// config.js
export default defineConfig({
    markdown: {
        container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
        }
    }
})
```

### 自定义容器标题
- 代码如下：
```md
::: danger 小心
Danger zone, do not proceed
:::
```
- 效果如下：
::: danger 小心
在标识符块后面接文字，就是这一块的标题
:::