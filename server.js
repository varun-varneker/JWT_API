const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const app = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";
const users = []; // In-memory storage

// Register
app.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    users.push({ username, password: hashed });
    res.json({ message: "User registered successfully" });
});

// Login
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user) return res.status(400).json({ error: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
});

// Middleware to verify token
function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Protected route
app.get("/protected", authenticateToken, (req, res) => {
    res.json({ message: `Hello ${req.user.username}, welcome to the protected route!` });
});

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
