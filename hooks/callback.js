import { useCallback, useState } from "react";
import Search from "../components/Search";

const usersAll = ["aakash", "ashish", "diya",'thomas'];

export default Callback = () => {
  const [users, setUsers] = useState(usersAll);

  const list = users.map((user) => {
    return <li>{user}</li>;
  });

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  
  const handleChange = useCallback((text)=>{
    console.log(users[0])
    const filterUser = usersAll.filter(user=>user.includes(text))
    setUsers([...filterUser]);
  },[users])

  return (
    <div>
      <div id="header">
        <button onClick={()=>setUsers(shuffle([...usersAll]))}>Shuffle</button>
        <Search onChange={handleChange}/>
      </div>
      <div id="main">
        <ul>{list}</ul>
      </div>
    </div>
  );
};
