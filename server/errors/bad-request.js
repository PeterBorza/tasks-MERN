import { BAD_REQUEST } from "../constants/http.js";
import { CustomAPIError } from "./custom-error.js";

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message), (this.statusCode = BAD_REQUEST);
  }
}

export { BadRequestError };
