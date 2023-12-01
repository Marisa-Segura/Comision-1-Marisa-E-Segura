import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
    unique: true,
    trim: true,
    minlength: [3, 10],
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  avatarUrl: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
      next();
  });
  
export const UserModel = model('User', UserSchema);
