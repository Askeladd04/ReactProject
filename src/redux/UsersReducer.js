export const followAC = (userid) => ({ type: 'FOLLOW', id:  userid });
export const unfollowAC = (userid) => ({type: 'UNFOLLOW', id: userid})
export const setUser = (users) => ({type:'SET-USER', users})



let initialState = {
  userData: [
    { name: "Dimych", userid: '1', followed: false },
    { name: "Andrey", userid: '2', followed: false },
    { name: "Sveta", userid: '3', followed: true },
    { name: "Sasha", userid: '4', followed: true },
    { name: "Viktor", userid: '5', followed: false },
    { name: "Valera", userid: '6', followed: false },
  ]
}
  
const usersReducer = (state = initialState,action) => {
  switch (action.type) {
    case 'SET-USER':
      return {
        ...state,
        userData: [...state.userData,...action.users]
      }
    case 'FOLLOW':
      return {
        ...state,
        userData: state.userData.map(user => {
          if (user.userid === action.id) {
            return {...user,followed:true}
          }else return user
        })
      }
    case 'UNFOLLOW':
      return {
        ...state,
      userData: state.userData.map(user => {
        if (user.userid === action.id) {
          return {...user,followed:false}
        }else return user
      })
    }
    default: return state;
  }
}


export default usersReducer;