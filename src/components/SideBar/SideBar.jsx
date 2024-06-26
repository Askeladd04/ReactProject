import React from 'react'
import cls from './SideBar.module.css'
function Nav() {
  return (
    <nav className={cls.nav}>
    <div className={`${cls.item} ${cls.active}`}><a href='#1'>Profile</a></div> 
    <div className={cls.item}><a href='#1'>Messages</a></div> 
    <div className={cls.item}><a href='#1'>News</a></div> 
    <div className={cls.item}><a href='#1'>Music</a></div> 
    <div className= {cls.item_settings} ><a href='#1'>Settings</a></div> 
  </nav>
  )
}

export default Nav;