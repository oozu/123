const nongoose = require ('mongoose');

const serverSchema = new mongoose.Schema ({
    guildID : String,
    prefijo : String,
})
const nodel = Mongoose.model (" ConfigServer" , serverSchema);

nodule.exports = model;