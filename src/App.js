// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const removeBodyClasses = () => {
    const classes = [
      'bg-primary',
      'bg-primary-emphasis',
      'bg-secondary',
      'bg-secondary-emphasis',
      'bg-success',
      'bg-success-emphasis',
      'bg-danger',
      'bg-danger-emphasis',
      'bg-warning',
      'bg-warning-emphasis',
      'bg-info',
      'bg-info-emphasis',
      'bg-light',
      'bg-light-emphasis',
      'bg-dark',
      'bg-dark-emphasis',
      'bg-body',
      'bg-body-emphasis',
      'bg-body-secondary',
      'bg-body-tertiary',
      'bg-black',
      'bg-white',
      'bg-black-50',
      'bg-white-50'
    ];
  
    classes.forEach((cls) => {
      document.body.classList.remove(cls);
    });
  };
  

  const toggleMode = (button) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+button);

    if(button === "dark"){
      setMode("dark");
    }else{
      setMode("light");
    }
    
    if (button === "Dark-Mode-Button") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "gray";
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - dark mode";

        // Annoying attention catching
        // setInterval(() => {
        //   document.title = 'TextUtils - Is Amazing';
        // }, 400);
        // setInterval(() => {
        //   document.title = 'Download TextUtils';
        // }, 700);
      } else {
        setMode("light");
        document.body.style.backgroundColor = "white";
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - light mode";
      }
    } else if (button === "Pink-Mode-Button") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#E90074";
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - dark mode";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "#FFB6C1";
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - light mode";
      }
    } else if (button === "Blue-Mode-Button") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#1a1a7d";
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - dark mode";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "#add8e6";
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - light mode";
      }
    } else if (button === "Green-Mode-Button") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = " #004d00";
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - dark mode";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "#98fb98";
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - light mode";
      }
    } else if (button === "Orange-Mode-Button") {
      if (mode === "light") {
        setMode("dark");
        document.body.style.backgroundColor = "#cc5500";
        showAlert("Dark Mode has been enabled", "success");
        document.title = "TextUtils - dark mode";
      } else {
        setMode("light");
        document.body.style.backgroundColor = "#ffd580";
        showAlert("Light Mode has been enabled", "success");
        document.title = "TextUtils - light mode";
      }
    }
  };
  return (
    // inside this we have jsx -> html mixed with javascript
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">

          
          <Routes>
            <Route
              exact path="/"
              element={
                <Textform
                  heading="TextUtils - Cypher | Decypher"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
{/* 
          <Textform
            heading="Enter the text to Analyse Below"
            mode={mode}
            showAlert={showAlert}
          /> */}

        </div>
      </Router>
    </>
  );
}

export default App;
