import { Router } from "express";
import { catchAsync, auth, guest } from "../middleware";

const router = Router();

router.get(
  "/",
  guest,
  catchAsync(async (req, res) => {
    res.render("index");
  })
);

router.get(
  "/about",
  guest,
  catchAsync(async (req, res) => {
    res.render("about");
  })
);

router.get(
  "/cart",
  guest,
  catchAsync(async (req, res) => {
    res.render("cart");
  })
);

router.get(
  "/checkout",
  auth,
  catchAsync(async (req, res) => {
    res.render("checkout");
  })
);

router.get(
  "/contact-us",
  guest,
  catchAsync(async (req, res) => {
    res.render("contact-us");
  })
);

router.get(
  "/gallery",
  guest,
  catchAsync(async (req, res) => {
    res.render("gallery");
  })
);

router.get(
  "/my-account",
  auth,
  catchAsync(async (req, res) => {
    res.render("my-account");
  })
);

router.get(
  "/shop-detail",
  auth,
  catchAsync(async (req, res) => {
    res.render("shop-detail");
  })
);

router.get(
  "/shop",
  guest,
  catchAsync(async (req, res) => {
    res.render("shop");
  })
);

router.get(
  "/wishlist",
  auth,
  catchAsync(async (req, res) => {
    res.render("wishlist");
  })
);

export default router;
