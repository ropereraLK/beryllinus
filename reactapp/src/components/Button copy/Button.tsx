import { useState,useRef } from "react";

const MyVar = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // const countRef = useRef(0);
  // const htmlRef = useRef()

  const handleCount = () => {
    setCount((c) => c + 1);
  };

  const handleInputRef = () =>{
    inputRef.current?.focus();
  }
  return (
    <div>
      <h3 className="text-white bg-black w-70 ">{count}</h3>
      <button onClick={handleCount} className="text-white bg-black border-1 border-red-500 w-40">Click Me</button>
      <p/>
       <input ref={inputRef}></input>
       <input className="bg-white text-black"></input>
       <button onClick={handleInputRef } className="text-white bg-black border-1 border-red-500 w-40">Click For Ref</button>

 
    </div>
  );
};

export default MyVar;
