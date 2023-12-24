import { useEffect, useRef, useState } from "react";

export default function Ref() {
  const inputRef = useRef(null);

  useEffect(()=>{
    inputRef.current.focus();
  },[])
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text..." />
    </div>
  );
}
