import React, { useState } from "react";
import Image from "./component/Image";
import Questions from "./component/Api";
import Accordian  from "./component/Accordian";
import "./App.css";

const App = () => {
    const [data,setData]= useState(Questions);
  return (
    <>
      <main class="container">
        <Image />
        <div class="text">
          <h1>FAQ</h1>
{data.map((val)=>{
const {id} = val;
    return(
        <Accordian 
           key={id}
           {...val}
        />
    )
})}
        </div>
      </main>
    </>
  );
};

export default App;
