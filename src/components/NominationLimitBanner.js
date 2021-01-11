import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const NominationLimitBanner = (props) => {

  return(
    <>
      <div id="nomination-limit-banner">
        <p>You have already nominated 5 movies!</p>
        <IoCloseSharp onClick={()=>document.getElementById("nomination-limit-banner").style.setProperty('display','none')}/>
      </div>
    </>
  );

}

export default NominationLimitBanner;