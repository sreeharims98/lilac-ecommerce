import { userModel } from "../models/userModel.js";

export const createUser = async (req, res) => {
  try {
    const { displayName, email, photoURL, uid } = req.body;
    //check all fields
    if (!displayName || !email || !photoURL || !uid) {
      res.status(400);
      throw new Error("Please add all fields");
    }
    //check if user already exists
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      res.status(400);
      throw new Error("This user already exists");
    }

    const user = await userModel.create({
      displayName,
      email,
      photoURL,
      uid,
    });

    if (user) {
      res.status(201).json(user);
    } else {
      res.status(400);
      throw new Error("Invalid user data");
    }
  } catch (error) {
    res.status(400).json({ message: error.message || "user not found !" });
  }
};
