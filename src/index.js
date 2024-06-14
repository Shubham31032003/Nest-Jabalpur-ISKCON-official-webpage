import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from "./component/Home/Home"
import About from './component/About/About';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Kitchen from './component/Kitchen/Kitchen';
import Help from './component/Help/Help';
import Hostel from './component/Hostel/Hostel';
import Bace from './component/Bace/Bace';
import Alumni from './component/Alumni/Alumni';
import Donate from './component/Donation/Donate';
import Gallery from './component/Gallery/Gallery';
import Contact from './component/Contact/Contact';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='help' element={<Help />}/>
      <Route path='kitchen' element={<Kitchen />}/>
      <Route path='hostel' element={<Hostel />}/>
      <Route path='bace' element={<Bace/>}/>
      <Route path='alumni' element={<Alumni/>}/>
      <Route path= 'donate' element={<Donate/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='contact'  element={<Contact/>}/>
    </Route>
  )
  )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
