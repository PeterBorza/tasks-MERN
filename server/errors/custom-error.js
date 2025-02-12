class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message), (this.statusCode = statusCode);
  }
}

const createCustomError = (msg, statusCode) => {
  throw new CustomAPIError(msg, statusCode);
};

export { createCustomError, CustomAPIError };
