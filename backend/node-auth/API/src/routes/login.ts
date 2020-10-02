import { Router } from "express";
import { logIn, logOut } from "../auth";
import { Unauthorized } from "../errors";
import { auth, catchAsync, guest } from "../middleware";
import { User } from "../models";
import { validate, loginSchema } from "../validation";

const router = Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.send(`<h3>Home</h3>`);
});

router.get("/login", (req, res) => {
  console.log(req.session);

  console.log(req.query);

  res.send(`
              <h3>Account Login</h3>
              <form method='post' action='/login'">
              <input type="email" name="email" placeholder="Enter Email"> </div>
              <input type="password" name="password" placeholder="Password"> </div>
              <button type="submit" class="btn hvr-hover">Login</button>
              </form>
         `);
});

router.post(
  "/login",
  guest,
  catchAsync(async (req, res) => {
    await validate(loginSchema, req.body);

    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || (await user.matchesPassword(password))) {
      throw new Unauthorized("Incorrect email or password");
    }
    logIn(req, user.id);
    res.json({ message: "ok" });
  })
);

router.post(
  "/logout",
  auth,
  catchAsync(async (req, res) => {
    await logOut(req, res);
    res.json({ message: "OK" });
  })
);

export default router;
