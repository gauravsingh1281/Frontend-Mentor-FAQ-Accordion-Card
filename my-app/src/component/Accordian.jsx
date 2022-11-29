import React, { useState } from "react";
import { ArrowIcon } from "./Image";

const Accordian = ({ question, answer,line }) => {
    const [show,setShow]= useState(false);
    const styles = {
        transform: show ? 'rotate(180deg)' : '', 
        transition: 'transform 500ms ease',
        cursor:'pointer',
       }

    let showAns=()=>{
        setShow(!show);
    }
  return (
    <>
      <div className="ques">
        <p className="active" style={ show ? { color:'var(--Verydarkdesaturatedblue)', fontWeight:"700"} : {color: 'var(--Verydarkgrayishblue)'} } >{question}</p>
       <span style={styles} onClick={showAns} ><ArrowIcon  /></span> 
      </div>
     { show && <p>{answer}</p>} 
      <div className="line">{line}</div>
    </>
  );
};

export default Accordian;
