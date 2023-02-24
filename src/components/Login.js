import React from 'react'
import { signInWithPop } from "firebase/auth";

export const Login = () => {
  const loginWithGoogle = () => {
    // Google Login
    signInWithPop(auth, provider).then((reslut) => {
      
    })
  }
  return (
    <div>
      <p>ログイン使用</p>
      <button onClick={loginWithGoogle}>googleでログイン</button>
    </div>
  )
}

