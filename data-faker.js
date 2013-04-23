// pull in modules - Faker is the one being highlighted in this demo
// https://github.com/marak/Faker.js/
var faker = require("Faker");
var http = require("http");

// create server and listen for requests on port 3000
http.createServer(function (req, res) {

	// get path and query params from request
	// Create regular expressions for our supported routes
	var path = require("url").parse(req.url).path;
	var query = require("querystring").parse(path);
	var usersRegex = new RegExp("/users(?=\/?$|\\?)");
	var postsRegex = new RegExp("/posts(?=\/?$|\\?)");

	if (usersRegex.test(path)) {
		getUsers(res, query["/users?limit"]);
	} else if (postsRegex.test(path)) {
		getPosts(res, query["/posts?limit"]);
	} else 	{
		res.writeHead(500, {"Content-Type": "text/plain"});
		res.write("Route Not Supported");
	}
	res.end();

}).listen(3000);

console.log("Node Server Running at localhost:3000");

// get users up to provided limit - if not provided 50 will be used
var getUsers = function (res, limit) {
	var users = [];
	var theLimit = limit ? limit : 50;

	for (var i = 0; i < theLimit; i++) {
		users.push(faker.Helpers.userCard()); // ask Faker.js for a user card
	}

	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(JSON.stringify(users));
};

// get posts up to provided limit = if not provided 50 will be used
var getPosts = function (res, limit) {

	var posts = [];
	var curPost = {};
	var theLimit = limit ? limit : 50;

	for (var i = 0; i < theLimit; i++) {
		// creating a post object for a given user.  
		curPost.userName = faker.Name.findName();
		curPost.handle = faker.Internet.userName();
		curPost.post = faker.Lorem.sentences();
		posts.push(curPost);
	}

	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write(JSON.stringify(posts));	

};