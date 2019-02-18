const ping = require('./ping.js');
const GetBooks = require('./GetBooksFromApi1.js');
const LikeDislike = require('./LikeDislikeApi');

module.exports = [].concat(
    ping,
    GetBooks,
    LikeDislike,
);