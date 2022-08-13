const { check } = require("express-validator");

exports.validate_last_name = [check("last_name").trim().escape()];
