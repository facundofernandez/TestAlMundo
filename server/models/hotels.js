
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const config = require('../config');

module.exports = exportModule(config.mode);

function exportModule(environment) {

    if (environment === 'production') {

        let hotelSchema = Schema({
            id: String,
            name: String,
            stars: Number,
            price: Number,
            image: String,
            amenities: [String]
        });

        return mongoose.model('Hotel', hotelSchema);;

    } else {

        return {
            Id: "id",
            Name: "name",
            Stars: "stars",
            Price: "price",
            Image: "image",
            Amenities: "amenities"
        }
    }
}