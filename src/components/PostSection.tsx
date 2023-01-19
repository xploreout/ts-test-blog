import React from 'react'
import { iPost } from '../data/iPost'
import 'bootstrap/dist/css/bootstrap.min.css'

const PostSection = ({ id, title, body, tags }: iPost) => {
  return (
    <div
      className='post-card'
      style={{
        padding: '10px',
        maxWidth: '1024px',
        width: '100%',
        margin: '15px 10px',
        borderRadius: '10px',
        boxShadow: '2px 5px 5px 5px lightgray',
      }}
    >
      <h5 style={{ padding: '0 20px' }}>
        <p style={{ fontWeight: '700' }}>{title}</p>

        <p className='card.body1'>{body}</p>
        <p style={{ fontWeight: '500' }}>
          Tags:
          {tags.map((tag) => (
            <span
              style={{
                backgroundColor: 'white',
                color: 'lightblue',
                padding: '0 10px ',
              }}
            >
              {tag.toLocaleUpperCase()}
            </span>
          ))}
        </p>
      </h5>
    </div>
  )
}

export default PostSection
