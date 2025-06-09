import mongoose from "mongoose";
import { MONGO_URI } from "$env/static/private";

export async function connectDB() {
	try {
		return await mongoose.connect(MONGO_URI);
	} catch (err) {
		console.log(err);
	}
}