import React from 'react';

const Post = ({ post }) => (
    <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <button>Like</button>
        <button>Comment</button>
    </div>
);

export default Post;
