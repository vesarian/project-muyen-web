function errorHandler(err, req, res, next) {
    let code
    let msg

    switch (err.name) {
        case value:
            
            break;
    
        default:
            code = 500,
            msg = `internal server error`
            break;
    }
    res.status(code).json({message: msg})
}

module.exports = errorHandler