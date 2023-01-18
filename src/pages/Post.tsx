import React from 'react'

type postProps = {
  id: number
  title: string
  userId: number
  tags: string[]
  reactions: number
}
const Post = ({ id, title, userId, tags, reactions }: postProps) => {
  return <div>Title: {title}</div>
}

export default Post
