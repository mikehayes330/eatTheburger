var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Router
router.get("/", function (req, res) {
  burger.all(function (data) {
    var burgerData = {
      burgers: data,
    };
    console.log(burgerData);
    res.render("index", burgerData);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router;
