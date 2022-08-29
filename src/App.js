import React from "react";
import { Header } from "./Header";
// import { HeaderOption } from './HeaderOption.css';
import { Sidebar } from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import { Post } from "./Post";
import Followbar from "./Followbar";
// import { Avatar } from './Avatar';

const App = () => {
  return (
    <>
      <Header />
      <div className="app-body">
        <Sidebar />
        <Feed />
        <Followbar />
      </div>
    </>
  );
};

export default App;
