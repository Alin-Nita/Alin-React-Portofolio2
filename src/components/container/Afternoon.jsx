import React, { useState, useEffect } from "react";

const Afternoon = () => {
  const items = [
    { name: "Good Afternoon!" },
    { name: "Bonjour!" },
    { name: "Guten Tag!" },
    { name: "Buenas Tardes!" },
    { name: "Buon giorno!" },
    { name: "こんにちは!" },
    { name: "下午好!" },
  ];

  const [greeting, setGreeting] = useState(items[0]); // <-- seed initial state
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % items.length), // <-- increment index
      3000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setGreeting(items[index]); // <-- update media state when index updates
  }, [index]);

  return greeting.name;
};

export default Afternoon;
