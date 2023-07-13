// ./lib/index.js
const colors = require("./colors");

/**
 * Displays a string in the console
 *
 * @param {string_to_say} String string to show in the console
 */
const say = (string_to_say) => {
  return console.log(colors.get.FgMagenta, string_to_say);
};

const run = (action, output) => {
  const outputs = `${__dirname}/actions/${action}/`;
  const fs = require("fs");
  fs.readdir(outputs, (err, files) => {
    files.forEach((file) => {
      dependency = file.replace(".js", "");
      if (dependency === output) {
        let output = require(`./actions/${action}/${dependency}`);
        output.RUN(action);
      }
    });
  });
};

exports.say = say;
exports.run = run;
