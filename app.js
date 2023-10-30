const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bookRoutes =require("./routes/book")
const authorRoutes =require("./routes/author")
const categoryRoutes =require("./routes/category")
const MONGODB_URI = "mongodb://127.0.0.1:27017/Books";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Header",
    "Origin, X-Requested-With, Content, Accept, Content-Type ,Authorization"
  );
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET, POST, PUT , DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use("/api/book",bookRoutes)
app.use("/api/author",authorRoutes)
app.use("/api/category",categoryRoutes)
module.exports =app