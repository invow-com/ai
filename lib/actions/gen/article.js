/**
 * @Dependencies
 */
const inquirer = require("inquirer");
const chatbot = require("./chatbot");

const generate = async () => {
  const titlePrompt = process.env.ARTICLE_TITLE_PROMPT;
  const title = await chatbot(titlePrompt);

  const contentPrompt = process.env.ARTICLE_CONTENT_PROMPT + title;
  const content = await chatbot(contentPrompt);

  const article = `# ${title}\n\n${content}`;

  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs

  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_KEY);
  const msg = {
    to: process.env.SENDGRID_MAIL, // Change to your recipient
    from: process.env.SENDGRID_MAIL, // Change to your verified sender
    subject: "Generated blog article: " + title,
    text: article,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log(`Email sent to: ${process.env.SENDGRID_MAIL}`);
    })
    .catch((error) => {
      console.error(error);
    });
};

/**
 * @Run module
 */
const RUN = () => {
  /**
   * @Questions
   */
  const questions = [
    {
      type: "list",
      name: "output",
      message: "Which output?",
      choices: ["email"],
    },
  ];

  /**
   * @Answers
   * @Command response
   */
  inquirer.prompt(questions).then((answers) => {
    switch (answers["output"]) {
      case questions[0].choices[0]:
        generate();
        break;
    }
  });
};

exports.RUN = RUN;
