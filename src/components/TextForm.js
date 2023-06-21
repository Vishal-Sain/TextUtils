import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
        // console.log("upperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }
    const handleLoClick= ()=>{
        // console.log("upperCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success")
    }
    const handleClearClick= ()=>{
        let newText=("");
        setText(newText);
        props.showAlert("Text Cleared!","success")
    }
    const handleExtraSpaceClick= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed!","success")
    }
    const handleCopyClick= ()=>{
        let newText=text.document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        setText(newText);
        props.showAlert("Text Copied!","success")
    }

    const handleOnChange= (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const[text,setText]=useState(" ")
    // text="new Text" //- wrong way to change the state
    // setText("new Text") //- correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper Case</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lower Case</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaceClick} >Remove Extra Space</button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} words  and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:"Enter something in the text above to preview it here"}</p>
    </div>
    </>
  )
}
