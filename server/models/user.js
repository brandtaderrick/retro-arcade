const mongoose = require('mongoose');
// Defines the structure of the document which will later be..
const Schema = mongoose.Schema;

// Create Schema and Model

const UserSchema = new Schema({
        username: {
                type: String,
                required: true,
        },
        password: {
                type: String,
                required: true,
        },

        pongHighScore: {
                type: String,
                required: false,
        },

        snakeHighScore: {
                type: String,
                required: false,
        },

}, {timestamps: true});

const UserInDatabase = mongoose.model('UserSchema', UserSchema)

module.exports = UserInDatabase;
