import mongoose from 'mongoose';

export const conectarDB = async () => {
  try {
    // Add the options object as the second argument
    await mongoose.connect(process.env.MONGO_URI, {
      family: 4 
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};