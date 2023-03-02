const express = require("express");
const app = express();
const path =require('path');
const mongoose = require("mongoose");
// const cors=require("cors");
const dotenv = require("dotenv");
dotenv.config();

mongoose.set('strictQuery', true);

const transactions = require("./routes/transactions");

try {
  mongoose.connect("mongodb+srv://aks123:12@aks.4o89nep.mongodb.net/expense-tracker?retryWrites=true&w=majority");  
  console.log("DB Connected");
} catch (err) {
  console.log(err);
}

// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/transactions", transactions);

app.use(express.static('client/build'));
app.get('*', (req,res) => res.sendFile(path.resolve(__dirname,'client','build','index.html')));

app.listen(5000, () => {
  console.log("Backend Server running ");
});
