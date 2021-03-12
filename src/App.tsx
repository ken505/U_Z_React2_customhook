import "./styles.css";
import { UserCard } from "./components/UserCard";
import axios from "axios";
import { User } from "./types/api/user";
// import { useState } from "react";

const user = {
  id: 1,
  name: "foo",
  email: "124@foo.com",
  address: "abctiy"
};

export default function App() {
  // const [] = useState();

  const onClickFetchUser = () => {
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Fetch</button>
      <UserCard user={user} />
    </div>
  );
}
