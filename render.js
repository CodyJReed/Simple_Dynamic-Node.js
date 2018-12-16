const fs = require("fs");

function view(templateName, values, response) {
  // Read from template files in views folder
  const fileContents = fs.readFileSync(`./views/${templateName}.html`);
  // Insert values into the content
  // Write out to the response
  response.write(fileContents);
}

module.exports.view = view;
