const fs = require("fs");

function mergeValues(values, content) {
  // Iterate over the keys
  for (let key in values) {
    // Replace all {{key}} with the value from values object
    content = content.replace(`{{${key}}}`, values[key]);
  }
  //return merged content
  return content;
}

function view(templateName, values, response) {
  // Read from template files in views folder
  let fileContents = fs.readFileSync(`./views/${templateName}.html`, {
    encoding: "utf8"
  });
  // Insert values into the content
  fileContents = mergeValues(values, fileContents);
  // Write out to the response
  response.write(fileContents);
}

module.exports.view = view;
