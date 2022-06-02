const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const mongoconnect = async () => {
  mongoose.connect(
    process.env.SERVER_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Mongodb Connected");
    }
  );
};

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once ('open', () => console.log('Database Connected'))
module.exports = mongoconnect;
