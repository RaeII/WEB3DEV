import { Router } from "express";
import sendStatus from "./router.tchauzinhos.js";

const apiRouter = Router();

apiRouter.use("/tchauzinhos", sendStatus);

export default apiRouter;