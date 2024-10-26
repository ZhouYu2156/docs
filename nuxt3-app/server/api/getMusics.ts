import fs from 'fs/promises'
import path from 'path'

export default defineEventHandler(async (event) => {
	try {
		// 获取 public 目录下的 musics.json 文件路径
		const filePath = path.join(process.cwd(), 'public', 'musics.json')

		// 读取文件内容
		const musicsBuffer = await fs.readFile(filePath)

		// 将 Buffer 转换为字符串并解析为 JSON
		const musics = JSON.parse(musicsBuffer.toString())

		console.log(musics)
		return { musics }
	} catch (error: any) {
		console.error(error)
		return { error: error.message }
	}
})
