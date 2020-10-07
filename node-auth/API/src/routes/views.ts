import { Router } from "express";
import { catchAsync, auth, guest } from "../middleware";

const router = Router();

router.get(
  "/",
  catchAsync(async (req, res) => {
    res.render("index");
  })
);
router.get(
  "/about",
  catchAsync(async (req, res) => {
    res.render("about");
  })
);
router.get(
  "/cart",
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
  catchAsync(async (req, res) => {
    res.render("contact-us");
  })
);

router.get(
  "/gallery",
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
  catchAsync(async (req, res) => {
    res.render("shop");
  })
);

router.get(
  "/wishlist",
  catchAsync(async (req, res) => {
    res.render("wishlist");
  })
);

export default router;
