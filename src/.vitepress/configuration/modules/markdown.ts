import { MarkdownOptions } from "vitepress";

export const markdown: MarkdownOptions = {
    lineNumbers: true,
    container: {
        tipLabel: '提示',
        warningLabel: '警告',
        dangerLabel: '危险',
        infoLabel: '信息',
        detailsLabel: '详细信息'
    }
}