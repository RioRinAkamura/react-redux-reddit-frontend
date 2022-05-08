import React from "react";

const Footer = ({ isOpenPost, setIsOpenPost }: any) => {
  return (
    <footer>
      <div className="footer-title" onClick={() => setIsOpenPost(!isOpenPost)}>
        {isOpenPost ? "x" : "+"}
      </div>
    </footer>
  );
};

export default Footer;
