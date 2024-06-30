import React from 'react'
import cls from './myPosts.module.css'

function Post(props) {
  return(
    <div className={cls.wrapper_item}>
      <div><span>{props.name}</span></div>
      <div>{props.message}</div>
      <div><button type='button' className={cls.btn}>Like</button></div>
    </div>
  )
}


export default Post;