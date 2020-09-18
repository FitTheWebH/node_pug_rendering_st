import express from "express";
import solutionController from "../controller/SolutionController";

const solutionRouter = express.Router();

solutionRouter.get("/Website", solutionController.solutionWebsiteController);
solutionRouter.get("/Was", solutionController.solutionWasController);
solutionRouter.get("/Erp", solutionController.solutionErpController);
solutionRouter.get(
  "/Groupware",
  solutionController.solutionGroupwareController
);
solutionRouter.get(
  "/Shoppingmall",
  solutionController.solutionShoppingmallController
);

export default solutionRouter;
