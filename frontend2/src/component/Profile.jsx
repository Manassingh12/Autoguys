import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../store/auth'; // Adjust the path accordingly
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserProfile = () => {
  const { user, authorizationToken, updateUser } = useAuth();
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [fileInputKey, setFileInputKey] = useState(0); // Key to reset file input
  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append('profileImage', file);

      try {
        const response = await axios.post('http://localhost:5000/api/auth/upload-profile-image', formData, {
          headers: {
            Authorization: authorizationToken,
          },
        });

        // Update user data in context with the new profile image URL
        const newProfileImage = response.data.profileImage;
        updateUser((prevUser) => ({ ...prevUser, profileImage: newProfileImage }));
        setProfileImage(newProfileImage);
        setFileInputKey((prevKey) => prevKey + 1); // Reset file input

        // Navigate to the home page
        navigate('/');

        // Show an alert
        toast.success('Profile uploaded successfully. Please reload the page.');

        console.log(response.data);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  useEffect(() => {
    setProfileImage(user?.profileImage || null);
  }, [user]);

  return (
    <div>
      <h2>User Profile</h2>
   
            <>  {user ? (
      <>
        {profileImage ? (
          <img
            key={profileImage} // Key to force re-render when profileImage changes
            src={`http://localhost:5000/${profileImage}?${new Date().getTime()}`}
            // Add timestamp to force image update
            alt="User Profile"
            style={{ width: '200px', height: '200px' }} // Adjust dimensions as needed
          />
        ) : (
          // Add a default image source here
          <img
            src="path/to/default-image.jpg"
            alt="Default User Profile"
            style={{ width: '200px', height: '200px' }} // Adjust dimensions as needed
          />
        )}
        <p>Fullname: {user.Fullname || 'N/A'}</p>
        <p>Mobile: {user.mobile || 'N/A'}</p>

        <form encType="multipart/form-data">
          <label htmlFor="profileImageInput">Upload Profile Image:</label>
          <input
            key={fileInputKey} // Key to reset file input
            type="file"
            id="profileImageInput"
            name="profileImage"
            onChange={handleFileChange}
            accept="image/*"
          />
        </form>
        <Link to="/Mybooking" className="btn btn-primary">Mybooking</Link>
      </>
    ) : (
      <p>Please log in to view your profile.</p>
    )}
              <Link to="/Mybooking" className="btn btn-primary">Mybooking</Link>
            </>
     
    </div>
  );
};

export default UserProfile;

