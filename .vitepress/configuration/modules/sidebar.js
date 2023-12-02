export const sidebar = {
    '/content/': [
        {
            // 将分类进行汇总
            text: '全部分类',
            // collapsed: false,   // 默认是 true 展开的状态，设置为true成折叠状态
            items: [
                // 每一个具体的分类
                {
                    text: '学习笔记',
                    collapsed: true,
                    items: [
                        {
                            text: '高数',
                            link: '/content/notes/math/'
                        },
                        {
                            text: '英语',
                            link: '/content/notes/english/'
                        },
                        {
                            text: '编译原理',
                            link: '/content/notes/compiler/'
                        },
                        {
                            text: '微型计算机原理',
                            link: '/content/notes/microprocessor/'
                        },
                        {
                            text: '计算机组成原理',
                            link: '/content/notes/design/'
                        },
                    ]
                },
                {
                    text: '技术栈',
                    collapsed: true,
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
                }
            ]
        },
    ]
}