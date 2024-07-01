export const addPostActionCreator = () => ({ type: 'ADD-NEW-POST' })
export const updatePostActionCreator = (text) => ({type: 'UPDATE-NEW-POST', message: text})


const dialogsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessages = {
        id: 4,
        message: state.newMessage
      };
      state.usersMessage.push(newMessages)
      state.newMessage = '';
      return state;
    case 'UPDATE-NEW-MESSAGE':
      state.newMessage = action.message;
      return state;
    default: return state;
  }
}

export default dialogsReducer;