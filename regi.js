express= require('express')
const fs= require('fs')
const path = require('path')
const ejs = require('ejs')
const app = express()
// const bodyparser= require('body-parser') // it is deprecated module
var mongoose=require('mongoose')
const es6Renderer = require('express-es6-template-engine')
// const { default: anymatch } = require('anymatch')
mongoose.connect('mongodb://localhost/codelingual',{useNewUrlParser:true});

const port=4000;

//Explaining mongoose Schema

var UserSchema= new mongoose.Schema({
  name:String,
  Age:Number,
  Gender:String,
  email:String,
  pass:Number,
  pass_repeat:Number
})

var UserDetails = mongoose.model('UserDetails',UserSchema);

// express related stuff
app.use('static',express.static('static'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded());

//pug related stuff
app.engine('html',es6Renderer);
app.set('view engine','html');
app.set('views', path.join(__dirname,'views'))


app.get('/', (req,res)=>{
  const params={ }
  res.status(200).render('index.html', params)
})
app.get('/', (req,res)=>{
  const params={ }
  res.status(200).render('reg.html', params)
})

app.post('/', (req,res)=>{
  var myData = new UserDetails(req.body);
  myData.save().then(()=>{
    res.send("My data has been saved");
  }).catch(()=>{
    res.status(404).send("The item couldnt be saved")
  })
  // res.status(200).render('new.pug')
})

app.listen(port,()=>{
  console.log(`Listening at port ${port}`);
})




