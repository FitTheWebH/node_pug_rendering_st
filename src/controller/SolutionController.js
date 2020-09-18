const solutionWebsiteController = (req, res) => {
  res.render("website");
};

const solutionWasController = (req, res) => {
  res.render("Was");
};

const solutionErpController = (req, res) => {
  res.render("erp");
};

const solutionGroupwareController = (req, res) => {
  res.render("groupware");
};

const solutionShoppingmallController = (req, res) => {
  res.render("shoppingmall");
};

const solutionController = {
  solutionWebsiteController,
  solutionWasController,
  solutionErpController,
  solutionGroupwareController,
  solutionShoppingmallController,
};

export default solutionController;
