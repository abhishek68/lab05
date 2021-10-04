var express = require('express')
var app = express()
const PORT =process.env.PORT || 3000
app.get('/', function (req, res) {
  res.sendFile( __dirname + "/" + "index.html" );
})
app.get('/meat', function (req, res) {
  res.sendFile( __dirname + "/" + "meat.html" );
})
app.listen(PORT,()=>{
             console.log("Listening on port:"+PORT)
})
