import { NextFunction } from "express";
import { isLoggedIn } from "../auth";

export const guest = (req: Request, res: Response, next: NextFunction) => {
  if (isLoggedIn(req)) {
    return next(new Error("you are already logged in"));
  }
  next();
};
