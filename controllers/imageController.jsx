const db = require("../models");

    // Defining methods for the booksController
module.exports = {
    findAll: function(req, res) {
        db.Image.find()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Image.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
