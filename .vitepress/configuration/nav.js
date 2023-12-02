// 顶部导航栏
export default [
    /* 首页 */
    {
        text: "首页",
        link: '/'
    },
    /* 快速开始 */
    {
        text: '快速开始',
        link: '/content/'
    },
    /* 技术文档 */
    {
        text: '技术文档',
        items: [
            {
                text: 'Vue',
                link: '/content/technology/vue/'
            },
            {
                text: 'React',
                link: '/content/technology/react/'
            },
            {
                text: '云计算笔记',
                link: '/content/technology/cloud/'
            },
            {
                text: 'VitePress',
                link: '/content/technology/vitepress/'
            },
        ]
    },
    /* 学习笔记 */
    {
        text: '学习笔记',
        items: [
            {
                text: '三大原理',
                items: [
                    {
                        text: '编译原理',
                        link: '/content/notes/compiler/'
                    },
                    {
                        text: '计算机组成原理',
                        link: '/content/notes/design/'
                    },
                    {
                        text: '微机原理',
                        link: '/content/notes/microprocessor'
                    },
                ]
            },
            {
                text: '其他',
                items: [
                    {
                        text: '高数',
                        link: '/content/notes/math/'
                    },
                    {
                        text: '英语',
                        link: '/content/notes/english/'
                    },
                ]
            }
        ]
    }
]