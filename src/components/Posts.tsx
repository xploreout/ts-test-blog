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
      <button onClick={handleClick} style={{ width: '180px' }}>
        {showData ? `Hide ${filter}` : `Show ${filter}`}
      </button>
      <div
        className='d-inline-flex p-5'
        style={{ maxWidth: '1024px', flexFlow: 'wrap' }}
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
