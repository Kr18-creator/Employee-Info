const express = require('express');
const router = express.Router();
const db = require('./db');

// User schema
const employeeSchema = {
  id: '',
  name: '',
  gender: '',
  email: '',
  salary: 0,
  experience: 0,
  hiredDate: ''
};

// API endpoint to insert a new user
router.post('/employees', (req, res) => {
  const employees = { ...employeeSchema, ...req.body };
  const sql = 'INSERT INTO employees SET ?';

  db.query(sql, employees, (error, result) => {
    if (error) {
      console.error(error);
      res.status(500).send('Server error');
    } else {
      res.send('User added successfully');
    }
  });
});

// API endpoint to get all users
router.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';

  db.query(sql, (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send('Server error');
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
