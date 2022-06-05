const express = require('express'); // include express
const port = 8000;
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/mongoose');
const Contact = require('./models/contact');

// fire express...

const app = express();

//add view engine ye help krta h html file ko lane me
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));


//middleware //
// adding parser in res we have details in that we have out data in header we will add data to in res to handle storing in body..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("assets")); // will help to load css js  images or static files

//custom middleware exanple//
// app.use((req,res,next) => {
//     req.myname="devendra";
//     console.log("mdddleware 1");
//     next();// must be include this otherwise stuck here by this it will movw to next state
// })
// app.use((req,res,next) => {
//     console.log(req.myname);
//     console.log("mdddleware 2");
//     next();// must be include this otherwise stuck here by this it will movw to next state
// })



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
});

app.get('/profile', function(req, res){
    return res.render('profile', {
        title: "Let us play with ejs"
    });
});

app.get('/delete-contact',(req, res)=>{
    //console.log(req.query.phone);
    let phoneTemp = req.query.phone;
    //will take extra space
    // let list=contactList.filter(contact=> (contact.phone !== phoneTemp));
    // contactList=list;
    //console.log("list",list);
    //or
   

    //without extra space
    let currentIndex=contactList.findIndex(contact => contact.phone == phoneTemp);
    console.log(currentIndex,phoneTemp);
    if(currentIndex != -1){
        contactList.splice(currentIndex, 1);
    }
    
    return res.redirect('back'); // will redirect to same page from where request came
});

//responding request for data storage post request from input form
app.post('/create-contact', function(req, res){
     console.log(req.body);
    contactList.push(req.body);

    return res.redirect('back'); // will redirect to same page from where request came
});


// listen the request on port 8000
app.listen(port,(err)=>{
    if(err) console.log(err);
    else console.log('Express js server is up');
})