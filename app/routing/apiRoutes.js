// GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

// Math.abs(numbas)

app.get("/api/friends", function(request, result) {
	result.sendFile(path.join(__dirname, "friends.js"));
})

app.post("api/friends", function(request, result) {
	var newFriend = request.body;
	newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
	console.log(newFriend);
	friendsList.push(newFriend);
	result.json(newFriend);
})

