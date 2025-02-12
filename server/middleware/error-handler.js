import { CustomAPIError } from "../errors/custom-error.js";

const errorHandlerMiddleware = (err, _req, res, _next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }

  return res.status(500).json({
    message: "Something went wrong, please  try again later",
  });
};

export { errorHandlerMiddleware };
