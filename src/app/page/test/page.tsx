"use client";

import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import TestChild from "@/app/component/test/testChild";

export default function UserPage() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // wire to API / Redux when ready
  }

  const [count, setCount] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("Hii");
  });

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);

    console.log(count);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>ClickMe</button>
      <TestChild name="John" age={25} />
      <br />
      <br />
      <h2>Your Input: {searchInput}</h2>
      <input
        value={searchInput}
        type="text"
        placeholder="Search users"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </>
  );
}
