const supportOnlineapplyController = (req, res) => {
  res.render("onlineapply");
};
const supportRequestController = (req, res) => {
  res.render("request");
};
const supportDocumentsController = (req, res) => {
  res.render("documents");
};

const supportController = {
  supportOnlineapplyController,
  supportRequestController,
  supportDocumentsController,
};

export default supportController;
