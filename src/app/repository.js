const Card = require("./model");
exports.cards = async () => {
    const cards = await Card.find();
    return cards;
};
exports.cardById = async id => {
    const card = await Card.findById(id);
    return product;
}
exports.createCard = async payload => {
    const newCard = await Card.create(payload);
    return newCard
}
exports.removeCard = async id => {
    const card = await Card.findByIdAndRemove(id);
    return card
}