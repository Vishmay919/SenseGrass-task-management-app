import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Tasks from "./pages/taskdetails";
import NewTask from "./pages/newtask";
import EditTask from "./pages/edittask";
import React, { useEffect, useState } from "react";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRoute element={<Tasks />} />} />
      <Route path="/newtask" element={<PrivateRoute element={<NewTask />} />} /> 
      <Route path="/edittask" element={<PrivateRoute element={<EditTask />} />} />
    </Routes>
  </BrowserRouter>
  );
};


export default App;
