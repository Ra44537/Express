const express = require("express");
const app  = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("you contacted the root path");
});

app.get("/apple", (req, res) => {
    res.send("you contacted the apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted the orange path");
});

app.get("/*splat", (req, res ) => {
    res.send("This path does not exist");
});
 app.post("/", (req, res ) => {
    res.send("you send a post reqest ");
});

