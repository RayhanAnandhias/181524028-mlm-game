module.exports = (app) => {
  const berita = require("../controllers/berita.controller.js");

  var router = require("express").Router();

  // create new berita
  router.post("/", berita.create);

  // retrieve all berita
  router.get("/all", berita.findAll);

  // retrieve all berita by category
  router.get("/", berita.findAllByTitle);

  // Retrieve a single berita with id
  router.get("/:id", berita.findOne);

  // Update berita with id
  router.put("/:id", berita.update);

  // Delete berita with id
  router.delete("/:id", berita.delete);

  // Delete all berita
  router.delete("/", berita.deleteAll);

  app.use("/api/berita", router);
};
