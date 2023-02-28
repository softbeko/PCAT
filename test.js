const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('strictQuery', false);
//connect DB
mongoose.connect('mongodb://127.0.0.1:27017/pcat-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
// Photo.create({
//   title: 'Photo Title 2 ',
//   description: 'Photo description 2 lorem ipsum',
// });

//read a photo

// Photo.find({},(err,data)=>{
//     console.log(data);
// })

//update photo

// const id = '63fbbc32791007f4077c4415';

// Photo.findByIdAndUpdate(
//   id,
//   {
//     title: 'Photo Title 101 update',
//     description: 'Photo description 101 updated',
//   },
//   {
//     new: true
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

//delete a photo

const id = "63fbbe2a1b7555e1d9f77398";

Photo.findByIdAndDelete(id,(err,data)=>{
    console.log('Photo is removed...')

})
