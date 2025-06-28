import jwt from "jsonwebtoken";
import { createError } from "../error.js";

export const verifyToken = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return next(createError(401, "You are not authenticated!"));
    }

    // 👇 YAHAN Token ko extract kar rahe ho
    const token = req.headers.authorization.split(" ")[1];

    // 👇 YAHI PAR log karo
    console.log("Auth Header:", req.headers.authorization);
    console.log("Extracted Token:", token);

    if (!token) return next(createError(401, "You are not authenticated!"));

    const decode = jwt.verify(token, process.env.JWT);
    req.user = decode;
    return next();
  } catch (err) {
    next(err);
  }
};
