const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    favoriteToppings: {
        type: [String],
        default: []
    },
    recipesCount: {
        type: Number,
        default: 0
    },
    likesReceived: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        default: 'Pizza Lover'
    }
}, {
    timestamps: true  // This will add createdAt and updatedAt fields automatically
});

module.exports = mongoose.model('User', userSchema);
