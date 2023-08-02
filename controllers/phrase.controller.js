import Phrases from "../models/phrases.js";

const createPhrase = async ({companyName, numberOfCuotes, industry, specificity}) => {
  try {
    const { _doc: phrase } = await Phrases.create({companyName, numberOfCuotes, industry, specificity});
    return phrase;
  } catch (err) {
    return err;
  }
};

export default createPhrase;
