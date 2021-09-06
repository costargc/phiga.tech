const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;

const app = express();

// start the app
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../webclient/build')));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from the backend server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../webclient/build', 'index.html'));
});