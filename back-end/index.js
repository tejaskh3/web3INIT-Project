const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.get('/',(r,R)=>R.send("hi"));
app.listen(5000,()=>{console.log("ji")});
