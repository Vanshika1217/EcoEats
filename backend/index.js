const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter=require('./routes/AuthRouter')
dotenv.config();
require('./Models/db');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());


app.use('/auth', AuthRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});