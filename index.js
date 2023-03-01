const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set('strictQuery', true);

const transactions = require("./routes/transactions");

try {
  mongoose.connect(process.env.MONGO_URI);  
  console.log("DB Connected");
} catch (err) {
  console.log(err);
}

// app.use(cors());
app.use(express.json());

const YOUR_DOMAIN = 'http://localhost:5000'
app.use("/api/v1/transactions", transactions);

app.listen(5000, () => {
  console.log("Backend Server running ");
});
