var express = require("express");

var PORT = (process.env.PORT || 1607);
var BASE_API_PATH =     "/api/v1";

var app = express ();

app.use("/", express.static("./public"));

var contacts = [
    {
        "name": "pablo",
        "phone": 12345
    },
    {
        "name": "pepe",
        "phone": 6789 
    }
];

app.get(BASE_API_PATH+"/contacts", (req, res) =>{
    res.send(JSON.stringify(contacts, null, 2));
});

app.post(BASE_API_PATH+"/contacts", (req, res) =>{
    var newContact = req.params;
    console.log()
});

app.listen(PORT, ()=>{
    console.log('Server ready at ${PORT}!');
});
