import mongoose from 'mongoose';

let connection: typeof mongoose | null = null;

export async function connectDB() {
  if (connection) return connection;
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/';
  connection = await mongoose.connect(uri);
  return connection;
}
