
const express = require('express');

const HotelController = require('../controllers/hotel');

const router = express.Router();

router
    .get('/name/:hotelName', HotelController.getHotelsByName)
    .get('/stars/:stars', HotelController.getHotelsByStars)
    .get('/name/:hotelName/stars/:stars', HotelController.getHotelsByNameAndStars);

// En Contruccion
router
    .put('/:id', HotelController.getHotelsByName)
    .post('/', HotelController.getHotelsByStars)
    .delete('/:id', HotelController.getHotelsByNameAndStars);

module.exports = router;

