import React from 'react'
import cls from './MainContent.module.css'
import Post from './myPost/myPosts';



function Content(props) {
  return (
    <div className={cls.content}>
          <div>
            <img src='/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-7680x4320.jpg' alt='#1' />
          </div>
      <div className={`${cls.item} ${cls.active}`}> avatarka + description</div>
      <textarea type="text" placeholder='For Comments' className={cls.for_comment} />
      <button type='button' className={cls.btnComm}>Add</button>
          <Post name = 'Myrat'/>
        </div>
  )
}

export default Content;