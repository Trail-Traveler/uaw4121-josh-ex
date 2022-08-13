const { db } = require("../util/database");

exports.getEmployees = (req, res) => {
  const last_name = req.body.last_name;
  console.log(last_name);
  db.any("select * from employees.employee where last_name = $1", [last_name])
    .then((data) => res.json({ users: data, error: false }))
    .catch((err) => {
      console.log(err);
      res.status(400);
      res.json({ error: true, message: err.code });
    });
};
