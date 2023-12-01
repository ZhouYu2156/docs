import path from 'node:path'
import fs from 'node:fs'
import { log } from 'node:console'

// 文件根目录
const DIR_PATH = path.resolve()
// 白名单，过滤不是文章的文件和文件夹
const WHITE_LIST = ['index.md', '.vitepress', 'node_modules', '.idea', 'assets']

// 判断是否是文件夹
const idDirectory = (path) => fs.lstatSync(path).isDirectory()

// 取差值
const intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => {})))

export const set_sidebar = (pathname) => {
    // 获取 pathname 的路径
    const dirPath = path.join(DIR_PATH, pathname)
    // 读取 pathname 下的所有文件或者文件夹
    const files = fs.readdirSync(dirPath)
    // 过滤掉
    const items = intersections(files, WHITE_LIST)
    console.log(items);
    return {}
}