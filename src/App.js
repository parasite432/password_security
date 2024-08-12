import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <p>How strong is your password?</p>
        <input
          placeholder="Evaluate your password..."
          name="passwordInput"
          className="passwordBox"
        />
      </div>
    </div>
  );
}

export default App;
