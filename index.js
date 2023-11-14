import dotenv from "dotenv";
import express from "express";
import cors from 'cors'
import router from "./src/routes/index.js";
import DBConnection from './src/config/DBConfig.js'
import { errorHandler } from "./src/middleware/errorMiddleware.js";

dotenv.config();

const server = express();

DBConnection();

server.use(express.json())
server.use(cors({
  origin: '*'
}));
// server.use(cookieParser());
server.use("/api", router);
server.use(errorHandler)

server.listen(process.env.PORT, () => {
  console.log("... Server is started ...");
});

process
  .on('unhandledRejection', (reason, p) => {
    console.error(reason, 'Unhandled Rejection at Promise', p);
  })
