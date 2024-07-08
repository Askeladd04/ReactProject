import React from 'react'
import cls from './SideBar.module.css'
import { NavLink } from 'react-router-dom';
function Nav() {
  return (
    <nav className={cls.nav}>
    <div className={`${cls.item} ${cls.active}`}><NavLink to='/Content'>Profile</NavLink></div> 
    <div className={cls.item}><NavLink to='/Dialogs'>Messages</NavLink></div> 
    <div className={cls.item}><a href='#1'>News</a></div> 
    <div className={cls.item}><a href='#1'>Music</a></div> 
    <div className= {cls.item}   ><a href='#1'>Settings</a></div> 
  </nav>
  )
}

export default Nav;