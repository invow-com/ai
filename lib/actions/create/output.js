/**
 * @Dependencies
 */
const invow = require("../../index.js");
const config = require("../../../invow.json");
const inquirer = require("inquirer");
const path = require("path");
const appDir = path.dirname(__dirname + "../");

/**
 * @Run module
 * @Param action
 */
const RUN = (action) => {
  /**
   * @Questions
   */
  const questions = [
    {
      type: "input",
      name: "output",
      message: "Output name:",
    },
    {
      type: "list",
      name: "action",
      message: "For wich action?",
      choices: [],
    },
  ];
  config.actions.forEach((item) => {
    questions[1].choices.push(item.action);
  });

  /**
   * @Answers
   * @Command response
   */
  inquirer.prompt(questions).then((answers) => {
    const fs = require("fs");
    // destination.txt will be created or overwritten by default.
    fs.copyFile(
      `${appDir}/.scaffolding.output.js`,
      `${appDir}/${answers["action"]}/${answers["output"]}.js`,
      (err) => {
        if (err) throw err;
        invow.say(
          `Output invow ${answers["action"]} ${answers["output"]} was created.`
        );
      }
    );
  });
};

exports.RUN = RUN;
