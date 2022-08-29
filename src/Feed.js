import React, { useEffect, useState } from "react";
// import { Avatar } from "./Avatar";
import CreateIcon from "@mui/icons-material/Create";
import "./Feed.css";
import InputOptions from "./InputOptions";
import { Post } from "./Post";
import PanoramaIcon from "@mui/icons-material/Panorama";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import EventIcon from "@mui/icons-material/Event";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { db } from "./firebase";
import firebase from "./firebase.js";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map(doc => (
          {
          id: doc.id,
          data: doc.data(),
        }
        
        )))
    );
  }, []);
  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Usman Sajid",
      description: "this is a test",
      messege: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="input-container">
        <div className="input-field">
          <CreateIcon className="create-icon" />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="input-box"
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="images-icon">
          <InputOptions Icon={PanoramaIcon} title="Photo" color="green" />
          <InputOptions Icon={SmartDisplayIcon} title="Video" color="red" />
          <InputOptions Icon={EventIcon} title="Event" color="blue" />
          <InputOptions
            Icon={NewspaperIcon}
            title="Write article"
            color="blue"
          />
        </div>
      </div>

      {/* Post */}
      {posts.map(({ id, data: { name, description, messege } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          messege={messege}
        />
      ))}
    </div>
  );
};

export default Feed;
