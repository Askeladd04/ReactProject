import React from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Nav from './components/SideBar.jsx'
import Content from './components/MainContent.jsx'

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
