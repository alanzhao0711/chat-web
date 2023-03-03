import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import Logout from "../img/logout.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="user">
        <img className="profile" src={currentUser.photoURL} alt="" />
        <span className="left">{currentUser.displayName}</span>
        <img
          className="logout"
          src={Logout}
          alt=""
          onClick={() => signOut(auth)}
        ></img>
      </div>
    </div>
  );
};

export default Navbar;
