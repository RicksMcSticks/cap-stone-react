const { Part } = require("../models/part")

module.exports = {
    addNewPart: async (req, res) => {
        try {
            const { imageURL, brand, money, userId} =
                req.body

            const newPart = await Part.create({
                imageURL,
                brand,
                money,
                userId
            })

            category.forEach(async id => {
                await part.create({ partId: newPart.id, categoryId: id })
            })

            res.sendStatus(200)
        } catch (theseHands) {
            console.log(theseHands)
            res.status(500).send("Part failed to add")
        }
    }
}