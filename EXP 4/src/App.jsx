import React, { useEffect, useState } from "react";
const API_URL = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [callbackUsers, setCallbackUsers] = useState([]);
  const [promiseUsers, setPromiseUsers] = useState([]);
  const [asyncUsers, setAsyncUsers] = useState([]);
  // 1. Callback
  const fetchWithCallback = (callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL);
    xhr.onload = () => {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  };
  // 2. Promise
  const fetchWithPromise = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setPromiseUsers(data))
      .catch((error) => console.error(error));
  };
  // 3. Async/Await
  const fetchWithAsyncAwait = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setAsyncUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchWithCallback(setCallbackUsers);
    fetchWithPromise();
    fetchWithAsyncAwait();
  }, []);  
  return (
    <div>
      <h1>Async JavaScript</h1>
      <h2>1. Callback</h2>
      <UserList users={callbackUsers} />
      <h2>2. Promise</h2>
      <UserList users={promiseUsers} />
      <h2>3. Async/Await</h2>
      <UserList users={asyncUsers} />
    </div>
  );
}
function UserList({ users }) {
  return users.length === 0 ? (
    <p>Loading...</p>
  ) : (users.map((user) => <p key={user.id}>{user.name}</p>));
}
export default App;