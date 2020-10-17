const db = require("../models");
const Berita = db.berita;
const Op = db.Sequelize.Op;

// Create and Save berita
exports.create = (req, res) => {
  // Validate request
  if (!req.body.judul_berita) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create berita
  const berita = {
    judul_berita: req.body.judul_berita,
    konten: req.body.konten,
    kategori: req.body.kategori,
  };

  // save berita in the database
  Berita.create(berita)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating berita.",
      });
    });
};

exports.findAll = (req, res) => {
  const judul_berita = req.query.judul_berita;
  var condition = judul_berita
    ? { judul_berita: { [Op.iLike]: `%${judul_berita}%` } }
    : null;

  Berita.findAll({ where: condition, order: [["id", "ASC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving berita.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Berita.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving berita with id=" + id,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Berita.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "berita was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe berita was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Berita.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Berita was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete berita with id=${id}. Maybe berita was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete berita with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  Berita.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} all berita were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all berita.",
      });
    });
};

exports.findAllByTitle = (req, res) => {
  const judul_berita = req.query.judul_berita;
  var condition = judul_berita
    ? { judul_berita: { [Op.iLike]: `%${judul_berita}%` } }
    : null;
  Berita.findAll({ where: condition, order: [["id", "ASC"]] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving berita by category.",
      });
    });
};
