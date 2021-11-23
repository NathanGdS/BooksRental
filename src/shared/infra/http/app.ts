import "reflect-metadata";

import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";

//import "@shared/container";

import { AppError } from "@shared/errors/AppError";
// import createConnection from "@shared/infra/typeorm";

import { router } from "./routes";

// createConnection();
const app = express();

app.use(express.json());

app.use(router);

export { app };
