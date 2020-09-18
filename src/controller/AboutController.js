const aboutCompanyController = (req, res) => {
  res.render("company");
};

const aboutProductController = (req, res) => {
  res.render("product");
};

const aboutCometowayController = (req, res) => {
  res.render("cometoway");
};

const aboutController = {
  aboutCompanyController,
  aboutProductController,
  aboutCometowayController,
};
export default aboutController;
