const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/video');

const db = "mongodb://rebootcampspotad:j0bsecuritymakesme_sad@ds229415.mlab.com:29415/rebootcampspotdb";
mongoose.Promise = global.Promise;
mongoose.connect(db, {
	useMongoClient: true
	},
	function(err){
	if(err){
			console.error("Error! " + err);
	}
});

router.get('/', function(req, res){
	res.send('api works');
});

router.get('/users', function(req,res){
	console.log("Get request for all users. For testing purposes.");
	User.find({})
	.exec(function(err, users){
		if (err){
			console.log("Error retrieving users.");
		}else{
			res.json(users);
		}
	});
});

router.get('/users/:email', function(req,res){
	console.log("Get request for a single user. For testing purposes.");
	User.findone({userEmail: req.params.email})
	.exec(function(err, user){
		if (err){
			console.log("Error retrieving user.");
		}else{
			res.json(user);
		}
	});
});

router.post('/user', function(res,req){
		console.log('Post a new user.');
		var newUser = new User();
		newUser.userEmail = req.body.userEmail;
		newUser.userType = req.body.userType;
		newUser.save(function(err, insertedUser){
			if (err){
				console.log("Error saving new user. Quel dommage.")
			}
		});
});

module.exports = router;