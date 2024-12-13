import { useState } from "react";

function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState("");
  const [advice, setAdvice] = useState("");

  const moods = [
    { name: "happy", advice: "Wonderful! Remember to appreciate the good times and spread the joy around." },
    { name: "content", advice: "Enjoy the calm. It's a perfect time to reflect on things to be grateful about." },
    { name: "excited", advice: "I love your enthusiasm! Channel it into something amazing." },
    { name: "meh", advice: "Having an off day? Relax, recharge, and let tomorrow be a fresh start." },
    { name: "sad", advice: "Feeling down? Be gentle with yourself and take things one step at a time." },
    { name: "angry", advice: "Pause for a deep breath. Let go, and remember, the storm will pass." },
    { name: "anxious", advice: "Ground yourself—try deep breathing or focusing on the present moment." },
    { name: "tired", advice: "Listen to your body. Rest and recharge. You deserve it." },
  ];

  function handleMoodChange(e) {
    const selected = e.target.value;
    setSelectedMood(selected);

    for (let i = 0; i < moods.length; i++) {
      if (moods[i].name === selected) {
        setAdvice(moods[i].advice);
      }
    }
  }

  return (
    <section className="mood-section text-center py-4">
      <div className="container">
        <h3>How do you feel today?</h3>
        <form className="mb-2 border border-light p-3">
          <label htmlFor="mood" className="me-2">Select your mood:</label>
          <select name="mood" onChange={handleMoodChange} value={selectedMood}>
            <option value=""></option>
            {moods.map((mood, index) => (
              <option key={index} value={mood.name}>{mood.name}</option>
            ))}
          </select>
        </form>
        {advice && (
          <div className="advice border border-light p-3">
            <p>{advice}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default MoodSelector;
