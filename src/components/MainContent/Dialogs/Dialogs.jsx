import React from "react";
import cls from'./Dialogs.module.css'
import Dialog from "./dialog";
import Message from "./Message";
let dialogEl;
let messageEl;

function Dialogs(props) {
   dialogEl = props.userData ? props.userData.map(d => <Dialog name={d.name} id={d.id} />) :  alert("Kod Oshibki")
   messageEl = props.usersMessage ? props.usersMessage.map(m => <Message message={m.message} />): alert("Kod Oshibki")
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialog_items}>{dialogEl}
      </div>
      <div className={cls.messages}>{messageEl}
      </div>
     </div>
  )
}

export default Dialogs;