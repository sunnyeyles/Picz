import express, { Request, Response, NextFunction } from 'express'
import { validationResult, body } from 'express-validator'
import morgan from 'morgan'
const app = express()

// app.get("/", (res: Response) => {
//   console.log("Hello from express");
//   res.status(200);
//   res.json({ message: "hello" });
// });
// const customLogger =
//   (message: string) => (req: Request, res: Response, next: NextFunction) => {
//     console.log(message);
//     next();
//   };

export const handleInputErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400)
    res.json({ errors: errors.array() })
  } else {
    next()
  }
}
