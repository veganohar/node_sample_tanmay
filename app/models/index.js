const mongoose = require("mongoose");

let db = {};
db.mongoose = mongoose;
db.user = require("./users.model");
module.exports = db;