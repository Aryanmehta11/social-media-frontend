import "../styles/PostCard.css"

function PostCard({ post, onDelete,onUpdate }) {
 
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title}  />
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <button onClick={() => onDelete(post._id)}>Delete</button>
      <button onClick={() => onUpdate(post)}>Edit</button>
    </div>
  );
}

export default PostCard;
