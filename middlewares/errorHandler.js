function errorHandler(err, req, res, next) {
  let code;
  let msg;

  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
    case "SequelizeForeignKeyConstraintError":
    case "ValidationErrorItem":
      (code = 400), (msg = err.errors.map((el) => el));
      console.log(msg);
      break;
    case "notFound":
      code = 404;
      msg = "notFound";
      break;
    default:
      (code = 500), (msg = `internal server error`);
      break;
  }
  res.status(code).json({ message: msg });
}

module.exports = errorHandler;
