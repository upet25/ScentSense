const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Serve coverpage.html at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'coverpage.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
