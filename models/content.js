import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
	ownerId: {
		type: ObjectId,
		required: true,
	},
	tokens: {
		type: Number,
		required: true,
	},
	content: {
		type: String,
	}
});

const Content = mongoose.model("Content", contentSchema);

export default Content;