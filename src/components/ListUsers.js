import React, { useState, useEffect } from "react";
import Axios from "axios";

export default function Header() {
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   Axios.get("reqres.in/api/users").then((res) => setUsers(res.data[0]));
  // }, [users]);

  useEffect(() => {
    Axios.get("https://reqres.in/api/users").then((res) =>
      setUsers(res.data.data)
    );
  }, []);

  console.log(users);

  return (
    <div>
      <h1>List Users</h1>

      <div className="ml-2 row align-items-start">
        {users.map((item) => {
          return (
            <div key={item.id}>
              <p>{`${item.first_name} ${item.last_name}`}</p>
              <img src={item.avatar} alt="gambar" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
