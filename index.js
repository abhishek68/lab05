var express = require('express')
var app = express()
const PORT =process.env.PORT || 3000
app.get('/home/:id',function(req,res){
       res.send(req.params.id)
})
app.get('/home', function (req, res) {
  res.send('hello world')
})
app.listen(PORT,()=>{
             console.log("Listening on port:"+PORT)
})