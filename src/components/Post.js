<<<<<<< HEAD
import React from 'react'

function Post() {
    return (
        <div>
        <section>
            <h3> Diary Date will appear here</h3>
            <p>Dairy contents will appear here</p>
            <button>Edit</button>
            <button>Delete</button>
        </section>
        </div>
    )
}

export default Post
=======
import React from "react";

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <section className="post-container">
        <h2>{title}</h2>
        <p className="post-content"> {content}</p>
        <button className="button" onClick={() => editPost(id)}>Edit</button>
        <button className="button" onClick={() => deletePost(id)}>Delete</button>
      </section>
    </>
  );
};
export default Post;
>>>>>>> dev
