import mongoose from "mongoose";
import express from "express";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";
import {
  REDIS_OPTION,
  SESSION_OPTIONS,
  APP_PORT,
  MONGO_URI,
  MONGO_OPTIONS,
} from "./config";

(async () => {
  await mongoose.connect(MONGO_URI, MONGO_OPTIONS);

  const RedisStore = connectRedis(session);

  const client = new Redis(REDIS_OPTION);

  const app = express();

  app.use(
    session({
      ...SESSION_OPTIONS,
      store: new RedisStore({ client }),
    })
  );

  app.get("/", (req, res) => res.json({ message: "Works" }));

  app.listen(APP_PORT, () => console.log(`http://localhost:${APP_PORT}`));
})();