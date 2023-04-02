const mongoose = require('mongoose')

const mandoSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name for our mando"]
    },
    weapon: {
        type: String,
        required: true,
        default: 0
    },
    shipName: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    },
    bounties: {
        type: Number,
        required: true
    },    
},
{
    timestamps: true
})

const Mando = mongoose.model('Mando', mandoSchema);
module.exports = Mando;