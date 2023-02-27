const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { allQuotes } = require("./taylorquotes");
app.use(express.static("views"));

String.prototype.toTitleCase = function () {
  return this.replace(/\w\S*/g, (w) =>
    w.replace(/^\w/, (c) => c.toUpperCase())
  );
};

function getRandomElementFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function setHeaderInformation(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
}

// Filter allQuotes by the request parameters (if any)
function getFilteredQuotes(req) {
  if (req.query?.song) {
    return allQuotes.filter(
      (lyrics) => lyrics.song === req.query.song.toTitleCase()
    );
  }

  if (req.query?.album) {
    return allQuotes.filter(
      (lyrics) => lyrics.album === req.query.album.toTitleCase()
    );
  }

  // No request parameters (filters), so use default value of allQuotes
  return allQuotes;
}

// index
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// get random lyrics
app.get("/get", (req, res) => {
  setHeaderInformation(res);
  res.send(getRandomElementFrom(getFilteredQuotes(req)));
});

// get all lyrics that match with the filters
app.get("/get-all", (req, res) => {
  setHeaderInformation(res);
  res.send(getFilteredQuotes(req));
});

app.listen(process.env.PORT || port, function () {
  console.log(
    `Express server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  );
});
