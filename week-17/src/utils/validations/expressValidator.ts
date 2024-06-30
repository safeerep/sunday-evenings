import { body } from "express-validator";

// here we will be validating and sanitizing the data getting in the body;
// validation: isAlphanumeric, isEmail, and isLength methods are used to validate the input data.
// sanitization: trim and escape methods are used to sanitize the input data by removing,
// leading/trailing whitespace and escaping special characters, respectively;

export const registerValidationRules = [
    body("username")
      .trim()
      .escape()
      .isAlphanumeric()
      .isLength({ min: 3, max: 30 })
      .withMessage(
        "username must be alphanumeric and between 3 to 30 characters long"
      ),

    body("email").trim().escape().isEmail().withMessage("email is not valid"),

    body("password")
      .trim()
      .escape()
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 characters long"),
];
