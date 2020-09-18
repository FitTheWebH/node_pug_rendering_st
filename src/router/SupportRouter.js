import express from "express";
import supportController from "../controller/SupportController";

const supportRouter = express.Router();

supportRouter.get(
  "/Onlineapply",
  supportController.supportOnlineapplyController
);
supportRouter.get("/Request", supportController.supportRequestController);
supportRouter.get("/Documents", supportController.supportDocumentsController);

export default supportRouter;
