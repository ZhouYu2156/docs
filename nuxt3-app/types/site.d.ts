export interface Music {
  id: number
  songName: string
  cover: string
  play_url: string
  remote_url: string
  lyrics: string,
  isPlaying: boolean
}

export type Musics = Record<string, Music[]>

export interface Footer {
  lisense: string
  copyright: string
  links: Array<{
    label: string
    children: Array<{
      label: string
      to: string
      target?: string
    }>
  }>
}

export interface SiteConfig {
  /** 全局站点配置 */
  lang: string
  title: string
  description: string
  keywords: string
  icon: string
  logo: string
  banner: boolean
  gradient: boolean
  text_gradient: boolean
  typing: boolean
  text_typing_and_gradient: boolean
  repeatTyping: boolean
  hero_img: string
  hero_title: string
  lead: string
  subtitle: string
  motto: string
  motto_text_gradient: boolean
  divider: boolean
  Go: string
  Go_isGradient: boolean
}