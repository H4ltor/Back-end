const cardRepository = require('./repository')
exports.createCard = async (req, res) => {
    try {
        let payload = {
            name: req.body.name,
            price: req.body.price,
            image: req.file.path
        }
        let card = await cardRepository.createCard({
            ...payload
        });
        res.status(200).json({
            status: true,
            data: card,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}
exports.getCards = async (req, res) => {
    try {
        let cards = await cardRepository.cards();
        res.status(200).json({
            status: true,
            data: cards,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getCardById = async (req, res) => {
    try {
        let id = req.params.id
        let cardDetails = await cardRepository.cardById(id);
        res.status(200).json({
            status: true,
            data: cardDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}
exports.removeCard = async (req, res) => {
    try {
        let id = req.params.id
        let cardDetails = await cardRepository.removeCard(id)
        res.status(200).json({
            status: true,
            data: cardDetails,
        })
    } catch (err) {
        res.status(500).json({
            status: false,
            error: err
        })
    }
}