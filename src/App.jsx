import logo from "./assets/dicodes_logo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
        <a href="#" className="btn btn-primary shadow">
          Hello
        </a>
      </header>
    </div>
  );
}

export default App;
