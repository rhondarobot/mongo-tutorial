//import an assertion file at the top
const assert = require('assert'); //an assertion is going to expect a boolean to be passed through it
//'describe block' better referred to a 'describe function'
//'it block better' referred to an 'it function'
const User = require('../src/user');//up one file into the user file and calling the user.js file

describe('Creating records', () => {
	//place a variety of it blocks
	it('saves a user', () => {
		const joe = new User({ name: 'Joe'});

		joe.save()
			.then(() => {
				assert(!joe.isNew);
				//has joe been saved successfully?
				done();
			});	
			//using new User creates a new instance of a User model (user (joe))--joe is not added to our database right now, he has just been created--that's all
	});//it block takes same arguments as describe block
});//describe() declares 2 arguments --first a string that describes the test we are about to write and the 2nd one is a fxn

//we are throwing in a fat arrow (=>) function
//the purpose of the string is just to modify the testing feedback we get from mocha (has nothing to do with how the tests are written or ran)
//^string is solely for us to figure out which tests are breaking when we are moving along
//^use reasonable names in general for the strings
//the it block is the absolute key to running all testing inside of mocha
//need to make an assertion (making one value equal to another value to ensure tests are running correctly)
// //assertions are not automatically configured in mongoose like 'it' and 'describe' are
// 1. create instance of a user
// 2. save a user
// 3. verify the user was created and saved
// mocha doesn't understand asynchronous fxns, so you gotta specify when to run the test, or mocha will try to run them all as quickly as possible
// mongoose will automatically flag new 'isNew' on model in database
