const mongoose = require("mongoose");

const MoestuinSchema = new mongoose.Schema({
    Id: { type: Number },
    naam: { type: String },
    zaaitijd: { type: String },
    zaaitijdBuiten: { type: String },
    oogsttijd: { type: String },
    zaaienTotKiem: { type: String },
    zaaienTotOogst: { type: String },
    plantafstand: { type: String },
    categorie: { type: String },
    details: { type: String },
}, {
    collection: "Moestuinen",
});

module.exports = mongoose.model("Moestuin", MoestuinSchema);