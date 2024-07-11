const mongoose = require("mongoose");

//set up schema for our model
const Schema = mongoose.Schema;

//destination schema
const guestbookSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        date: {
            type:Date(),
        },
        email: {
            type: String,
            required: true,
            // match: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("guestbook", guestbookSchema)