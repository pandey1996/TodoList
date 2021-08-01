const { render } = require('ejs');
const express=require('express');
const port=80;
const app=express();
const db=require('./config/mongoose');
const DBcon=require('./models/db_con');



app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views','./views');


app.get('/',function(req, res){
    DBcon.find({},function(err,ans){
        if(err){
            console.log('Cannot find!!!');
            return;
        }
        return res.render('home', {
            list: ans
        });
    });
});

app.get('/add',function(req, res){
    DBcon.create({
        description: req.query.desc,
        category: req.query.cat,
        date: req.query.dat
    },
    function(err, prob){
        if(err){
            console.error.bind("Cannot add to DB",err);
            return res.redirect('back');
        }
        console.log(prob);
        return res.redirect('back');
    });
});

app.get('/del',function(req, res){
    DBcon.findByIdAndDelete()
});

app.listen(port, function(err){
    if(err){
        console.log('Error in Listning');
        return;
    }
    console.log(`Server runninng successfully on ${port}`);
});