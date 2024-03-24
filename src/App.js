import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [chosen, setChosen] = useState();
  const [teams, setTeams] = useState([
    "CREAM",
    "YELLOW",
    "GREEN",
    "PINK",
    "ORANGE",
  ]);

  useEffect(() => {
    !teams.length && setTeams(["CREAM", "YELLOW", "GREEN", "PINK", "ORANGE"]);
  }, [teams.length]);

  const clicked = () => {
    const teamsCopy = [...teams];
    if (teamsCopy.length > 0) {
      // Generate a random index
      const randomIndex = Math.floor(Math.random() * teamsCopy.length);

      // Get the random number
      const randomNum = teamsCopy[randomIndex];

      // Remove the random number from the array
      teamsCopy.splice(randomIndex, 1);

      // Update the state with the new array
      setTeams(teamsCopy);

      // Log the picked number
      console.log("Picked Color:", randomNum, teams);
      setChosen(randomNum);
    } else {
      console.log("RUNNING");
    }
  };

  return (
    <div
      className="App"
      style={{ backgroundColor: chosen === "CREAM" ? "#FFFDD0" : chosen }}
    >
      <div className="Display">
        <p className="Title">YOUR TEAM IS:</p>
        <h1 className="Team">{chosen ? chosen : ""}</h1>
      </div>

      <button
        className="Button"
        onClick={() => {
          clicked();
        }}
      />
    </div>
  );
};
export default App;
