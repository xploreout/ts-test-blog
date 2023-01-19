import React, { useState } from 'react'
import { SpreadAssignment } from 'typescript'
import { iPost } from '../data/iPost'
import PostSection from './PostSection'
import 'bootstrap/dist/css/bootstrap.min.css'

interface iProps {
  posts: iPost[] | undefined
  filter: string
}

const Posts: React.FC<iProps> = ({ posts, filter }) => {
  const [showData, setShowData] = useState<boolean>(true)
  const handleClick = () => {
    setShowData(!showData)
  }
  const section = document.getElementById(`${filter}`)

  return (
    <div style={{ marginTop: '50px' }}>
      <button onClick={handleClick} style={{ width: '100%' }}>
        {showData ? `Hide ${filter}` : `Show ${filter}`}
      </button>
      <div
        className=''
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexFlow: 'wrap',
        }}
      >
        {showData &&
          posts &&
          posts.map((item) => (
            <PostSection
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
              tags={item.tags}
            />
          ))}
      </div>
    </div>
  )
}

export default Posts
