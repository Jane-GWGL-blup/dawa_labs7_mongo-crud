import { Router } from "express";
import * as Controller from "./controller";

const StudentRouter = Router();

StudentRouter.route("/").get(Controller.findAll);
StudentRouter.route("/").post(Controller.create);

export default StudentRouter;