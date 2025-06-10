import mongoose from "mongoose";
import { MONGO_URI } from "$env/static/private";

export async function connectDB() {
	try {
		return await mongoose.connect(MONGO_URI);
		console.log("Connected to MongoDB");
	} catch (err) {
		console.log("Error connecting to MongoDB",err);
	}
}