import React from 'react'
import cls from './MainContent.module.css'


function Content() {
  return (
    <div className={cls.content}>
          <div>
            <img src='/166501-mikael_gustafsson_malenkaya_pamyat-oblako-rastenie-atmosfera-voda-7680x4320.jpg' alt='#1' />
          </div>
          <div className={cls.item}> avatarka + description</div>
          <div className={cls.item}> My post</div>
          <div className={cls.item}> New post</div>
          <div className={cls.item}> post1</div>
          <div className={cls.item}> post2</div>
        </div>
  )
}

export default Content;