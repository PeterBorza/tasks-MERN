import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import path from "path";

import tasks from "./routes/tasks.js";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env.js";

const app = express();

const corsOptions = {
  origin: [APP_ORIGIN],
};

app.use(cors(corsOptions));

const __dirname = path.resolve();

app.use(express.json());

app.use("/api/tasks", tasks);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/dist")));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}...`);
  await connectDB();
});
