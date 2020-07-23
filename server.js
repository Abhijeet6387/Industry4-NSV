const express = require("express"); 
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const db = process.env.MONGODB_URI || "mongodb+srv://aditya:Sriganesh@3@cluster0-knzmq.mongodb.net/test"
const static_api = require("./routes/static_api");
const event_api=require("./routes/event_api");
const component_api=require("./routes/component_api");
const hardware_design_api=require("./routes/hardware_design_api");
const hardware_MES_api = require("./routes/hardware_MES_api");
const software_design_api=require("./routes/software_design_api");
const software_MES_api = require("./routes/software_MES_api");

const path=require("path");




console.log(db)

app.use(bodyParser.urlencoded({
    extended:false             
}))
app.use(bodyParser.json()); 








app.set('view engine','pug');
app.set('views', __dirname + '/views');  
app.use('/public', express.static(__dirname + '/public'));




// app.get('/',(req,res)=>{
//     res.render('introduction')
// })
// app.get('/about',(req,res)=>{
//     res.render('about')
// })

// app.get('/implementation/layouts',(req,res)=>{
//     res.render('layouts')
// })
// app.get('/implementation/LHBCoachShellManufacture',(req,res)=>{
//     res.render('LHBCoachShellManufacture')
// })
// app.get('/implementation/tables',(req,res)=>{
//     res.render('tables')
// })

// app.get('/implementation/architecture',(req,res)=>{
//     res.render('Implementation and architecture')
// })
// app.get('/moredetails',(req,res)=>{
//     res.render('more details')
// })
// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })

app.use('/',static_api);
app.use('/event',event_api);
app.use('/component',component_api);
app.use('/hardwareDesign',hardware_design_api);
app.use('/hardwareMES',hardware_MES_api);
app.use('/softwareDesign',software_design_api);
app.use('/softwareMES',software_MES_api);

mongoose.Promise=global.Promise;


mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
    if(err){
        console.log(err)
    }
    else
    console.log("connected to db")
})



app.listen(process.env.PORT||3000, () => {
  console.log("Server is listening on port: 3000");
});


