import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Todo from './Todo';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './Notfound';
import Navbar from './Navbar';
import Http from './Http'
import Oneproduct from './Oneproduct';
import Signup from './Signup';
import Form from './Form';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/*' element={<Notfound />}/>
    <Route path='/home' element={<Home />}/>
    <Route path='/http' element={<Http />}/>
    <Route path='/One' element={<Oneproduct/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/form' element={<Form/>}/>
    </Routes>
    </BrowserRouter>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
