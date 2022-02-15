import React, { useEffect, useState } from "react";

const Morning = () => {
  const items = [
    { name: "Good Morning!" },
    { name: "Bon Matin!" },
    { name: "Guten Morgen!" },
    { name: "Buenos Dias !" },
    { name: "Buona mattina!" },
    { name: "おはようございます!" },
    { name: "Bună dimineaţa!" },
    { name: "早上好!" },
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

export default Morning;
