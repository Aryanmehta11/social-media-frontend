import "../styles/PostCard.css"

function PostCard({ post, onDelete }) {
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
  return (
    <div className="post-card">
      <img src={`${BACKEND_URL}${post.image}`} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
}

export default PostCard;
