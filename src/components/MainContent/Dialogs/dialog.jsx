
import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Dialogs.module.css'

const Dialog = (props) => {
  let path = "/dialogs/" + props.id;
  return (
  <div className={cls.dialog}><NavLink to={path}>{ props.name }</NavLink></div>
  )
}

export default Dialog;