import React, { createContext, useState } from "react";

//Context
export const UserProfileContext = createContext({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  zipCode: "",
  city: "",
  setUserProfileContext: (info) => {},
});

//ContextProvider
const UserContextProvider = ({ children }) => {
  const toastState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    zipCode: "",
    city: "",
    setUserProfileContext: (info) =>
      setUserProfile((prevState) => ({
        ...prevState,
        [Object.keys(info)]: Object.values(info)[0],
      })),
  };
  const [userProfile, setUserProfile] = useState(toastState);

  return (
    <UserProfileContext.Provider value={userProfile}>
      {children}
    </UserProfileContext.Provider>
  );
};
export default UserContextProvider;
