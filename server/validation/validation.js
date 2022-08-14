const { check, validationResult } = require("express-validator");

exports.validate_last_name = [
  check("last_name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("User name can not be empty!"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({
        error: true,
        errors: errors.array(),
        message: errors
          .array()
          .map((a) => a.msg)
          .join(" "),
      });
    next();
  },
];
