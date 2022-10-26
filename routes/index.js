const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is a root"));

router.post("/users", controllers.createUser);
router.get("/places/:id", controllers.getPlaces);
router.get("/places/interests/:interests", controllers.getAllPlaces);

module.exports = router;
