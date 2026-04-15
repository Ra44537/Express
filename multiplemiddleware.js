const express = require("express");
const app = express();
 

// // exploring app.use
// app.use( (req, res, next) => {
//     console.log("I am only for random");
//     next();
// });
const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    }
    res.send("ACCESS DENIED!");
};

app.get("/api", checkToken, (req,res) => {
    res.send("data");
});



app.get("/", (req, res) => {
    res.send("Hi, I am root.");
});
app.get("/random", (req,res) => {
    res.send("this is a random page");
});
//utility middleware
// //logger - morgan
// app.use((req, res, next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time);
//     next();
// });

//404
app.use((req, res, ) => {
    res.status(404).send("Page not found!");
});

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});