const Profile = require("./profile.js");
const render = require("./render.js");

const commonHeaders = { "Content-Type": "text/plain" };
// 2. Handle HTTP route Get / and POST/ i.e Home

function home(request, response) {
  if (request.url === "/") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    render.view("header", {}, response);
    render.view("search", {}, response);
    render.view("footer", {}, response);
    response.end();
  }
}

// 3. Handle HTTP route GET /:username i.e / codyreed3

function user(request, response) {
  const username = request.url.replace("/", "");
  if (username.length > 0) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    render.view("header", {}, response);

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
        javaScriptPoints: profileJSON.points.JavaScript
      };
      // Simple response
      render.view("profile", values, response);
      render.view("footer", {}, response);
      response.end();
    });

    // on error
    studentProfile.on("error", error => {
      // show error
      render.view("error", { errorMessage: error.message }, response);
      render.view("search", {}, response);
      render.view("footer", {}, response);
      response.end();
    });
  }
}

module.exports.home = home;
module.exports.user = user;
