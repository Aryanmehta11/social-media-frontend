import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/PostCard.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image before submitting.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      await axios.post("https://social-media-backend-5a6z.onrender.com/posts", formData);
      navigate("/");
    } catch (error) {
      console.error("Error uploading post:", error);
      alert("Failed to upload post. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default CreatePost;
