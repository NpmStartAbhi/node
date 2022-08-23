const express = require('express');
const app = express();
const router = express.Router()


app.get('/', (req, res) => {
    
   res.send("Hi ..  this is node app from scratch");
   //res.status(200).json({message : " error"})
  // res.download('server.js')
})
app.get('/about', (req, res) => {
  res.send('About birds')
})

function sum (){
  let x = "Hi";
}

router.get('/', function(req, res){
  res.send("sum()");
  
});

router.get('/:id', function(req, res){
});


router.post('/', function(req, res){
  res.send('POST route on things.');
});



app.use(router);
//export this router to use in our index.js
module.exports = router;


app.listen(3000)