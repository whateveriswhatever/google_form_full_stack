const connection = process.env.MONGODB_URI;
const mongoose = require("mongoose");
const { Schema } = mongoose;

// const iquirationSchema = new Schema({
//   title: String,
//   realAnswer: String,
//   userAnswer: String,
//   isTrue: Boolean,
//   isDone: Boolean,
//   date: {
//     type: Date,
//     default: Date.now(),
//   },
// });

const connectToDatabase = () => {
  return mongoose
    .connect(connection)
    .then(() => console.log(`Connected to the database`))
    .catch((err) =>
      console.log(
        `Oops ! There must be something went wrong !!! Check ----> ${err}`
      )
    );
};

module.exports = connectToDatabase;
