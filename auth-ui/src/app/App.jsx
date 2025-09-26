// src/app/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage.jsx";

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="*" element={<div style={{padding:24}}>Not found</div>}/>
    </Routes>
  );
}
