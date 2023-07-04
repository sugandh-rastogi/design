import React from "react";

const Toggle = (props) =>{
    let clr="bg-transparent justify-start";
    if(props.st ){
        clr="bg-green-500 justify-end";
    }
    return(
    <button onClick={props.onClick}>
    <span className={"border rounded-full border-grey flex items-center cursor-pointer w-10  "+clr}>
    <span className ="rounded-full border w-5 h-5 border-grey shadow-inner bg-white shadow">
    </span>
  </span>
  
  </button>)

}

export default Toggle;

