import { memo } from "react";

export default memo(({ onChange }) => {
  console.log('search renered!')
  return (
    <input
      type={"text"}
      placeholder="Search User"
      onChange={(e) => onChange(e.target.value)}
    />
  );
});
