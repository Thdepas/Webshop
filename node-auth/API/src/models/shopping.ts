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

const carrots = new Product({
  imagePath: '"http://localhost:3000/static/images/img-pro-01.jpg"',
  title: "Carrots",
  description: "Lorem ipsum dolor sit amet",
  price: 9.79,
});

const tomatoes = new Product({
  imagePath: '"http://localhost:3000/static/images/img-pro-02.jpg"',
  title: "Tomatoes",
  description: "Lorem ipsum dolor sit amet",
  price: 9.79,
});

const grapes = new Product({
  imagePath: '"http://localhost:3000/static/images/img-pro-03.jpg"',
  title: "Grapes",
  description: "Lorem ipsum dolor sit amet",
  price: 9.79,
});

const router = Router();

router.post(
  "/cart",
  catchAsync(async (req, res) => {
    await carrots
      .save()
      .then((item) => {
        res.send("item saved to database");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  })
);

router.post(
  "/cart",
  catchAsync(async (req, res) => {
    await tomatoes
      .save()
      .then((item) => {
        res.send("item saved to database");
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
      });
  })
);

router.post(
  "/cart",
  catchAsync(async (req, res) => {
    await grapes
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
