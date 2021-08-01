const mongoose=require('mongoose');

const schema=mongoose.Schema({
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
});

const DBcon=mongoose.model('DBcon',schema);
module.exports=DBcon;