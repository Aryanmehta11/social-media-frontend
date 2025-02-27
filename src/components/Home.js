import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import PostCard from "./PostCard";
import "../styles/PostCard.css";
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function Home() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  

  useEffect(() => {
    axios.get(`${BACKEND_URL}/posts`).then((res) => setPosts(res.data)).catch((error) => console.error("Error fetching posts:", error));;
  }, []);

  const handleDelete = async (id) => {
    await axios.delete(`${BACKEND_URL}/posts/${id}`);
    setPosts(posts.filter((post) => post._id !== id));
  };

  return (
    <div className="container">
      <div className="header">
        <h1>MehtaVerse</h1>
        <button className="create-post-btn" onClick={() => navigate("/create")}>
          ➕ Click here to Create a Post
        </button>
      </div>

      {posts.length === 0 ? (
        <p className="no-posts">No posts yet. Click the button above to create your first post! 😊</p>
      ) : (
        posts.map((post) => <PostCard key={post._id} post={post} onDelete={handleDelete} />)
      )}
    </div>
  );
}

export default Home;
