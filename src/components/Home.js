import React from 'react';
import "./Home.css"

export const Home = () => {
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
