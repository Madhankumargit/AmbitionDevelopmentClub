import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Navigation from './components/navbar/Navigation'
import Courses from './components/courses/Courses';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { Slide } from './components/slide/Slide';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactUs } from './components/contact/ContactUs';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Navigation />

  <Routes>
    {/* <App /> */}
    {/* <Route path='/' element={<Navigation />}/> */}
    <Route path='/slide' element={<ContactUs />}/>




    </Routes>
    <Slide />
      <Courses />
    <About />
    <Footer />
  </BrowserRouter>,
)
