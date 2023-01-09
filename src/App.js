import { useState, useEffect } from "react";
import "./styles.css";

// Create a React component that accepts an "input" prop.
// If the "input" prop is falsy, render a live-updating date and time that updates every second.
// If the "input" prop is an array, render the array's elements in a list.
// If the "input" prop is anything else, render the value in a <div>.
// Provide a CodeSandbox link (https://codesandbox.io/s) that renders your component for all 3 cases. *

function DisplayTimeAndDate() {
  const [date, setDate] = useState(new Date(Date.now()).toLocaleDateString());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date(Date.now()).toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div className="App">{date}</div>;
}

export default function App({ input }) {
  // Scenario 1
  if (input === false) return <DisplayTimeAndDate />;

  // Scenario 2
  if (Array.isArray(input)) {
    return (
      <div className="App">
        {input.map((x, idx) => (
          <div key={idx}>{x}</div>
        ))}
      </div>
    );
  }

  // Scenario 3
  return <div className="App">{input}</div>;
}
