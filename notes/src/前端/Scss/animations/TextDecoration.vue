<template>
    <h1 class="demo">Hello world!</h1>
</template>

<style scoped lang='scss'>
@mixin textDecoration( // solid, double, dotted, dashed, wavy

    $textLine: wavy,
    // none, underline, overline, line-throughd, blink
    $textStyle: underline,
    // 颜色
    $textColor: red,
    // 文本下划线的偏移量
    $textOffset: 0.5em,
    // 文本渐变颜色
    $backgroundImage: linear-gradient(to right, red, green, blue)) {
    // 设置下划线的样式
    text-decoration: $textLine $textStyle $textColor;
    // 设置下划线的偏移量
    text-underline-offset: $textOffset;
    // 设置下划线渐变颜色
    background-image: transparent;
}

/** 使用伪元素设置文本下划线 */
@mixin textDecorationPseudo {
    color: linear-gradient(to right, red, blue);
    width: max-content;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, red, green, blue);
    }
}


.demo {
    @include textDecoration;
}
</style>