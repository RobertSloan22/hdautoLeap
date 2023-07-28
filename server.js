const express = require('express');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const cors = require('cors');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ customers: [] }).write();

const app = express();
const port = 3001; 

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/customers', (req, res) => {
    const customers = db.get('customers').value();
    res.json(customers);
});

app.post('/customers', (req, res) => {
    db.get('customers')
      .push(req.body)
      .write();

    res.json({ message: 'Customer added successfully', customer: req.body });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
