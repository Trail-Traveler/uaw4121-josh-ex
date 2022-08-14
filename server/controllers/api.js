const { db } = require("../util/database");
exports.getEmployees = (req, res) => {
  const last_name = req.body.last_name;
  // db.any("select * from employees.employee limit 10000")
  db.any(
    "SELECT id, birth_date, first_name, last_name, gender, hire_date FROM employees.employee WHERE last_name = $1",
    [last_name]
  )
    .then((data) => res.json({ users: data, error: false }))
    .catch((err) => {
      // res.status(500);
      console.log(err);
      res.json({ error: true, message: err.code });
    });
};
