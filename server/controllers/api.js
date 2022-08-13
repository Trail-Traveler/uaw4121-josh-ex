const { db } = require("../util/database");

exports.getEmployees = (req, res) => {
  db.any(
    "select * from employees.employee where last_name = 'Simmel' order by last_name desc"
  )
    .then((data) => res.json({ users: data, error: false }))
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({ error: true, message: err.code });
    });
};
