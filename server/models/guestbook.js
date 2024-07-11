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
        email: {
            type: String,
            required: true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Please enter a valid email address'
            ]
        },
        message: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

module.exports = mongoose.model("guestbook", guestbookSchema)