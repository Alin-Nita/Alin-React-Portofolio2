import React, { useEffect, useState } from "react";

const Evening = () => {
  const items = [
    { name: "Good Evening!" },
    { name: "Bonsoir!" },
    { name: "Guten Abend!" },
    { name: "Buenas Noches!" },
    { name: "Buona Sera!" },
    { name: "こんばんは!" },
    { name: "晚上好!" },
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

export default Evening;
