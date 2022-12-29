const express = require("express");
const router = express.Router();
const Moestuin = require("./models/moestuin");

router.get("/", (req, res) => {
    console.log("/ route called");
    res.send(
        "<h1>Welcome to my API, these are the available routes:</h1>" +
        "<h2>/</h2>" +
        "where you are now" +
        "<hr/>" +
        "<h2>/Moestuin</h2>" +
        "returns all Moestuinen in the database using .find()" +
        "<hr/>"
    );
});

router.get("/Moestuin", async(req, res) => {
    console.log("/Moestuin route called");
    try {
        res.json(await Moestuin.find());
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Retrun on single Moestuin in the database using .findById(objectId)
 * Uses req.params.id to get the id from the url
 * /moestuin/(id) return the moestuin with the id
 */

router.get("/Moestuin/:id", async(req, res) => {
    console.log("/Moestuin/:id route called");
    try {
        res.send(await Moestuin.findById(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Adds one single Moestuin to the database using .create({data})
 * Uses req.body wich means an object is passed
 * /moestuin/create is the appropriate route
 */
router.post("/Moestuin/create", async(req, res) => {
    console.log("/Moestuin/create route called");
    try {
        res.send(await Moestuin.create(req.body));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Updates one single campus in the database using .findByIdAndUpdate(objectId, { $set: data })
 * Uses req.params.id, which means the id is passed in the url
 * Also uses req.body, which means an object is passed
 *
 * /campus/update/6191576ea6578c26ce2cdbc1 updates the campus with id 6191576ea6578c26ce2cdbc1
 * with the data passed in req.body
 */
router.put("/Moestuin/update/:id", async(req, res) => {
    console.log("/moestuin/update/:id route called");
    try {
        res.send(
            await Moestuin.findByIdAndUpdate(req.params.id, { $set: req.body })
        );
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

/**
 * Deletes one single campus from the database using .findByIdAndDelete(objectId)
 * Uses req.params.id, which means the id is passed in the url
 *
 * /campus/delete/6191576ea6578c26ce2cdbc1 deletes the campus
 * with id 6191576ea6578c26ce2cdbc1 from the database
 */
router.delete("/Moestuin/delete/:id", async(req, res) => {
    console.log("/Moestuin/delete/:id route called");
    try {
        res.send(await Moestuin.findByIdAndDelete(req.params.id));
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;