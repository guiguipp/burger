require("dotenv").config();

exports.db = {
    user: process.env.DB_USER,
    password: process.env.DB_PW
  };

