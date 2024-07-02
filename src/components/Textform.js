import React, {useState} from "react";


export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("Upper Case was clicked " + text);
    // setText("You Have Clicked On Handle Up Click");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  }
  
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  }

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text Cleared", "success");
  }

  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
    props.showAlert("Text Reversed", "success");
  }

  const handleCopy = () => {
    let myText = document.getElementById('myBox')
    myText.select();
    navigator.clipboard.writeText(myText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text Copied", "success");
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  }

  const cypherClick = () => {
    let asciiArray = [];
    for (let i = 0; i < text.length; i++) {
        asciiArray.push(text.charCodeAt(i) + 1);
    }
    let newText = asciiArray.map(code => String.fromCharCode(code)).join('');
    setText(newText);
    props.showAlert("Cyphered The Text", "success");
  }

  const decypherClick = () => {
    let asciiArray = [];
    for (let i = 0; i < text.length; i++) {
        asciiArray.push(text.charCodeAt(i) - 1);
    }
    let newText = asciiArray.map(code => String.fromCharCode(code)).join('');
    setText(newText);
    props.showAlert("Decyphered The Text", "success");
  }

  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  // text -> variable name
  // setText -> is a function used to change the text(state)
  // Text = "Heyyyyyy"; // Wrong way to change text
  // setText("Heyyyyyy"); // Correct way to change text

  // we cant use normal variables here so we have to use this HOOk thing to make a 
  // variable and then update the variable

  return (
    <>
    <div className="container" style = {{color: props.mode === "dark" ? "white" : "black"}}>
      <h1 className="mb-4">{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChange}
          style = {{
            backgroundColor: props.mode === "dark" ? "#605D5F" : "white",
            color: props.mode === "dark" ? "white" : "black"
          }}
          id="myBox"
          rows="8"
          ></textarea>
        {/* We used a Hook State variable "text" in the value and we 
        need a onChange event to make the changes in the states
        by listning to the various events on like keyboard in the function */}
      </div>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To LowerCase</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleReverseClick}>Reverse Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={cypherClick}>Cypher Text + 1</button>
      <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={decypherClick}>Decypher Text - 1</button>
    </div>
    <div className="container my-3" style = {{color: props.mode === "dark" ? "white" : "black"}}>
      <h2>Your text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Enter Something above to preview it here!"}</p>
    </div>
  </>
  );
}
