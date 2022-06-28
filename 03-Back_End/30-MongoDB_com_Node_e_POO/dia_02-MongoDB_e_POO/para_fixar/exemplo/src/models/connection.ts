import mongoose from 'mongoose';

const connectToDatabase = (
  mongoDataBaseURI = process.env.MONGO_URI
    || 'mongodb://localhost:27017/GlassesTrybe?authSource=admin',
) => mongoose.connect(mongoDataBaseURI);

export default connectToDatabase;