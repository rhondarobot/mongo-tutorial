const mongoose = require('mongoose');//require mongoose whenever we are dealing with libraries that we will need for our project
const Schema = mongoose.Schema;//allow us to create a Schema for our user model

const UserSchema = new Schema({
	name: String
});

const User = mongoose.model('user', UserSchema);//this is creating a 'User model' or 'User class' can be used interchangeably (controls what the collection is called on the Mongo side of things)
  //telling mongo to use the UserSchema as the second argument from above
  //**REMEMBER** the User variable/constant is not defining just ONE user, but a collection of all the users

module.exports = User; //common to export only the model class out of here

//every other file that we make will have a similar syntax/template as this one