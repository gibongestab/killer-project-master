/*
Messages = new Mongo.Collection('messages');


function startupMessages() {
	console.log('startup messages');
	Messages.insert({
		'place': 'welcomeText',
		'text': 'hello junk food'
	});
}


Meteor.startup(function() {
	var messages = Messages.find().fetch();
	if (!messages.length) {
		startupMessages();
	}
});
*/