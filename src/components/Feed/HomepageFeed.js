import React, { useState, useEffect } from 'react';
import './HomepageFeed.css'; // Include this for styling

const HomepageFeed = () => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        // Simulating fetching feed data from an API
        setFeedData([
            { id: 1, title: "New Course Available: Web Development", content: "Learn how to build websites from scratch..." },
            { id: 2, title: "Announcement: Online Quiz", content: "Join the online quiz competition this Saturday!" },
            { id: 3, title: "Event: Guest Lecture on AI", content: "Don't miss out on our guest lecture about Artificial Intelligence." },
        ]);
    }, []);

    return (
        <div className="homepage-feed-container">
            <div className="homepage-feed-overlay">
                <h2>Latest Updates</h2>
                <div className="feed-list">
                    {feedData.map((item) => (
                        <div key={item.id} className="feed-item">
                            <h3>{item.title}</h3>
                            <p>{item.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomepageFeed;
