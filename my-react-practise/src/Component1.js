import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";


function Student({ id, name, age, present }) {
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{age}</td>
        <td>{present ? "Present" : "Absent"}</td>
      </tr>
    );
  }
  const numbers = [1, 2, 3, 4, 5];
  const students = [
    { id: 1, name: "Alice", age: 20, present: true },
    { id: 2, name: "Bob", age: 22, present: true },
    { id: 3, name: "Charlie", age: 21, present: false },
    { id: 4, name: "David", age: 23, present: false },
    { id: 5, name: "Eva", age: 19, present: true },
    { id: 6, name: "Frank", age: 24, present: true },
    { id: 7, name: "Grace", age: 20, present: false },
    { id: 8, name: "Harry", age: 22, present: true },
    { id: 9, name: "Ivy", age: 21, present: true },
    { id: 10, name: "Jack", age: 23, present: true },
    { id: 11, name: "Kim", age: 20, present: true },
    { id: 12, name: "Liam", age: 22, present: false },
    { id: 13, name: "Mia", age: 21, present: false },
    { id: 14, name: "Nora", age: 23, present: true },
    { id: 15, name: "Oliver", age: 19, present: false },
  ];
  
  function Component1() {
    const [loading, setLoading] = useState(true);
    const [counter, setCounter] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());
  
    const doubledNumbers = numbers.map((num) => num * 2);
  
    const evenNumbers = numbers.filter((num) => num % 2 === 0);
  
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  
    const [showPresent, setShowPresent] = useState(true);
  
    const filteredStudents = showPresent
      ? students.filter((student) => student.present)
      : students.filter((student) => !student.present);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setLoading(false); // Hide loading message after 3 seconds
      }, 3000);
      // Clear timeout when component unmounts
      return () => {
        clearTimeout(timeoutId);
      };
    }, []); // Run effect only once when component mounts
  
    useEffect(() => {
      if (!loading) {
        const intervalId = setInterval(() => {
          setCurrentTime(new Date()); // Update current time every second
          setCounter((prevCounter) => prevCounter + 1); // Increment counter every second
        }, 1000);
  
        // Clear interval when component unmounts or when loading changes to true
        return () => {
          clearInterval(intervalId);
        };
      }
    }, [loading]); // Run effect when loading state changes
  
    return (
      <div>
        <h2 className="App-link">Timer Example</h2>
        {loading ? (
          <p>
            {" "}
            <img src={logo} className="App-logo" alt="logo" />{" "}
          </p>
        ) : (
          <div>
            <p>Current Time: {currentTime.toLocaleTimeString()}</p>
            <p>Seconds: {counter}</p>
          </div>
        )}
        <div>
               <h2 className="App-link">Doubled numbers using map:</h2>
          <ul>
            {doubledNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="App-link">Even numbers using filter:</h2>
          <ul>
            {evenNumbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="App-link">Sum of numbers using reduces:</h2>
          <p>{sum}</p>
        </div>
        <div>
          <h2 className="App-link">Students Table</h2>
          <h4> Show Students Atendnance</h4>
          <label class="switch">
            <input
              type="checkbox"
              checked={showPresent}
              onChange={() => setShowPresent(!showPresent)}
            />
            <span class="slider round"></span>
          </label>
  
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <Student
                  key={student.id}
                  id={student.id}
                  name={student.name}
                  age={student.age}
                  present={student.present}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export {Component1};
  