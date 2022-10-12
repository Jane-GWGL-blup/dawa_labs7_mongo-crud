import { Router } from "express";
import * as Controller from "./controller";

const StudentRouter = Router();

StudentRouter.route("/").get(Controller.findAll);
StudentRouter.route("/").post(Controller.create);
StudentRouter.route("/:id").put(Controller.updateOne);
StudentRouter.route("/:id").delete(Controller.remove);

export default StudentRouter;