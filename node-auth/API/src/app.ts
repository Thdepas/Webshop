import express from "express";
import session, { Store } from "express-session";
import { SESSION_OPTIONS } from "./config";
import { ServerError, notFound } from "./middleware/errors";
import { login, register } from "./routes";

export const createApp = (store: Store) => {
  const app = express();
  app.use(express.json());

  app.use(
    session({
      ...SESSION_OPTIONS,
      store,
    })
  );

  app.use(login);

  app.use(register);

  app.use(notFound);

  app.use(ServerError);

  return app;
};
