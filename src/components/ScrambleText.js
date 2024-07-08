import React, { useState, useEffect } from "react";
import "../css/projects.css";

const ScrambleText = ({ text, duration = 2000, scrambleInterval = 100 }) => {
  const [scrambledText, setScrambledText] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (typeof text !== "string") {
      console.error("Prop 'text' must be a string");
      return;
    }

    let animationFrame;
    let startTime;
    let lastScrambleTime = 0;

    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    const updateText = (time) => {
      if (!startTime) startTime = time;
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (progress < 1) {
        if (time - lastScrambleTime > scrambleInterval) {
          lastScrambleTime = time;
          const scramble = text
            .split("")
            .map((char, index) => {
              if (progress > index / text.length) {
                return char;
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

          setScrambledText(scramble);
        }
        animationFrame = requestAnimationFrame(updateText);
      } else {
        setScrambledText(text);
        setComplete(true);
      }
    };

    animationFrame = requestAnimationFrame(updateText);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, duration, scrambleInterval]);

  return (
    <span className={`scramble-text ${complete ? "complete" : ""}`}>
      {scrambledText}
    </span>
  );
};

export default ScrambleText;
