/**
 * @description
 * 定义每个链接的数据结构
 */
export type ReferenceItems = {
	id: number
	title: string
	link: string
	icon: string
}[]

/** 视频教程系列 */
export interface CourseVideoSeriesProps {
	/** 封面 */
	cover: string
	/** 标题 */
	title: string
	/** 概要介绍 */
	summary: string
	/** 视频源 */
	source: string
	/** 分类数量 */
	cates: number
	/** 视频总数 */
	total: number
}
