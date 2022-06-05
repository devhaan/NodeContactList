const express = require('express'); // include express
const port = 8000;
const path = require('path');

// fire express...

const app = express();

//add view engine ye help krta h html file ko lane me
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));

//initializing some dummy contact listeners
let contactList =[
    {
        name:"devendra",
        phone:"1111111110"
    },
    {
        name:"devendra 1",
        phone:"1111111111"
    },
    {
        name:"devendra 2 ",
        phone:"1111111112"
    },
    {
        name:"devendra 3",
        phone:"1111111113"
    }
]

// resending requests back to server
app.get('/', (req, res) => {

   return res.render("home",{
       title:"Devendra Mahor",
       contact_list:contactList
    });
})



// listen the request on port 8000
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('Express js server is up');
})