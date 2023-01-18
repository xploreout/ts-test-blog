export interface iPost {
  id: number
  title: string
  userId?: number
  body: string
  tags: string[]
  reactions?: number
  tagSection?: string
}
