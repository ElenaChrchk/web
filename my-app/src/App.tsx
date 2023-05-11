import './App.css';
import {Button} from "./button/Button";

const logo = require("./logo.svg") as string;

function App() {
  return (
    <div className="App">
      <h1 className="header" style={{backgroundColor: "greenyellow"}}>Header level 1</h1>
      <div>Test div</div>
      <Button/>
    </div>
  );
}

export default App;

