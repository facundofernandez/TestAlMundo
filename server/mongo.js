

var hotelSchema = mongoose.Schema({
    id: String,
    name: String,
    stars: Number,
    price: Number,
    image: String,
    amenities: [String]
});

var Hotel = mongoose.model('Hotel', hotelSchema);





module.exports = mongoose;