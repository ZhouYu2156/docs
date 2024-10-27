export interface Music {
  songName: string
  cover: string
  playUrl: string
  remote_url: string
  lyrics: string
}

export type Musics = Record<string, Music[]>
