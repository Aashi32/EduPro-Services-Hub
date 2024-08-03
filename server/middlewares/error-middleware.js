const errorMiddleware = (err, req, res, next)=>{
    const status = err.status || 500;
    const message = err.message ||"Backened Error";
    const extraDetails = err.extraDetails || "Error from Backened";

    return res.status(status).json ({message,extraDetails});
};

module.exports = errorMiddleware;