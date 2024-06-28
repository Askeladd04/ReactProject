import React from "react";
import cls from'./Dialogs.module.css'
import Dialog from "./dialog";
import Message from "./Message";

let userData = [
  { name: "Dimych", id: '1' },
  { name: "Andrey", id: '2' },
  { name: "Sveta",  id: '3'  },
  { name: "Sasha",  id: '4'  },
  { name: "Viktor", id: '5' },
  { name: "Valera", id: '6' },
]

let usersMessage = [
  { id: 1 , message:"Hi" },
  { id: 2, message: "How are you" },
  { id :3 , message:"Lol"}
]

let dialogEl = userData.map(dialog => <Dialog name={dialog.name} id={dialog.id} />)
let messageEl = usersMessage.map(m => <Message message={m.message} />)


const Dialogs = () => {
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