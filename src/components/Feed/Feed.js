import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('/api/feed');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
