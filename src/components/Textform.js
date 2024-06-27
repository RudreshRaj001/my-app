import React, {useState} from "react";


export default function Textform(props) {

  const handleUpClick = () => {
    // console.log("Upper Case was clicked " + text);
    // setText("You Have Clicked On Handle Up Click");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  }
  const handleReverseClick = () => {
    let newText = text.split('').reverse().join('');
    setText(newText);
  }
  const cypherClick = () => {
    let asciiArray = [];
    for (let i = 0; i < text.length; i++) {
        asciiArray.push(text.charCodeAt(i) + 1);
    }
    let newText = asciiArray.map(code => String.fromCharCode(code)).join('');
    setText(newText);
  }
  const decypherClick = () => {
    let asciiArray = [];
    for (let i = 0; i < text.length; i++) {
        asciiArray.push(text.charCodeAt(i) - 1);
    }
    let newText = asciiArray.map(code => String.fromCharCode(code)).join('');
    setText(newText);
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
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control"
          value = {text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          ></textarea>
        {/* We used a Hook State variable "text" in the value and we 
        need a onChange event to make the changes in the states
        by listning to the various events on like keyboard in the function */}
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse Text</button>
      <button className="btn btn-primary mx-2" onClick={cypherClick}>Cypher Text + 1</button>
      <button className="btn btn-primary mx-2" onClick={decypherClick}>Decypher Text - 1</button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length - 1} Words and {text.length} characters</p>
      <p>{0.008 * (text.split(" ").length - 1)} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
  </>
  );
}
