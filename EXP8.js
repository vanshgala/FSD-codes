
const express = require("express");
const app = express();

app.use(express.json());

let users = [
    { id: 1, name: "Vansh" },
    { id: 2, name: "Rahul" }
];

// Read users
app.get("/users", (req, res) => {
    res.json(users);
});

// Create user
app.post("/users", (req, res) => {
    users.push(req.body);
    res.send("User added successfully");
});

// Update user
app.put("/users/:id", (req, res) => {
    let user = users.find(u => u.id == req.params.id);

    if (user) {
        user.name = req.body.name;
        res.send("User updated successfully");
    } else {
        res.send("User not found");
    }
});

// Delete user
app.delete("/users/:id", (req, res) => {
    users = users.filter(u => u.id != req.params.id);
    res.send("User deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
