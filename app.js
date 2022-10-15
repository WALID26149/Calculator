const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.get('public/calculator.png', function(req, res) {
  res.sendFile(__dirname + "/calculator.png")
});

app.listen(process.env.PORT || 5000, function() {
  console.log("server is running");
})
