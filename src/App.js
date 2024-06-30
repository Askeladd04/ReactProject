import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Nav from './components/SideBar/SideBar.jsx'
import Content from './components/MainContent/MainContent.jsx'
import Dialogs from './components/MainContent/Dialogs/Dialogs.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




const App = (props) => {
  return (
    <Router>
      <div className='app-wrapper'>
       <Header/>
        <Nav />
        <div className='app_wrapper_content'>
        <Routes>
            <Route path='/content' element={<Content posts={props.store.getState().posts} addPost={props.store.addPost.bind(props.store)} newPost={props.store.getState().newPost} updateNewPost={props.store.updateNewPost.bind(props.store)} />} />
          <Route path='/dialogs' element={<Dialogs userData={props.store.getState().userData} usersMessage={props.store.getState().usersMessage} />} />
        </Routes>
        </div>
        </div>
      </Router>
  ) 
}





export default App;
