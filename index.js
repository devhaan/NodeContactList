const express = require('express'); // include express
const port = 8000;
const path = require('path');

// fire express...

const app = express();

//add view engine ye help krta h html file ko lane me
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));

// resending requests back to server
app.get('/', (req, res) => {

   return res.render("home");
})


// listen the request on port 8000
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('Express js server is up');
})