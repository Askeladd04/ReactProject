import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Nav from './components/SideBar/SideBar.jsx'
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './containerComponents/DialogsContainer.jsx';
import ContentContainer from './containerComponents/MainContentContainer.jsx';
// import Users from './components/Users/Users.jsx';


const App = () => {


  return (
      <div className='app-wrapper'>
       <Header/>
        <Nav />
        <div className='app_wrapper_content'>
        <Routes>
            <Route path='/content' element={<ContentContainer  />} />
            <Route path='/dialogs' element={<DialogsContainer  />} />
            {/* <Route path ='/users'  element={<Users/>}/>  */}
        </Routes>
        </div>
        </div>
  ) 
}





export default App;
