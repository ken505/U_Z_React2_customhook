import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "foo",
  email: "124@foo.com",
  address: "abctiy"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
