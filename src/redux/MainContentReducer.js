
export const addNewMessageActionCreater = () => ({ type: 'ADD-MESSAGE' })
export const updateMessageActionCreator = (text) => ({ type: 'UPDATE-NEW-MESSAGE', message: text })
const mainContentReducer = (state, action) => {
  switch (action.type) {
    case 'ADD-NEW-POST':
      let newPosts = {
        name: 'Myrat', message: state.newPost
      }
      state.posts.push(newPosts)
      state.newPost = '';
      return state;
    case 'UPDATE-NEW-POST':
      state.newPost = action.message;
      return state;
    default: return state;
  }
}

export default mainContentReducer;