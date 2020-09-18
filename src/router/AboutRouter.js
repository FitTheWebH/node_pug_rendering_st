import express from "express";
import aboutController from "../controller/AboutController";

const aboutRouter = express.Router();

aboutRouter.get("/Company", aboutController.aboutCompanyController);
aboutRouter.get("/Product", aboutController.aboutProductController);
aboutRouter.get("/Cometoway", aboutController.aboutCometowayController);

export default aboutRouter;
