import { useMemo, useState } from "react";

const initialItem = new Array(29_999_999).fill(0).map((_, i) => {
  return {
    id: i,
    isSelected: i === 29_999_998,
  };
});

export default function Memo() {
  const [count, setCount] = useState(0);
  const [item] = useState(initialItem);

  const SelectedItem = useMemo(
    () => item.find((item, i) => item.id === count),
    [count, item]
  );

  return (
    <div>
      <h1>Count: {count}</h1>
      <h1>Selected Item: {SelectedItem.id}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
    </div>
  );
}
