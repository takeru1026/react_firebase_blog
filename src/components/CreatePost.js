import React from 'react';
import "./CreatePost.css";
import { useState } from 'react';

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");
  const createPost = () => {
    console.log(title);
    console.log(postText);
  }
  return (
    <div className="createPostPage">
      <div className="postContainer">
        <h2>記事を投稿する</h2>
        <div className="inputPost">
          <div>タイトル</div>
          <input type="text" placeholder="タイトルを記入" onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="inputPost">
          <div>投稿</div>
          <textarea placeholder="投稿内容を記入" onChange={(e) => setPostText(e.target.value)}></textarea>
        </div>
        <button className="postButton" onClick={createPost}>投稿する</button>
      </div>
    </div>
  )
}

