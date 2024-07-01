import React from "react";
import cls from'./Dialogs.module.css'
import Dialog from "./dialog";
import Message from "./Message";
import { updateMessageActionCreator,addNewMessageActionCreater } from "../../../redux/MainContentReducer";


function Dialogs(props) {
  const addMes = () => {
    props.dispatch(addNewMessageActionCreater())
  }
  const updateStateMessage = (e) => {
    let text = e.target.value 
    props.dispatch(updateMessageActionCreator(text))
  }
   let dialogEl = props.userData ? props.userData.map(d => <Dialog name={d.name} id={d.id} />) :  console.log("Kod Oshibki")
   let messageEl = props.usersMessage ? props.usersMessage.map(m => <Message message={m.message} />): console.log("Kod Oshibki")
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialog_items}>{dialogEl}
      </div>
      <div className={cls.messages}>
        {messageEl}
        <textarea onChange={updateStateMessage}className={cls.forMessage} type="text" value={props.newMessage} />
        <button onClick={addMes} className={cls.sentBtn}>Sent</button>
      </div>
      </div>
  )
}

export default Dialogs;