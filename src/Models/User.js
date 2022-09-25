import mongoose from 'mongoose';

export const User = mongoose.model('User', {
   firstName: String,
   secondName: String,
   birthDate: Number,
   email: String,
   isAdmin: Boolean
});