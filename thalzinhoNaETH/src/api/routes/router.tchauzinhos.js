import express from "express";
import controllerTchauzinhos from "../controllers/controller.tchauzinhos.js";


const sendStatus = express.Router();

sendStatus.post("/count", controllerTchauzinhos.countTchauzinhos);

export default sendStatus;
