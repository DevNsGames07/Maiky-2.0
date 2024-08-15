const { model, Schema } = require('mongoose');

let CommitSchema = new Schema({
    Guild: String,
    User: String,
    UserPF: String,
    Title: String,
    Description: String,
    SecondaryDescription: String

});

module.exports = model("CommitSchema(DEV)", CommitSchema);