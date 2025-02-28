import {  useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/PostCard.css";  // Importing the same PostCard.css for styling consistency

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function UpdatePost() {
  const { state } = useLocation();
  const { post } = state;
  const [title, setTitle] = useState(post.title);
  const [description, setDescription] = useState(post.description);
  const [image, setImage] = useState(post.image);
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updatedPost = { title, description, image };

    try {
      await axios.put(`${BACKEND_URL}/posts/${post._id}`, updatedPost);
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Update Post</h1>
      </div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Post Description"
        ></textarea>
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        <button type="submit">Update Post</button>
      </form>

      <div className="post-card">
        <img src={image} alt="post" />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default UpdatePost;
