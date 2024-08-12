import { useState, useEffect } from "react";
import { colors } from "./colors.js";
import "./App.css";
import { getValue } from "@testing-library/user-event/dist/utils/index.js";

const zxcvbn = require("zxcvbn");

function App() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("very weak");
  const [time, setTime] = useState(" less than a second");
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (password) {
      const result = zxcvbn(password);
      setScore(result.score);
      setStrength(colors[result.score].strength);
      setTime(result.crack_times_display.online_no_throttling_10_per_second);
    } else {
      setScore(0);
      setStrength("very weak");
      setTime("less than a second");
    }
  }, [password]);

  return (
    <div className="App">
      <div className="App-container">
        <p className="Header">How strong is your password?</p>
        <input
          placeholder="Evaluate your password..."
          name="passwordInput"
          className="passwordBox"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <p className="strength">
          your password is{" "}
          <p
            style={{
              display: "inline",
              color: colors[score].color,
            }}
          >
            {strength}
          </p>{" "}
          and can be cracked in{" "}
          <p
            style={{
              display: "inline",
              color: colors[score].color,
            }}
          >
            {time}
          </p>
        </p>
      </div>
    </div>
  );
}

export default App;
