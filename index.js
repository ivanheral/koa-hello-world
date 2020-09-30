/*
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
*/

var express = require("express");
var port = process.env.PORT || 3000;
var app = express();
app.get("/", function (req, res) {
res.send(JSON.stringify({
    Hello: "World"
}));
});
app.listen(port, function () {
    console.log(`Example app listening on port !`);
});