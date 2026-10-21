
import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>User Data</h2>
            {data.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    );
}

export default App;
