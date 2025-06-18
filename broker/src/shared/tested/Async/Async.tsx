import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
  username?: string;
}

const Async = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const loadUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <li key={user.id} data-testid="user-item">
          {user.name}
        </li>
      ))}
    </div>
  );
};

export default Async;
