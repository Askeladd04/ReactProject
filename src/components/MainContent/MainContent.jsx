import React from 'react';
import cls from './MainContent.module.css';
import Post from './myPost/myPosts'



export default function Content(props) {

debugger
  let post = props.posts ?  props.posts.map(post => <Post name={post.name} message={post.message} />): console.log('404') ;

  let addNewPost = () => {
    props.addNewPost();
  }

  let updateNewPosts = (e) => {
    let text = e.target.value;
    props.updateNewPost(text);
  }

  return (
    <div className={cls.content}>
          <div>
            <img src='/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-7680x4320.jpg' alt='' />
          </div>
      <div className={`${cls.item} ${cls.active}`}> avatarka + description</div>
      <textarea type="text" placeholder='For Comments' className={cls.for_comment} value={props.newPost} onChange={updateNewPosts} />
      <button onClick={addNewPost} type='button' className={cls.btnComm}>Add</button>
        {post}
        </div>
  )
} 
