import { collection, getDocs } from 'firebase/firestore';
import React, {useEffect} from 'react';
import "./Home.css"
import { db } from "../firebase";

export const Home = () => {
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db,"posts"));
      console.log(data.docs);
      console.log(data.docs.map((doc) => ({ doc })));
      console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    return () => {
      getPosts();
    }
  }, [])
  return (
    <div className="homePage">
      <div className="postContents">
        <div className="postHeader">
          <h1>タイトル</h1>
        </div>
        <div className="postTextContainer">
          test. 頑張ります。っっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっっk
        </div>
        <div className="nameAndDeleteButton">
          <h3>name</h3>
          <button>削除</button>
        </div>
      </div>
    </div>
  )
}
