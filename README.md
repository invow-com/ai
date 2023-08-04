# Invow.AI

Invow is a command-line tool that facilitates the generation and manipulation of content using AI. Originally conceived in 2019, was initially designed to generate base applications and boilerplates to quickly create prototypes, POCs, and MVPs. At that time, it was challenging to find comprehensive application generators that worked correctly without deprecated dependencies.

Since then, Invow has evolved, incorporating the power of AI into its operations. We have partnered with OpenAI and Midjourney, and we continue to explore additional AI integrations. Our perspective has shifted towards enabling developers to efficiently generate a wide range of content.

For historical reference, the old repository can be found [here](https://bitbucket.org/invow/io/src/master/).

Learn more about us at our [website](http://invow.com) and our [blog](http://invow.blog).

## Installation

You can install Invow globally with npm:

`npm install -g invow`

## Environment Variables Setup

To set environment variables in a globally installed npm package, you should create an `.env` file at your project root. Then, you can add the necessary environment variables for Invow.

To set up Invow, you will need the following environment variables:

- `SENDGRID_KEY`: Your SendGrid API key.
- `SENDGRID_MAIL`: Your SendGrid email.
- `OPENAI_ENDPOINT`: Your OpenAI endpoint.
- `OPENAI_KEY`: Your OpenAI API key.
- `OPENAI_TOKENS_LIMIT`: The limit of tokens for OpenAI.
- `ARTICLE_TITLE_PROMPT`: Your prompt to generate the title of the article
- `ARTICLE_CONTENT_PROMPT`: Your prompt to generate the content of the article
- `MIDJOURNEY_BASE`: Your Midjourney base URL.
- `MIDJOURNEY_KEY`: Your Midjourney API key.
- `MIDJOURNEY_PROMPT`: Your Midjourney prompt.
- `FLIKI_API_KEY`: Your Fliki API key.

## Usage

Invow can be used with several different commands, which are detailed below:

### Actions

Actions are the first parameter you send when executing an `invow` command from the console. They are verbs that denote the action of the instruction.

### Outputs

Outputs, previously called behaviors, are the second parameter you send when executing an `invow` command from the console. After clarifying the action, you indicate the output of the action.

## Commands

Invow can be used with several different commands, which are detailed below:

`invow gen article`

Generates a blog article. The gen action refers to the operation of generating something, and the article output specifies that what you want to generate is a blog article.

`invow gen image`

Generates an image. The gen action refers to the operation of generating something, and the image output specifies that what you want to generate is an image.

`invow create output`

Creates a new output. The create action refers to the operation of creating something, and the output specifies that what you want to create is a new output.

## Fliki local
Follow these steps to set up Fliki and generate a video using the Invow tool:

run the following command in the terminal:
1. Install:
npm i -g ./

2. Configure Environment Variables:
Export each of the following environment variables in the terminal, replacing the values as needed:
example: 
Export MIDJOURNEY_PROMPT="high texture quality portrait of a young woman with freckles and crystal blue eyes with wreath in her hair, 4k"

3. Generate an ID with Fliki:
Navigate to the directory containing the Fliki file using the terminal:
lib/integrations
Then, run the following command to obtain an ID from Fliki:
node fliki

4. Update the Status in Generate:
Replace el id del status with the id generated previously and turn off the other booleanas and set the booleana of status to true in the file fliki.js.

5. Generate the Video with Invow:
invow gen video
## Support

If you need help with Invow, you can contact us at **[contact@invow.com](mailto:contact@invow.com)**.
