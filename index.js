const express = require('express'); // include express
const port = 8000;
const path = require('path');

// fire express...

const app = express();

//add view engine ye help krta h html file ko lane me
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname, 'views'));

// adding parser in res we have details in that we have out data in header we will add data to in res to handle storing in body..
app.use(express.urlencoded());

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