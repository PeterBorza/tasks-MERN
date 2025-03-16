class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message), (this.statusCode = statusCode);
  }
}

const createCustomError = (message, statusCode) => {
  throw new CustomAPIError(message, statusCode);
};

export { createCustomError, CustomAPIError };
