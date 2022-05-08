import React from "react";
import { useSelector } from "react-redux";

const Header = ({ setIsEdit }: any) => {
  const userInfo = useSelector((state: any) => state.user);

  return (
    <header
      style={{
        backgroundColor: `${userInfo.themeColor}`,
        backgroundImage: `linear-gradient(180deg,${userInfo.themeColor} 0%, #0c0c0c 100%)`,
      }}
    >
      <div className="info-container">
        <div className="info-edit" onClick={() => setIsEdit(true)}>
          Edit
        </div>
        <img className="info-ava" src={userInfo.avaUrl} alt="" />
        <div className="info-username">{userInfo.name}</div>
        <div className="info-age">{userInfo.age}</div>
        <div className="info-about">{userInfo.about}</div>
      </div>
    </header>
  );
};

export default Header;
