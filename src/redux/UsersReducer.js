export const followAC = (userid) => ({ type: 'FOLLOW', id:  userid });
export const unfollowAC = (userid) => ({type: 'UNFOLLOW', id: userid})
export const setUserAC = (users) => ({type:'SET-USER', users:users})



let initialState = {
    userData: []
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