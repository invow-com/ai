import mongoose from "mongoose";

const phrasesSchema = new mongoose.Schema({
  companyName: {
		type: String,
	},
  numberOfCuotes: {
		type: Number,
	},
  industry: {
		type: String,
	},
  specificity: {
		type: String,
	},
});

const Phrases = mongoose.model("Phrases", phrasesSchema);

export default Phrases;