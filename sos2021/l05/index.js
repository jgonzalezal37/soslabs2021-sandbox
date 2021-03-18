var express = require("express");
var path = require("path");

var app = express();

var port = 10001;

app.use("/", express.static(path.join(__dirname,"public")));

app.get("/hello", (req, res) => {
    res.send("<html><body><h1>Hello from this tiny server</h1></body></html>");
});

app.post("/hello", (req, res) => {
    res.send("<html><body><h1>Hello from this tiny server</h1></body></html>");
});


app.listen(port, () =>{
    console.log(`Server ready listening on port ${port}`);
});