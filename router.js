const Profile = require("./profile.js");
// 2. Handle HTTP route Get / and POST/ i.e Home

function home(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");
    response.write("Search\n");
    response.end("Footer\n");
  }
}

// 3. Handle HTTP route GET /:username i.e / codyreed3

function user(request, response) {
  const username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Header\n");

    // get json from Treehouse
    const studentProfile = new Profile(username);
    // on end
    studentProfile.on("end", profileJSON => {
      // show profile

      // Store the values which we need
      const values = {
        avatarUrl: profileJSON.gravatar_url,
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      // Simple response
      response.write(`${values.username} has ${values.badges} badges\n`);
      response.end("Footer\n");
    });

    // on error
    studentProfile.on("error", error => {
      // show error
      response.write(`${error.message}\n`);
      response.end("Footer\n");
    });
  }
}

module.exports.home = home;
module.exports.user = user;
