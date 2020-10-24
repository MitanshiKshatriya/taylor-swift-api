
const express = require('express');

const app = express();
app.use(express.static('views'));

var fs = require('fs');

app.get('/', (req, res) => {
  fs.readFile('taylorquotes.db', function(err, buf) {
    var qarr = JSON.parse(buf);
    var random = Math.floor(Math.random() * (qarr.length - 1));
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );

    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    );


    res.send(qarr[random]);
  });
});

//implement api to get a random quote from an album


//Httpserver Port Number 3000.
app.listen(process.env.PORT || 3000, function() {
  console.log(
    'Express server listening on port %d in %s mode',
    this.address().port,
    app.settings.env
  );
});


app.set('view engine', 'ejs');