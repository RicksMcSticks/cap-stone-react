const { Part } = require("../models/part");
// const { User } = require("../models/user")
const { Category } = require("../models/category");
const { ChosenParts } = require("../models/chosenParts");

module.exports = {
  getParts: async (req, res) => {
    console.log("hit");
    try {
      const { categoryId } = req.query;
      let parts;

      console.log(categoryId);
      parts = await Part.findAll({
        include: [
          {
            model: Category,
            where: { id: categoryId },
          },
        ],
      });
      console.log(parts);
      res.status(200).send(parts);
    } catch (theseHands) {
      console.log(theseHands);
      res.status(500).send("Part failed to add");
    }
  },
  addPart: async (req, res) => {
    try {
      const { userId, partId } = req.body;
      await ChosenParts.create({ userId, partId });
      res.sendStatus(200);
    } catch (theseHands) {
      console.log(theseHands);
      res.status(500).send("Part failed to add");
    }
  },

  deletePart: async (req, res) => {
    try {
      const { id } = req.params;
      await ChosenParts.destroy({ where: { id: +id } });
      res.sendStatus(200);
    } catch (error) {
      console.log("ERROR I getCurrentUserPosts");
      console.log(error);
      res.sendStatus(400);
    }
  },

  getUserParts: async (req, res) => {
    try {
      const { userId } = req.params;

      const parts = await ChosenParts.findAll({
        where: { userId: userId },
        include: [
          {
            model: Part,
          },
        ],
      });

      res.status(200).send(parts);
    } catch (err) {
      console.log(err);
      res.sendStatus(500);
    }
  },
};
