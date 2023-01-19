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
        height: '200px',
        width: '100%',
        margin: '15px 10px',
        borderRadius: '10px',
        boxShadow: '2px 5px 5px 5px lightgray',
      }}
    >
      <h5 className='card-title1'>
        {title}
        <p className='card.body1'>{body}</p>
        <p style={{ fontWeight: '500' }}>
          Tags:
          {tags.map((tag) => (
            <span style={{ backgroundColor: 'white', color: 'lightblue' }}>
              {'  '}
              {tag.toLocaleUpperCase()}{' '}
            </span>
          ))}
        </p>
      </h5>
    </div>
  )
}

export default PostSection
