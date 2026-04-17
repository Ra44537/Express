const express = require("express");
const app = express();
const ExpressError = require("./expresserror");
 


const checkToken = (req, res, next) => {
    let {token} = req.query;
    if (token === "giveaccess") {
        next();
    }
    throw new ExpressError(401, "ACCESS DENIED!");
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
app.get("/err", (req,res) => {
    abcd = abcd;
});

app.use((err, req, res, next) => {
    let{status = 500, message= "Some error occurred"} = err;
    res.status(status ).send(message);
});

// app.use((err, req, res,next) => {
//  console.log("err");
//  res.send(err);
// });


// app.use((err, req, res, next) => {
//     console.log("----ERROR----");
//     res.send(err);
// });


//404
// app.use((req, res, ) => {
//     res.status(404).send("Page not found!");
// });

app.listen(8080, () => {
    console.log("server is listening on port 8080");
});