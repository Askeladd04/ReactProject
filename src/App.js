import React from 'react'
import './App.css'
import Header from './components/Header/Header.jsx'
import Nav from './components/SideBar/SideBar.jsx'
import Content from './components/MainContent/MainContent.jsx'

const App = () => {
    return (
      <div className='app-wrapper'>
       <Header/>
        <Nav/>
       <Content/>
    </div>
  )
}



export default App;
