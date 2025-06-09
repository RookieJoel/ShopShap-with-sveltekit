import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || '';

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;
  await mongoose.connect(MONGO_URI);
}

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
