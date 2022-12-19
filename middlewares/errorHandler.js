function errorHandler(err, req, res, next) {
    // let code;
    // let msg;

    // switch (err.name) {
    //     case "SequelizeValidationError":
    //     case "SequelizeUniqueConstraintError":
    //     case "SequelizeForeignKeyConstraintError":
    //     case "ValidationErrorItem":
    //         (code = 400), (message = err.errors.map((el) => el));
    //         break;
    //     default:
    //         (code = 500), (msg = `internal server error`);
    //         break;
    // }
    // res.status(code).json({ message: msg });
    let code = 500;
    let message = "Internal Server Error";
    if (
        err.name === "SequelizeValidationError" ||
        err.name === "SequelizeUniqueConstraintError"
    ) {
        code = 400;
        message = err.errors[0].message;
    } else if (err.name === "SequelizeDatabaseError") {
        code = 404;
        message = "Data Not Found";
    } else if (err.code) {
        code = err.code;
        message = err.msg;
    }
    res.status(code).json({
        message,
    });
}


module.exports = errorHandler;
