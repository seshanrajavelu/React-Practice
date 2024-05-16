import React, { useState, useEffect } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
function UserData({ id, name, email }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
}
const data = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
  { id: 4, name: "David", email: "david@example.com" },
];

function Component2() {
  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const [timeoutEnded, setTimeoutEnded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setTimeoutEnded(true);
      console.log("Component Mounted");
    }, 5000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [timeoutEnded, loading]);


  return (
    <div>
      <h2 className="App-link"> User Lists</h2>
      {loading ? (
        <div>
          <Box sx={{ width: 1000 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>{" "}
          <p> Loading..{counter}</p>{" "}
        </div>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((data) => (
                <UserData
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  email={data.email}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export {Component2};
