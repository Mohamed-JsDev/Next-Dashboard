import axios from "axios";
const mongoose = require("mongoose");
async function dbConnect() {
  try {
    await mongoose.connect(
      "mongodb+srv://Alshafie:MohaMed@cluster0.be8djn2.mongodb.net/products",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
  } catch (error) {
    console.log(error);
  }
}

export default dbConnect;
