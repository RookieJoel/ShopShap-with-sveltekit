import mongoose from "mongoose";

const User_Schema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	name: { type: String, required: true }
});

export const User = mongoose.models.User || mongoose.model("User", User_Schema);