import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(url)
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => {
      console.error('No fue posible conectarse a MongoDB');
      console.error(err);
    });
};

export default connectDB;
