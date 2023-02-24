import React from 'react'
import { signInWithPopup } from "firebase/auth";
import {auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  // 
  const navigate = useNavigate();
  const loginWithGoogle = () => {
    // Google Login
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  }
  return (
    <div>
      <p>ログイン使用</p>
      <button onClick={loginWithGoogle}>googleでログイン</button>
    </div>
  )
}

