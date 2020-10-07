import { Schema, model } from "mongoose";
import { catchAsync, guest } from "../middleware";
import { Router } from "express";

const productSchema = new Schema({
  imagePath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export const Product = model("Product", productSchema);

const product = new Product({
  imagePath: '"http://localhost:3000/static/images/img-pro-01.jpg"',
  title: "Carrots",
  description: "Lorem ipsum dolor sit amet",
  price: 9.79,
});

const router = Router();

router.post(
  "/shop",
  catchAsync(async (req, res) => {
    await product
      .save()
      .then((item) => {
        res.send("item saved to database");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  })
);

export default router;
