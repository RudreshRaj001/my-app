// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    // inside this we have jsx -> html mixed with javascript
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <Textform heading="Enter the text to Analyse Below"/>
      </div>
    </>
  );
}

export default App;
