
const { join } = require('path');
const Hotel = require('../models/hotels');
let data = require(join(__dirname, '../data/data.json'));
const config = require('../config');

module.exports.getHotelsByName = getHotelsByName;
module.exports.getHotelsByStars = getHotelsByStars;
module.exports.getHotelsByNameAndStars = getHotelsByNameAndStars;

// EXTRAS: Solo a nivel API
module.exports.putHotels = putHotels;
module.exports.postHotels = postHotels;
module.exports.deleteHotels = deleteHotels;

function getHotelsByName(req, res) {
    let hotelName = req.params.hotelName;
    let result = data;

    if (hotelName && hotelName.length > 3) {

        if (config.mode === "production") {
            let regExpStrign = `${hotelName}`;
            Hotel.find({ name: new RegExp(regExpStrign) })
            .then((hotels) => {
                res.status(200).json(hotels)
            })
            .catch(()=>{
                res.status(200).json({})
            });
            

        } else {
            let regExpStrign = `${hotelName.toLowerCase()}`;
            res.status(200).json(result.filter((elem) => new RegExp(regExpStrign).test(elem[Hotel.Name].toLowerCase())))
        }

    };

}

function getHotelsByStars(req, res) {
    let stars = req.params.stars;
    let result = data;

    if (stars) {

        if (config.mode === "production") {

            Hotel.find({ stars: { $in: stars.split(",") } })
            .then((hotels) => {
                res.status(200).json(hotels)
            })
            .catch((error)=>{
                if (err) res.status(200).json({})
            });
            

        } else {

            res.status(200).json(result.filter(elem => {

                if (stars.length === 1) {
                    if (elem[Hotel.Stars] === parseInt(stars)) return true
                } else {
                    let arrayStars = stars.split(",");

                    for (let i in arrayStars) {
                        if (elem[Hotel.Stars] === parseInt(arrayStars[i])) return true
                    }
                }

                return false

            }));
        }


    };


}

function getHotelsByNameAndStars(req, res) {
    let { hotelName, stars } = req.params;
    let result = data;

    if (config.mode === "production") {
        let regExpStrign = `${hotelName}`;

        Hotel.find({
            name: new RegExp(regExpStrign),
            stars: {
                $in: stars.split(",")
            }
        })
        .then((hotels) => {
            res.status(200).json(hotels)
        })
        .catch((error)=>{
            res.status(200).json({})
        });

    } else {

        if (hotelName && hotelName.length > 3) {
            let regExpStrign = `${hotelName.toLowerCase()}`;
            result = result.filter((elem) => new RegExp(regExpStrign).test(elem[Hotel.Name].toLowerCase()));
        };

        if (stars) {
            result = result.filter(elem => {

                if (stars.length === 1) {
                    if (elem[Hotel.Stars] === parseInt(stars)) return true
                } else {
                    let arrayStars = stars.split(",");

                    for (let i in arrayStars) {
                        if (elem[Hotel.Stars] === parseInt(arrayStars[i])) return true
                    }
                }

                return false

            });
        };
        res.status(200).json(result)
    }
}

function putHotels(req, res) {
    let { id, name, stars, price, image, amenities } = req.body;

    let updateJson = {};

    if (name) updateJson.name = name;
    if (stars) updateJson.stars = stars;
    if (price) updateJson.price = price;
    if (image) updateJson.image = image;
    if (amenities) updateJson.amenities = amenities;

    if (config.mode === "production") {

        Hotel.find({ id: id }, (err, hotel) => {

            Hotel.update({ id: hotel.id }, {
                $set: updateJson
            })
            .then((newHotel) => {
                res
                    .status(200)
                    .json({
                        status: 200,
                        message: "Hotel Modificado"
                    })
            })
            .catch((error)=>{
                res.status(200).json({})
            });

        })
    } else {

    }
}

function postHotels(req, res) {

    let { id, name, stars, price, image, amenities } = req.body;

    if (config.mode === "production") {

        let { id, name, stars, price, image, amenities } = req.body;

        let postJson = {};

        //postJson._id = new mongoose.Types.ObjectId();
        if (id) postJson.id = id;
        if (name) postJson.name = name;
        if (stars) postJson.stars = stars;
        if (price) postJson.price = price;
        if (image) postJson.image = image;
        if (amenities) postJson.amenities = amenities;

        let newHotel = new Hotel(postJson);

        newHotel.save((err, hotel) => {

            if (err) res.status(404).json({ err })

            res.status(200).json({
                status: 200,
                message: "Hotel Creado"
            })

        })
    } else {

    }
}

function deleteHotels(req, res) {
    let id = req.params.id;

    if (config.mode === "production") {

        Hotel.find({ id: id }, (err, hotel) => {
            if (err) res.status(404).json({ err })
            Hotel.deleteOne({ id: id }, function (err) {
                if (err) res.status(404).json({ err })

                res.status(200).json({
                    status: 200,
                    message: "Hotel id: " + id + " eliminado"
                })
            });

        })
    } else {

    }
}