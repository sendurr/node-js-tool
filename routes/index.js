var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sendurr' });
});


/* GET Userlist page. */
router.get('/userlist', function(req, res) {
    var db = req.db;
    //var data = db.model('data', usercollection);
    var Schema = db.Schema;
    //console.log(Schema);
	var userSchema = new Schema({
	name : String,
	age : Number,
	DOB : Date,
	isAlive : Boolean
	});

	var User = db.model('user5', userSchema);
	User.find(function (err, users) {
	  if (err) return console.error(err);
	  console.log(users);
	});


	/*var User = db.model('User5', userSchema1);
	var arvind = new User({
	name : 'Arvind',
	age : 99,
	DOB : '01/01/1915',
	isAlive : true
	});
	 
	arvind.save(function (err, data) {
	if (err) console.log(err);
	else console.log('Saved : ', data );
	});*/
    //var collection = db.get('usercollection');
    /*collection.find({},{},function(e,docs){
        res.render('userlist', {
            "userlist" : docs
        });
    });*/
});

module.exports = router;
