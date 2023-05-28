export interface UserItemType {
  id: number
  avatar: string
  author: string
  country: string
  score: number
  subtitle: string
  title: string
}

export interface ScoreFilter {
  value: string;
  item: any;
}