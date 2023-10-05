const express = require('express');
const cors = require('cors');

const app = express();

const data = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

app.use(cors({
    origin: 'https://apple.com'
    // origin: 'http://localhost:3001'
}));


app.get('/data', (req, res) => {
    res.json(data);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
