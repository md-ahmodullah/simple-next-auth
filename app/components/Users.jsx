"use client";

import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  console.log(users);

  useEffect(() => {
    const loadUsers = async () => {
      const res = await fetch("/api/users");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };
    loadUsers();
  }, []);

  return (
    <div>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ol>
          {users.map((user) => (
            <li key={user._id}>
              <span>{user.name}</span> - {user.email}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
