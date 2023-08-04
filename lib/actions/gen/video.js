const axios = require("axios");
const inquirer = require("inquirer");

const RUN = () => {
  const questions = [
    {
      type: "list",
      name: "sure",
      message: "Are you sure?",
      choices: ["Yes", "No"],
    },
  ];

  inquirer.prompt(questions).then((answers) => {
    switch (answers["sure"]) {
      case questions[0].choices[0]:
        console.log("Starting process...");
        require("../../integrations/fliki");
        break;
    }
  });
};

exports.RUN = RUN;
