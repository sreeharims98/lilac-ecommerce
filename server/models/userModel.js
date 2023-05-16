import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    photoURL: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("User", userSchema);
