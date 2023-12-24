import { useRef, useState } from "react";

export default function Ref() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncreamentCount = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("State:", count);
    console.log("ref:", countRef.current);
  };

  return (
    <div>
      <h1>countRef : {countRef.current}</h1>
      <button onClick={handleIncreamentCount}>Increament</button>
    </div>
  );
}
