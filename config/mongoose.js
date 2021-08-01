const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/TODO');

var db=mongoose.connection;

db.on('error',console.error.bind('DB Connection Error :'));

db.once('open',function(){
    console.log("DB connected !!!");
});