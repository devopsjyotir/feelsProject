const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => res.send("This is a root"));

router.post("/users", controllers.createUser);
router.get("/places/:id", controllers.getPlaces);
router.get("/places/interests/:interests", controllers.getAllPlaces);
router.get("/users/name/:name", controllers.getAllUsers);
router.delete("/places/:id", controllers.deletePlace);


module.exports = router;
