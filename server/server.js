import "express-async-errors";

import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import { notFound } from "./middleware/not-found.js";
import { errorHandlerMiddleware } from "./middleware/error-handler.js";
import path from "path";
import mongoSanitize from "express-mongo-sanitize";
import YAML from "yamljs";
import swaggerUi from "swagger-ui-express";

import { healthCheck } from "./controllers/healthCheck.js";
import tasks from "./routes/tasks.js";
import shoppingItems from "./routes/shoppingItems.js";
import { APP_ORIGIN, NODE_ENV, PORT, PROD_URL } from "./constants/env.js";

const app = express();
const swaggerDocument = YAML.load("./swagger.yaml");

const corsOptions = {
  origin: [APP_ORIGIN, PROD_URL],
};

app.use(cors(corsOptions));

app.get("/health", healthCheck);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const __dirname = path.resolve();

app.use(express.json());
// app.set("proxy", 1);
app.use(mongoSanitize());

app.use("/api/tasks", tasks);
app.use("/api/shopping", shoppingItems);

if (NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));

  app.get("*", (_req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "dist", "index.html"));
  });
}

app.use(notFound);
app.use(errorHandlerMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}...`);
  try {
    console.log("Connecting to DB");
    await connectDB();
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB: ", error);
  }
});
