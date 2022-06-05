const express = require('express'); // include express
const port = 8000;

// fire express...

const app = express();


// listen the request on port 8000
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('Express js server is up');
})