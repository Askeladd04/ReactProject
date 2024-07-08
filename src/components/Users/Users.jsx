import axios from "axios";
import React from "react";


const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers(
      [
        { name: "Dimych", userid: '1', followed: false },
        { name: "Andrey", userid: '2', followed: false },
        { name: "Sveta", userid: '3', followed: true },
        { name: "Sasha", userid: '4', followed: true },
        { name: "Viktor", userid: '5', followed: false },
        { name: "Valera", userid: '6', followed: false },
      ]
    )
  }
 
    axios.get("https://github.com/Askeladd04").then(data => console.log(data))


  return (
    <div> {
      props.users ?
        props.users.map(user => {
          return <div key={user.userid}>
            {user.name}
            {user.followed ? <button onClick={() => props.unfollow(user.userid)} type='button' className="followedBtn">UnFollow</button> :
              <button onClick={() => props.follow(user.userid)} type='button' className="followedBtn">follow</button>}
          </div>
        }) : console.log(undefined)
    }
    </div>
  )
}

export default Users