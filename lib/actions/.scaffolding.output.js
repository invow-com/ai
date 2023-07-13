/**
 * @Dependencies
 */
const invow = require('../../index.js');
const inquirer = require('inquirer');
const spawn = require('child_process').spawn;

/**
 * @Run module
 */
const RUN = () => {

  /**
   * @Questions
   */
  const questions = [{
    type: 'input',
    name: 'message',
    message: "message:"
  }];

  /**
   * @Answers
   * @Command response
   */
  inquirer.prompt(questions)
    .then(
      answers => {
        let command = `echo`;
        spawn(
          command,
          [`${answers['message']}`],
          { stdio:'inherit' }
        )
        .on('close', function () {
          invow.say('Finished.');
        });
      });
}

exports.RUN = RUN;