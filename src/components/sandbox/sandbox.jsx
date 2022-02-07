import React, { useState } from "react";

const greetingsArr = [
  "Welcome!",
  "Ola!",
  "Salut!",
  "Bonjour!",
  "Benvenuto",
  "Willkommen",
];

const [counter, setCounter] = useState(0);

setTimeout(() => {
  console.log(greetingsArr[counter]);
}, 2000);

export default setTimeout;
