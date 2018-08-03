
const { join } = require('path');
const Hotels = require('../models/hotels');
let data = require(join(__dirname, '../data/data.json'));

module.exports.getHotelsByName = getHotelsByName;
module.exports.getHotelsByStars = getHotelsByStars;
module.exports.getHotelsByNameAndStars = getHotelsByNameAndStars;

function getHotelsByName(req, res) {
    let hotelName = req.params.hotelName;
    let result = data;

    if (hotelName && hotelName.length > 3) {
        let regExpStrign = `${hotelName.toLowerCase()}`;
        result = result.filter((elem) => new RegExp(regExpStrign).test(elem[Hotels.Name].toLowerCase()));
    };

    res.json(result)

}

function getHotelsByStars(req, res) {
    let stars = req.params.stars;
    let result = data;

    if (stars) {
        result = result.filter(elem => {

            if (stars.length === 1) {
                if (elem[Hotels.Stars] === parseInt(stars)) return true
            } else {
                let arrayStars = stars.split(",");

                for (let i in arrayStars) {
                    if (elem[Hotels.Stars] === parseInt(arrayStars[i])) return true
                }
            }

            return false

        });
    };

    res.json(result)
}

function getHotelsByNameAndStars(req, res) {
    let { hotelName, stars } = req.params;
    let result = data;

    if (hotelName && hotelName.length > 3) {
        let regExpStrign = `${hotelName.toLowerCase()}`;
        result = result.filter((elem) => new RegExp(regExpStrign).test(elem[Hotels.Name].toLowerCase()));
    };

    if (stars) {
        result = result.filter(elem => {

            if (stars.length === 1) {
                if (elem[Hotels.Stars] === parseInt(stars)) return true
            } else {
                let arrayStars = stars.split(",");

                for (let i in arrayStars) {
                    if (elem[Hotels.Stars] === parseInt(arrayStars[i])) return true
                }
            }

            return false

        });
    };

    res.json(result)
}