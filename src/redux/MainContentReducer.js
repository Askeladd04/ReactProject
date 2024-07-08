
export const addPostActionCreator = () => ({ type: 'ADD-NEW-POST' })
export const updatePostActionCreator = (text) => ({ type: 'UPDATE-NEW-POST', message: text })


let initialState = {
  posts: [
    { name: 'Myrat', message: 'HI'},
    { name: 'Andrey' , message: 'How Are you'}
  ],
  newPost: "Hi Yp",
}


const mainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-NEW-POST':
      let newPosts = {
        name: 'Myrat', message: state.newPost
      }
      return {
        ...state,
        posts: [...state.posts, newPosts],
        newPost: ''
    }
    case 'UPDATE-NEW-POST':
      return {
        ...state,
        newPost: action.message
      }
    default: return state;
  }
}

export default mainContentReducer;