const express = require('express')
const mongoose = require('mongoose')
const multer  = require('multer')
const path = require('path');
const app = express();
app.use(express.static('public'));  
const Q1 = require('./model/q1')

mongoose.connect('mongodb://0.0.0.0:27017/Q1DBex')
const db = mongoose.connection

db.on('open', ()=>{
  console.log('Connected to database!!')
})

var options = multer.diskStorage({ 
    destination : function (req, file, cb) {
      if (file.mimetype !== 'image/jpeg') 
      {
        return cb('Invalid file format'); //cb(err)
      }
      cb(null, './uploads');
    } ,
      filename: function (req, file, cb) {
        cb(null, (Math.random().toString(30)).
          slice(5, 10) + Date.now() 
          + path.extname(file.originalname));
      }
});
var upload= multer({ storage: options });

app.post("/url",()=>{})
app.post('/file_upload', upload.single("myfile"), function (req, res, next) {
  res.write(req.body.fname+" "+req.body.lname+"\n");
  res.write("file uploaded");
  res.end();
})

app.post('/photos_upload',upload.array('photos',2), (req, res) => {
  // req.files is array of `photos` files
  console.log(req.files)
  const add = new Q1({
    name: req.body.name,
    pass: req.body.pass,
    email: req.body.email,
    phone: req.body.phone,
    avatar: req.body.photos
  })
  try {
    const newq1 = add.save()
    res.redirect('/data')
  } catch (error) {
    console.log('Error'+error)
  }
})

app.get('/data',async(req,res)=>{
  try {
    const data = await Q1.find()
    res.json(data)
  } catch (error) {
    error
  }
})

app.use(function (err, req, res, next) {
  if (err instanceof multer.MulterError) 
  {
    console.log("ERRRR");
    res.status(500).send("file upload  err "+err.message);

  }
  else 
    next(err);
});
app.listen(8000);