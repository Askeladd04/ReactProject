import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Nav from './components/SideBar/SideBar.jsx'
import Content from './components/MainContent/MainContent.jsx'
import Dialogs from './components/MainContent/Dialogs/Dialogs.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <Router>
      <div className='app-wrapper'>
       <Header/>
        <Nav />
        <div className='app_wrapper_content'>
        <Routes>
          <Route  path='/content'  element={<Content/>} />
            <Route exact path='/dialogs' element={<Dialogs />} />
        </Routes>
        </div>
        </div>
      </Router>
  ) 
}



export default App;
