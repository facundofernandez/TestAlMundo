
const express = require('express');

const HotelController = require('../controllers/hotel');

const router = express.Router();

router
    .get('/name/:hotelName', HotelController.getHotelsByName)
    .get('/stars/:stars', HotelController.getHotelsByStars)
    .get('/name/:hotelName/stars/:stars', HotelController.getHotelsByNameAndStars);


// EXTRAS: Solo a nivel API en modo produccion
router
    .put('/', HotelController.putHotels)
    .post('/', HotelController.postHotels)
    .delete('/:id', HotelController.deleteHotels);

module.exports = router;

