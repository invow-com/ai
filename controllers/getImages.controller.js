import {midjourneyAPI, getResult} from "../lib/actions/gen/image.js";
import fs from 'fs';
import JSZip from 'jszip';
const getImages = async (imageType, phrase, imageText, imgAspect, imageQuality ) => {
  console.log(imageType, 'este es el img type')
  const randomImageType = Math.floor(Math.random() * imageType.length);
  console.log('este es el random image type', randomImageType)
  const prompt = `${imageType[randomImageType]} ${phrase} ${imageText} ${imgAspect} ${imageQuality}`
  console.log(prompt)
   try {
     const imageRequest = await midjourneyAPI.sendImageRequest(prompt);
     console.log('esto me da el imageRequest', imageRequest)
     const result = getResult(imageRequest.taskId, 1, createZip);
     console.log(result, 'este es el result');
    //  return result.imageUrl;
   } catch (err) {
     return err;
   }
 };
  export const createZip = async(images) => {
    //creacion de zip
    // const hardcodeImages = {
    //   imageUrl: 'https://images-ext-2.discordapp.net/external/LM_7cBmbZmlD1U1QIPNUP17dZ7ImrbYtHvKrYoFQ3Q4/https/cdn.midjourney.com/136a3fa4-bbf6-4242-baeb-096be2a6270d/0_0.png'
    // }
    // const zipFileName = 'imagenes.zip';
    // const zip = new JSZip();
    // console.log(images, 'images del createZip')
    // try {
    //   const response = hardcodeImages.imageUrl;
    //   const imageBuffer = await response.buffer();
  
    //   // Agregar la imagen al archivo ZIP con un nombre específico
    //   zip.file('imagen.png', imageBuffer);
  
    //   // Generar el contenido del archivo ZIP
    //   const zipContent = await zip.generateAsync({ type: 'nodebuffer' });
  
    //   // Guardar el archivo ZIP en el servidor
    //   fs.writeFileSync(zipFileName, zipContent);
  
    //   console.log('Archivo ZIP creado y guardado en el servidor.');
    // } catch (error) {
    //   console.error('Error al descargar y guardar el archivo ZIP:', error);
    // }
  }
 export default getImages;