
import chatbot from "../lib/actions/gen/chatbot.js";
const getPhrases = async (numberOfCuotes, industry, specificity) => {
  const prompt = `dame ${numberOfCuotes} frases random de distintos autores, con autor incluido . el rubro de mi empresa es ${industry}. ${specificity}`
   try {
     const phrasesResponse = await chatbot(prompt);
     return phrasesResponse;
   } catch (err) {
     return err;
   }
 };

 export default getPhrases;