// should include two routes:
// GET Route to /survey which should display the survey page.
// default, catch-all route that leads to home.html which displays the home page

app.get("/survey", function(request, result) {
	result.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/", function(request, result) {
	result.sendFile(path.join(__dirname, "home.html"));
});