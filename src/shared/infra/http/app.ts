import "reflect-metadata";

import express from "express";
import "express-async-errors";

import swaggerUi from "swagger-ui-express";

import "@shared/container";

import swaggerFile from "../../../swagger.json";

// import { AppError } from "@shared/errors/AppError";
import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

export { app };
