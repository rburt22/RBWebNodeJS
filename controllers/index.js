exports.index = function (req, res, next) {
  res.render("index", {
    titleH: "Russell Burts Nodejs WebSite Express 20200416",
    titleC: "Content under construction",
  });
};
