import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let userData = [
  { name: "Dimych", id: '1' },
  { name: "Andrey", id: '2' },
  { name: "Sveta",  id: '3'  },
  { name: "Sasha",  id: '4'  },
  { name: "Viktor", id: '5' },
  { name: "Valera", id: '6' },
]

 let usersMessage = [
  { id: 1 , message:"Hi" },
  { id: 2, message: "How are you" },
  { id :3 , message:"Lol"}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App userData ={userData} usersMessage={usersMessage} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


