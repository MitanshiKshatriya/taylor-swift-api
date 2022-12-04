const express = require("express");
const path = require("path");
const app = express();
app.use(express.static("views"));

var fs = require("fs");

String.prototype.toTitleCase = function () {
	return this.replace(/\w\S*/g, (w) =>
		w.replace(/^\w/, (c) => c.toUpperCase())
	);
};

// index
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

// get random lyrics
app.get("/get", (req, res) => {
	fs.readFile("taylorquotes.db", function (err, buf) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, OPTIONS, PUT, PATCH, DELETE"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"X-Requested-With,content-type"
		);
		var qarr = JSON.parse(buf);
		if (Object.entries(req.query).length === 0) {
			var random = Math.floor(Math.random() * (qarr.length - 1));
			res.send(qarr[random]);
		} else {
			if (req.query.album) {
				qarr = qarr.filter(
					(lyrics) => lyrics.album == req.query.album.toTitleCase()
				);
			}
			if (req.query.song) {
				qarr = qarr.filter((lyrics) => lyrics.song == req.query.song.toTitleCase());
			}
			var random = Math.floor(Math.random() * (qarr.length - 1));
			res.send(qarr[random]);
		}
	});
});

// get all lyrics that match with the filters
app.get("/get-all", (req, res) => {
	fs.readFile("taylorquotes.db", function (err, buf) {
		res.setHeader("Access-Control-Allow-Origin", "*");
		res.setHeader(
			"Access-Control-Allow-Methods",
			"GET, POST, OPTIONS, PUT, PATCH, DELETE"
		);
		res.setHeader(
			"Access-Control-Allow-Headers",
			"X-Requested-With,content-type"
		);
		var qarr = JSON.parse(buf);
		if (!(Object.entries(req.query).length === 0)) {
			if (req.query.album) {
				qarr = qarr.filter(
					(lyrics) => lyrics.album == req.query.album.toTitleCase()
				);
			}
			if (req.query.song) {
				qarr = qarr.filter((lyrics) => lyrics.song == req.query.song.toTitleCase());
			}
		}
		res.send(qarr);
	});
});

//implement api to get a random quote from an album

//Httpserver Port Number 3000.
app.listen(process.env.PORT || 3000, function () {
	console.log(
		"Express server listening on port %d in %s mode",
		this.address().port,
		app.settings.env
	);
});

app.set("view engine", "ejs");
