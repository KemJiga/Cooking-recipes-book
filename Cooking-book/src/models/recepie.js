const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recepieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
});

const Recepie = mongoose.model('recepie', recepieSchema);
module.exports = Recepie;