const express = require('express');
const usersRouter = require('./users');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
