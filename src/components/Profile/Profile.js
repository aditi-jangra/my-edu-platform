import React, { useState } from 'react';
import './Profile.css'; // Add styles for Profile component

const Profile = () => {
    const [profileData, setProfileData] = useState({
        username: 'John Doe',
        email: 'john.doe@example.com',
        bio: 'An avid learner passionate about coding and technology.',
    });

    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({ ...profileData });

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        setProfileData(editedData);
        setEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData({ ...editedData, [name]: value });
    };

    return (
        <div className="profile-container">
            <div className="profile-overlay">
                <h2>Profile</h2>
                <div className="profile-info">
                    <div className="profile-item">
                        <label>Username:</label>
                        {editing ? (
                            <input
                                type="text"
                                name="username"
                                value={editedData.username}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{profileData.username}</p>
                        )}
                    </div>

                    <div className="profile-item">
                        <label>Email:</label>
                        {editing ? (
                            <input
                                type="email"
                                name="email"
                                value={editedData.email}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{profileData.email}</p>
                        )}
                    </div>

                    <div className="profile-item">
                        <label>Bio:</label>
                        {editing ? (
                            <textarea
                                name="bio"
                                value={editedData.bio}
                                onChange={handleChange}
                            />
                        ) : (
                            <p>{profileData.bio}</p>
                        )}
                    </div>

                    <div className="profile-actions">
                        {editing ? (
                            <button onClick={handleSave}>Save</button>
                        ) : (
                            <button onClick={handleEdit}>Edit</button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
