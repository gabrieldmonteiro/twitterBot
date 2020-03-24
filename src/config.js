const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    consumer_key: process.env.TT_CONSUMER_KEY,
    consumer_secret: process.env.TT_CONSUMER_SECRET,
    access_token: process.env.TT_ACCESS_TOKEN,
    access_token_secret: process.env.TT_ACCESS_TOKEN_SECRET
};