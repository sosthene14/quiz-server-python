const mongoose = require("mongoose");

const Schema = mongoose.Schema({
        email: String,
        note: Number,
        time: String,
});
const model = mongoose.model(process.env.DB_NAME,Schema,process.env.CLUSTER);
module.exports = model;
