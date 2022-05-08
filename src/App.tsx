import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import EditPage from "./components/EditPage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MakePost from "./components/Posts/MakePost";
import Posts from "./components/Posts/Posts";

function App() {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isOpenPost, setIsOpenPost] = useState<boolean>(false);
  const pendding = useSelector((state: any) => state.user.pendding);
  const error = useSelector((state: any) => state.user.error);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : !isEdit && !isOpenPost ? (
        <>
          <Header setIsEdit={setIsEdit} />
          {pendding && <p className="loading">Loading...</p>}
          {!isEdit && error && <p className="error">Fetching data failed!!</p>}
          <div className="post-container">
            <Posts />
          </div>
          <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />
          <MakePost setIsOpenPost={setIsOpenPost} />
          <Footer isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} />
        </>
      )}
    </div>
  );
}

export default App;

