import { useState } from "react";
import "./MoodSelector.css";
import MoodDisplay from "./MoodDisplay";
import MoodHistorique from "./moodhistorique";
function MoodSelector() {
  const moods = [
    { label: "😊 Heureux", value: "Heureux !", color: "#ffeb3b" },
    { label: "😴 Fatigué", value: "Fatigué !", color: "#81d4fa" },
    { label: "😡 Stressé", value: "Stressé !", color: "#ef9a9a" },
    { label: "😎 Motivé", value: "Motivé !", color: "#a5d6a7" },
  ];
  const [selectedMood, setSelectedMood] = useState(null);
  const [moodHistory, setMoodHistory] = useState([]);

  function handleMoodClick(mood) {
    setSelectedMood(mood);
    setMoodHistory((history) => [...history, mood]);
  }

  return (
    <div>

    <div className="mood-selector">
      {moods.map((Mood, index) => (
        <button
          className="mood-button"
          key={index}
          value={Mood.value}
          style={{ backgroundColor: Mood.color }}
          onClick={() =>{ 
            handleMoodClick(Mood);
        }}
        >
          {Mood.label}
        </button>
      ))}
      
    </div>
        <div className="mood-display-container">
        <MoodDisplay humeur={selectedMood ? selectedMood.value : "aucune humeur 😶 !"} color={selectedMood ? selectedMood.color : "#d4d1d1"} />
        </div>
        <MoodHistorique humeurs={moodHistory} />
    </div>
  );
}
export default MoodSelector;
