import mongoose from 'mongoose';
export const connectDB=async()=>{
  await mongoose.connect('name db').then(()=>console.log('db connected'))
}