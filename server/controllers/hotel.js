
const { join } = require('path');
const Hotels = require('../models/hotels');
let data = require(join(__dirname, '../data/data.json'));

module.exports.get = getHoteles;
module.exports.getHotelsByName = getHotelsByName;
module.exports.getHotelsByStars = getHotelsByStars;
module.exports.getHotelsByNameAndStars = getHotelsByNameAndStars;

function getHoteles(params) {

    let { name, estrellas } = params;
    return new Promise((resolve, reject) => {

        let result = data;

        if (name && name.length > 3) {
            let regExpStrign = `${name.toLowerCase()}`;
            result = result.filter((elem) => new RegExp(regExpStrign).test(elem.name.toLowerCase()));
        };

        if (estrellas) {

            result = result.filter(elem => {
                let stars = estrellas.split(",");

                for (let i in stars) {
                    if (elem.stars === parseInt(stars[i])) {
                        return true
                    }
                }
                return false

            });
        }

        if (!name && !estrellas) {
            result = {};
        }

        (resolve(result))
    });
}

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