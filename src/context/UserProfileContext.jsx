import React, { createContext, useContext, useState } from 'react';

// Create the context
const UserProfileContext = createContext();

// Context Provider component
export const UserProfileProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState({
    name: '',
    age: '',
    gender: ''
  });

  return (
    <UserProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom hook to use the UserProfileContext
export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (!context) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};
