import Content from "../models/content.js";
import getPhrases from "./getPhrases.controller.js";
import getImages from "./getImages.controller.js";

const generateContent = async ({ phrases, images }) => {
  try {
    const { numberOfCuotes, industry, specificity } = phrases;
    const { imageType, imageText, imageAspect, imageQuality } = images;
    const generatedPhrases = phrases && await getPhrases(numberOfCuotes, industry, specificity);
    let listOfImages = [];
    generatedPhrases.map(async (phrase) => {
      const generatedImages = images && await getImages(imageType, phrase, imageText, imageAspect, imageQuality);
      console.log('generatedImages', generatedImages)
      listOfImages.push(generatedImages);
    });
    console.log(listOfImages, 'listOfImages');
    console.log(generatedPhrases, 'generatedPhrases');
    // return generatedPhrases;
  } catch (error) {
    console.log(error);
    return error;
  }
  // const { _doc: content } = await Content.create({ ownerId, tokens, content: generatedContent });
  // return generatedPhrases;
};

export default generateContent;
