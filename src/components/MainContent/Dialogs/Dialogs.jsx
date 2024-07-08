import React from "react";
import cls from'./Dialogs.module.css'
import Dialog from './dialog'
import Message from './Message'



function Dialogs(props) {
  const addMes = () => props.addMessage();
  const updateStateMessages = (e) => {
    let text = e.target.value
    props.updateStateMessages(text)
  }
  const dialogEl = props.dialogsPage.userData ? props.dialogsPage.userData.map(d => <Dialog name={d.name} id={d.id} />):console.log(undefined)
  const messageEl =  props.dialogsPage.usersMessage ? props.dialogsPage.usersMessage.map(m => <Message message={m.message} />): console.log(undefined) 
  return (
    <div className={cls.dialogs}>
      <div className={cls.dialog_items}>{dialogEl}
      </div>
      <div className={cls.messages}>
        {messageEl}
        <textarea onChange={updateStateMessages}className={cls.forMessage} type="text" value={props.dialogsPage.newMessage} />
        <button onClick={addMes} className={cls.sentBtn}>Sent</button>
      </div>
      </div>
  )
}

export default Dialogs;