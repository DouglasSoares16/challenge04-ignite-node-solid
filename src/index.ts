import express, { Request, Response, NextFunction } from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({ error: err.message });
    }

    return response.status(500).json({
      status: "Error",
      message: "Internal Server Error",
    });
  }
);

export { app };
