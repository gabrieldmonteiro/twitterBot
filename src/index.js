console.log("Twitter bot rodando");

const Twit = require('twit');
const express = require('express');
const config = require('./config');
const app = express();

let port = 3333;

let T = new Twit(config);

app.all('/' ,(req, res) => {
    res.send('Hello World! 😊');    
});

let q = ['xd','XD', 'xD'];

let stream = T.stream('statuses/filter', {track: q});

let excludedSpamUsers =['622262193' , '846829598822154240', '1150739705467506689' , '957937607471546369', '1111666440044634112', '4900446473', '1054293194836455425', '738915032684077056', '737913984922353665', '3252320732', 
'738949795973189634', '739671459891548161'];

stream.on('tweet', function (tweet) {
    if (excludedSpamUsers.indexOf(tweet.user.id_str)  == -1) {
        console.log(tweet.user.name + ": " + tweet.text);

        T.post('statuses/retweet/:id', { id: tweet.id_str }, function (err, data, response) {
            console.log('TWEETED');
        });
        T.post('favorites/create', { id: tweet.id_str }, function (err, data, response) {
            console.log('LIKED');
        });
        
    }
});
app.listen(port, () => console.log(`Bot app listening on port ${port}!`));