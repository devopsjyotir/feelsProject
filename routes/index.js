const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is a root"));
module.exports = router;

router.post("/users", controllers.createUser);
