
import chatbot from "../lib/actions/gen/chatbot.js";
import fs from 'fs';
const getPhrases = async (numberOfCuotes, industry, specificity) => {
  const prompt = `dame ${numberOfCuotes} frases random en español de distintos autores, con autor incluido . el rubro de mi empresa es ${industry}. ${specificity}`
  const phrasesResponse = await chatbot(prompt);
  const phrase = phrasesResponse.split("\n\n").filter(Boolean);
  fs.writeFileSync('frases.txt', phrase.join('\n'));
  return phrase;
 };

 export default getPhrases;