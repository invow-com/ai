// Imports
import axios from "axios";

// API key
const API_KEY = process.env.FLIKI_API_KEY; // Get your API key here: https://app.fliki.ai/account/api
// API URL
const API_URL = "https://api.fliki.ai/v1";

//spanish: 61b8b2ff4268666c126bac15
//english: 61b8b2f54268666c126babc9
//cuban: 61b8b3074268666c126bac4f
//us: 61b8b31c4268666c126bace7
//English US Sara: 61b8b45a4268666c126bb32b

// call api
async function api({ method, endpoint, params = null }) {
  try {
    const request = {
      method,
      url: `${API_URL}${endpoint}`,
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
    };
    if (params) {
      request.data = params;
    }
    const { data } = await axios(request);

    return data ? data.data : null;
  } catch (error) {
    console.log(error);
  }

  return null;
}

(async () => {
  // Get languages
  if (false) {
    const languages = await api({
      method: "get",
      endpoint: "/languages",
    });
    console.log("languages", languages);
  }

  // Get dialects
  if (false) {
    const dialects = await api({
      method: "get",
      endpoint: "/dialects",
    });
    console.log("dialects", dialects);
  }

  // Get voices
  if (false) {
    const voices = await api({
      method: "post",
      endpoint: "/voices",
      params: {
        languageId: "61b8b2ff4268666c126bac15",
        dialectId: "61b8b3074268666c126bac4f",
      },
    });
    console.log("voices", voices);
  }

  // Generate
  if (true) {
    const voiceId = "61b8b45a4268666c126bb32b";

    const generate = await api({
      method: "post",
      endpoint: "/generate",
      params: {
        format: "video",
        duration: 10,
        scenes: [
          {
            content:
              "Images of people excited and embarking on various adventures",
            voiceId,
           
          },
        ],
        settings: {
          aspectRatio: "square",
          // subtitle: {
          //   fontColor: "yellow",
          //   backgroundColor: "black",
          //   placement: "bottom",
          //   display: "phrase",
          // },
        },

        //backgroundMusicKeywords: "exciting, adventures",
      },
    });

    console.log("generate", generate);

    // next step: use checkStatus(generate.id) for the download link
  }

  // Generate status
  if (true) {
    const checkStatus = async (id) => {
      const status = await api({
        method: "post",
        endpoint: "/generate/status",
        params: { id },
      });

      console.log("status", status);

      if (status && status.status === "processing") {
        await sleep(5);

        return await checkStatus(id);
      }

      return status;
    };

    const sleep = (seconds) => {
      return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
    };

    const id = "64c3e61d10c5713d147c0514";
    await checkStatus(id);
  }

  // Generate text-to-speech
  if (false) {
    const audio = await api({
      method: "post",
      endpoint: `/generate/text-to-speech`,
      params: {
        content: "I would like to have a date with Daniel Arevalo.",
        voiceId: "61b8b45a4268666c126bb32b", // English, United States, Sara
      },
    });

    console.log("audio", audio);
  }

  // Generate text-to-image
  if (false) {
    const image = await api({
      method: "post",
      endpoint: `/generate/text-to-image`,
      params: {
        content:
          "A close up, studio photographic portrait of a white siamese cat that looks curious",
      },
    });

    console.log("image", image);
  }
})();
