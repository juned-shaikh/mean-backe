const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('./db.js');
const routes = require('./routes/routes.js')
const port = process.env.PORT || 8000;
const app = express();

app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

app.listen(port, ()=>console.log('server started at port '+port))


app.use('/',routes)

// app.use('/',(req,res)=>{
//     res.json({message:"hello from juned"})
// })