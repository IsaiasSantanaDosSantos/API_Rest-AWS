import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();

import "./database";
import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";
import express from "express";

import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import fotoRoutes from "./routes/fotoRoutes";

const whitwList = [
  "https://isaiassantana.com.br",
  "http://localhost:3000",
  "http://localhost:3001",
  "https://consume-api-ivory.vercel.app/",
];

const corsOptions = {
  origin: function (origin, callBack) {
    if (whitwList.indexOf(origin) !== -1 || !origin) {
      callBack(null, true);
    } else {
      callBack(new Error("Note alliwed by CORS"));
    }
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet({ crossOriginEmbedderPolicy: false }));
    this.app.use(delay(2000));
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      "/images/",
      express.static(resolve(__dirname, "..", "uploads", "images"))
    );
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users", userRoutes);
    this.app.use("/tokens", tokenRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/fotos", fotoRoutes);
  }
}

export default new App().app;

//Test commit four (07/04/23 17h54m!!!
