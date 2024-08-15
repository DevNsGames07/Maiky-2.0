const { model, Schema } = require('mongoose');

let CommitSchema2 = new Schema({
    Guild: String,
    Channel: String

});

module.exports = model("CommitSchemaSetup(DEV)", CommitSchema2);