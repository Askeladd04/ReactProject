


export let store = {
  _state: {
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
    posts: [
      { name: 'Myrat', message: 'HI'},
      { name: 'Andrey' , message: 'How Are you'}
    ],
    newPost: "Hi Yp"
  },
  getState() {
    return this._state;
  },
  addPost(newMessage) {
    let newPost = {
      name: 'Myrat', message: newMessage 
    }
    this.getState().posts.push(newPost)
    this.rerenderEntireTree();
    this.getState().newPost = '';
  },
  updateNewPost(text) {
    this.getState().newPost = text;
    this.rerenderEntireTree();
  },
  _subscribe(observer) {
    this.rerenderEntireTree = observer
  },
  rerenderEntireTree(
    
  ) {}
}







