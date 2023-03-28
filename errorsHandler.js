exports.handle400Errors = (err, req, res, next) => {
  if (err.code === "22P02") {
    res.status(400).send({ msg: "400: bad request" });
  } else {
    next(err);
  }
};

exports.handleOtherErrors = (err, req, res, next) => {
  res.status(404).send({ msg: "not found" });
};
