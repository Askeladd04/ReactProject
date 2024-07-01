import React from 'react';
import cls from './MainContent.module.css';
import Post from './myPost/myPosts';
import { addPostActionCreator,updatePostActionCreator } from '../../redux/DialogsReducer';



function Content(props) {



  let post = props.posts ? props.posts.map(post => <Post name={post.name} message={post.message} deletePost={props.deletePost} />) : console.log("KOd")

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }
  let changePost = (e) => {
    let text = e.target.value
    props.dispatch(updatePostActionCreator(text));
    console.log(props.newPost)
 }
  return (
    <div className={cls.content}>
          <div>
            <img src='/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-7680x4320.jpg' alt='#1' />
          </div>
      <div className={`${cls.item} ${cls.active}`}> avatarka + description</div>
      <textarea type="text" placeholder='For Comments' className={cls.for_comment} value={props.newPost} onChange={changePost} />
      <button onClick={addPost} type='button' className={cls.btnComm}>Add</button>
        {post}
        </div>
  )
}

export default Content;