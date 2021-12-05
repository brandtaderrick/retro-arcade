const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and Model

const UserSchema = new Schema({
        username: String,
        password: String,
        pongHighScore: int,
        snakeHighScore: int
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
