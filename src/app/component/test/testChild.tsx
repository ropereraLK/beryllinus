"use client";

export default function TestChild(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </>
  );
}
