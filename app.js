const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('server-favicon');


const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(favicon(__dirname + "/favicon.io.png"))

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});



app.listen(process.env.PORT || 5000, function() {
  console.log("server is running");
})
