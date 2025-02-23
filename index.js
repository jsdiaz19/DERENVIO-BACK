const express = require('express')
const app = express()
const cors = require('cors')
const connectDB = require("./config/db");

const productRoutes = require("./routes/product");
const priceseRoutes = require('./routes/price');
const userRoutes = require('./routes/user');

connectDB();
app.use(cors());
app.use(express.json());

app.use("/", productRoutes);
app.use("/", priceseRoutes);
app.use("/", userRoutes);

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(3000);