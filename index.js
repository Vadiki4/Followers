const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const Twitter = require('twitter');
const app = express();
const port = 5000;
const client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

app.use(cors());
app.get('/getFollowers/:name/:cursor', (req, res) => {
	const { name, cursor } = req.params;
	const params = { screen_name: name, count: 30, cursor };

	client.get('followers/list.json', params, (error, tweets, response) => {
		if (error) {
			console.error(error);
			res.send(error);
		} else if (tweets && response) res.send({ tweets, response });
	});
});

app.listen(port, () => console.log(`followers app listening on port ${port}!`));
