import React from 'react'
import { iPost } from '../data/iPost'
import 'bootstrap/dist/css/bootstrap.min.css'

const PostSection = ({ id, title, body, tags }: iPost) => {
  return (
    <div
      className='card'
      style={{
        maxWidth: '500px',
        width: '400px',
        flex: 'wrap',
        height: '200px',
        overflow: 'auto',
      }}
    >
      <h5 className='card-title1'>
        {title}
        <p className='card.body1'>{body}</p>
      </h5>
    </div>
  )
}

export default PostSection
