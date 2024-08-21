import React, { useState } from "react";
import { useUserProfile } from '../context/UserProfileContext';
import { Grid, Typography } from "@mui/material";

export const Profile = () => {
  const { userProfile, setUserProfile } = useUserProfile();  // No longer undefined
  const [isEditing, setIsEditing] = useState(true);

  const handleNameChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      name: e.target.value
    }));
  };

  const handleAgeChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      age: e.target.value
    }));
  };

  const handleGenderChange = (e) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      gender: e.target.value
    }));
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleChangeClick = () => {
    setIsEditing(true);
  };

  return (
    <Grid container spacing={2} sx={{
      padding: 2,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      height: "100vh",
    }}>
      {/* First Grid Item */}
      <Grid item xs={10} sx={{
        height: "100vh",
        backgroundColor: "#fff",
      }}>
        <Typography variant="h4">
          User Profile
        </Typography>
        {isEditing ? (
          <div>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  value={userProfile.name}
                  onChange={handleNameChange}
                  placeholder="Enter your name"
                />
              </label>
            </div>

            <div>
              <label>
                Age:
                <input
                  type="number"
                  value={userProfile.age}
                  onChange={handleAgeChange}
                  placeholder="Enter your age"
                />
              </label>
            </div>

            <div>
              <label>
                Gender:
                <input
                  type="text"
                  value={userProfile.gender}
                  onChange={handleGenderChange}
                  placeholder="Enter your gender"
                />
              </label>
            </div>

            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : null}
      </Grid>

      {/* Second Grid Item */}
      <Grid item xs={4} sx={{
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F2F9F3",
      }}>
        {!isEditing ? (
          <div>
            <Typography variant="h6">
              Profile Information:
            </Typography>
            <ul>
              <li>Name: {userProfile.name}</li>
              <li>Age: {userProfile.age}</li>
              <li>Gender: {userProfile.gender}</li>
            </ul>

            <button onClick={handleChangeClick}>Change</button>
          </div>
        ) : null}
      </Grid>
    </Grid>
  );
};
