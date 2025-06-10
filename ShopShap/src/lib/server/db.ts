import mongoose from "mongoose";
import { MONGO_URI } from "$env/static/private";
import { DB_NAME } from "$env/static/private";
export async function connectDB() {
	try {
		console.log("Connecting to MongoDB...");
		await mongoose.connect(MONGO_URI,{
			dbName: DB_NAME,
		});
		console.log("MongoDB connected successfully");
		
	} catch (err) {
		console.log("Error connecting to MongoDB",err);
	}
}