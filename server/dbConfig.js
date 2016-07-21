var mongoose = require('mongoose');
var mongoURL = process.env.MONGODB_URI || 'mongodb://127.0.0.1:/iGrow';
mongoose.connect(mongoURL);

var db = mongoose.connection;

db.on('error',function(err){
 throw err;
});

db.once('open',function(){
 console.log('conecction is open');
});

module.exports = db;