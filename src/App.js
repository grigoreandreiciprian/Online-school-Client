
import React from 'react';

import Home from './pages/Home';

import Add from './pages/Add';

import CourseDetails from './pages/CourseDetails';

import Update from './pages/Update';

import SignUp from './pages/SignUp';

import LogIn from './pages/LogIn';

import UserProvider from './Context/Context';


import{
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/details/:courseId" element={<CourseDetails />}></Route>
          <Route path="/update/:courseId" element={<Update />}></Route> 
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/LogIn" element={<LogIn />}></Route>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
