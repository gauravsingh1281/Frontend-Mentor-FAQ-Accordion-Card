import React from "react";
import WomenDesktop from "../images/illustration-woman-online-desktop.svg";
import WomenMobile from "../images/illustration-woman-online-mobile.svg";
import IconArrow from "../images/icon-arrow-down.svg";
import BoxIcon from "../images/illustration-box-desktop.svg";
const Image = () => {
  return (
    <>
      <div className="image">
        <img
          className="img1"
          src={WomenDesktop}
          alt="illustration-woman-online-desktop"
        />
        <img
          className="mobile-img"
          src={WomenMobile}
          alt="illustration-woman-online-mobile"
        />
        <img
          className="img2"
          src={BoxIcon}
          alt="illustration-box-desktop"
        />
      </div>
    </>
  );
};

const ArrowIcon =()=>{
    return(
        <>
        <img src={IconArrow} alt="icon-arrow-down"/>
        </>
    )
}

export default Image;
export {ArrowIcon};
