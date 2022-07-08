//import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>
  {
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  const handleLoClick=()=>
  {
    let newtext=text.toLowerCase();
    setText(newtext);
  }
  const handleclearClick=()=>
  {
    let newtext="";
    setText(newtext);
  }
  const handleExtraSpaces=()=>
  {
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
  }
  const handleCopy=()=>
  {
    let text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleOnChange=(event)=>
  {
    setText(event.target.value);
  }
   const [text,setText]=useState('Enter text here..');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}> 
        <h1>{props.heading}</h1>
         <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
         </div>
         <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>Clear</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
         <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
    </div>
    </>
  )
}
