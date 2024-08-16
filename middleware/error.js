const errorHandler = (err, req, res, next) => {
  const statusCode = err.status || 500; // Default to 500 if no status is set
  res
    .status(statusCode)
    .json({ message: err.message || "Internal Server Error" });
};

export default errorHandler;
