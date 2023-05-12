const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('Connected to MySQL database!');
});

// Create a table
const sql = 'CREATE TABLE IF NOT EXISTS employees (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255),gender varchar(10), email VARCHAR(255), salary VARCHAR(10), experience VARCHAR(10), hiredDate VARCHAR(100) )';
connection.query(sql, (err, result) => {
  if (err) throw err;
  console.log('Table created successfully');
});

// Close the connection
// connection.end();

module.exports = connection;
