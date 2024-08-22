const mongoose = require("mongoose");

const welcomeSchema = new mongoose.Schema({
    Guild: { type: String, required: true },
    Channel: { type: String, default: null },
    WelcomeMessage: { type: String, default: "Welcome {user} to {guild}", required: true },
    WelcomeEnabled: { type: Boolean, default: true },
});

module.exports = mongoose.model("WelcomeDB(Maiky)", welcomeSchema);