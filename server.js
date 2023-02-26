const express = require("express");
const app = express();
const path = require("path");
const { allQuotes } = require("./taylorquotes");
app.use(express.static("views"));

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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  if (req.query?.song) {
    const filteredQuotes = allQuotes.filter(
      (lyrics) => lyrics.song === req.query.song.toTitleCase()
    );
    res.send(getRandomElementFrom(filteredQuotes));
    return;
  }

  if (req.query?.album) {
    const filteredQuotes = allQuotes.filter(
      (lyrics) => lyrics.album === req.query.album.toTitleCase()
    );
    res.send(getRandomElementFrom(filteredQuotes));
    return;
  }

  res.send(getRandomElementFrom(allQuotes));
});

// get all lyrics that match with the filters
app.get("/get-all", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  if (req.query?.song) {
    res.send(
      allQuotes.filter((lyrics) => lyrics.song === req.query.song.toTitleCase())
    );
    return;
  }

  if (req.query?.album) {
    res.send(
      allQuotes.filter(
        (lyrics) => lyrics.album === req.query.album.toTitleCase()
      )
    );
    return;
  }

  res.send(allQuotes);
});

//implement api to get a random quote from an album

//Httpserver Port Number 3000.
app.listen(process.env.PORT || 3000, function () {
  console.log(
    `Express server listening on port ${this.address().port} in ${
      app.settings.env
    } mode`
  );
});
