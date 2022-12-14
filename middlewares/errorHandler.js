function errorHandler(err, req, res, next) {
    let code
    let msg

    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
        case "SequelizeForeignKeyConstraintError":
        case "ValidationErrorItem":
            code = 400,
            message = err.errors.map(el => el)
            break;
        default:
            code = 500,
            msg = `internal server error`
            break;
    }
    res.status(code).json({message: msg})
}

module.exports = errorHandler