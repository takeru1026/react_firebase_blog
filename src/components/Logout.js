import React from 'react'
import { signOut } from "firebase/auth";
import {auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    // Google Logout
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }
  return (
    <div>
      <p>ログインアウト</p>
      <button onClick={logout}>ログインアウト</button>
    </div>
  )
}

