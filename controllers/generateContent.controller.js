import Content from "../models/content.js";
import getPhrases from "./getPhrases.controller.js";

const generateContent = async ({ phrases }) => {
  try {
    const { numberOfCuotes, industry, specificity } = phrases;
    const generatedPhrases = phrases && await getPhrases(numberOfCuotes, industry, specificity);
    const formattedData = generatedPhrases.split("\n\n").filter(Boolean);

    // Paso 2: Crear un array de objetos con autor y frase
    const quotesArray = formattedData
      .map((quote) => {
        // Paso 3: Extraer frase y autor usando expresiones regulares
        const match = quote.match(/"(.+)" - (.+)/);
        if (match) {
          const frase = match[1];
          const autor = match[2];
          return { autor, frase };
        }
        return null; // Por si hay citas que no sigan el formato esperado.
      })
      .filter(Boolean); // Filtrar elementos nulos.

    console.log(quotesArray);
    return quotesArray;
  } catch (error) {
    console.log(error);
    return error;
  }
  // const { _doc: content } = await Content.create({ ownerId, tokens, content: generatedContent });
  // return generatedPhrases;
};

export default generateContent;
