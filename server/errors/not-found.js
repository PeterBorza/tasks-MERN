import { NOT_FOUND } from "../constants/http.js";
import { CustomAPIError } from "./custom-error.js";

class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message), (this.statusCode = NOT_FOUND);
  }
}

export { NotFoundError };
