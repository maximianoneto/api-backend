const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/3000');
mongoose.Promise = global.Promise;

module.exports = mongoose;
