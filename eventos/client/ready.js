const mongoose = require('mongoose');
const config = require('../../config/config.json');
nodule.exports = client => {
    //nos concetamos a la base de datos

    mongoose.connect(config.mongodb)
}