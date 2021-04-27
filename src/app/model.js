const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String
});

const cardSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please include the card name"],
    },
    price: {
        type: String,
        required: [true, "Please include the card price"],
    },
    image: {
        type: String,
        required: true,
    },
})
module.exports = mongoose.model('user', userSchema, 'users')

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;