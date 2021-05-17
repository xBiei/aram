const mongoose = require('mongoose');

const aramSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userID: String,
    loluser: String,
    win: String,
    loss: String,
    threewin: String,
    sixwin: String,
    tenwin: String,
    threeloss: String,
    sixloss: String,
    lp: String,
    lastUpdated: { type: Date, default: new Date() }
})

module.exports = mongoose.model('aram', aramSchema);