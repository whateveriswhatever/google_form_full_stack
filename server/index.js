const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const PORT = process.env.PORT;
const connectToDatabase = require("./DB/connect_to_database");
const router = require("./routes/questions");

// middleware for CORS
app.use(cors());

// route for handling the work of sending answers from users to the database
app.use("/api/v4/answers", router);

app.get("/", (req, res) => {
  res.status(201).send("Hello !");
});

const server = async () => {
  try {
    // connect the server to the database
    await connectToDatabase();
    app.listen(PORT, () => {
      console.log(`Server is running on : http://localhost:${PORT}`);
    });
  } catch (err) {
    console.log(
      `Oops ! There must be something went wrong >>>> Check here: --> ${err}`
    );
    res.status(404).send(err);
  }
};

server();
