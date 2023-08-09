import axios from "axios";

export const midjourneyAPI = {
  sendImageRequest: async (prompt) => {
    console.log("Sending image request...");
    try {
      const response = await axios.post(
        `${process.env.MIDJOURNEY_BASE}imagine`,
        {
          prompt: prompt,
        },
        {
          headers: {
            Authorization: process.env.MIDJOURNEY_KEY,
          },
        }
      );
      console.log("Image request successfully sent!");
      return response.data;
    } catch (error) {
      console.error("Error when sending the image request:", error);
    }
  },
};

export const getResult = (taskId, position, callback) => {
  console.log("Retrieving result...");
  const data = JSON.stringify({
    taskId,
    position,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${process.env.MIDJOURNEY_BASE}result`,
    headers: {
      Authorization: process.env.MIDJOURNEY_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };
  makeRequest(config, callback);
};
const makeRequest = async (config, callback) => {
  try {
    const response = await axios.request(config);
    console.log(response.data, "response data");
    if (response?.data?.imageURL) {
      callback && callback(response.data.imageURL);
    } else {
      setTimeout(() => {
        makeRequest(config, callback);
      }, 15000);
    }
  } catch (error) {
    console.log("Error when retrieving the result:", error);
  }
};
const RUN = () => {
  const questions = [
    {
      type: "list",
      name: "sure",
      message: "Are you sure?",
      choices: ["Yes", "No"],
    },
  ];

  _prompt(questions).then((answers) => {
    switch (answers["sure"]) {
      case questions[0].choices[0]:
        const prompt = process.env.MIDJOURNEY_PROMPT;
        console.log("Starting process...");
        console.log("Prompt: ", prompt);
        midjourneyAPI
          .sendImageRequest(prompt)
          .then((response) => {
            console.log(
              "Task ID received, waiting 90 seconds before retrieving the result..."
            );
            setTimeout(() => getResult(response.taskId, 1), 90000);
          })
          .catch((error) => {
            console.error("An error occurred:", error);
          });
        break;
    }
  });
};

const _RUN = RUN;
export { _RUN as RUN };
