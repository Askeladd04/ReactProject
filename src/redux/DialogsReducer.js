 
export const addNewMessageActionCreater = () => ({ type: 'ADD-MESSAGE' })
export const updateMessageActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE', message: text })

let initialState = {
  userData: [
    { name: "Dimych", id: '1' },
    { name: "Andrey", id: '2' },
    { name: "Sveta", id: '3' },
    { name: "Sasha", id: '4' },
    { name: "Viktor", id: '5' },
    { name: "Valera", id: '6' },
  ],
  usersMessage: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you" },
    { id: 3, message: "Lol" }
  ],
   newMessage: ''

}


const dialogsReducer = (state = initialState, action) => {

  
  switch (action.type) {
    case 'ADD-MESSAGE':
      let newMessages = {
        id: 4,
        message: state.newMessage
      };
      return {
        ...state,
        usersMessage: [...state.usersMessage, newMessages],
        newMessage: ''
      }
    case 'UPDATE-NEW-MESSAGE':
      return {
        ...state,
        newMessage: action.message
      }
    default: return state;
  }
}

export default dialogsReducer;