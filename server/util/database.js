const initOptions = {
  error(err, e) {
    console.log("initOptions", err, e);
  },
};

const pgp = require("pg-promise")(initOptions);
const { ConnectionString } = require("connection-string");

const connectionObj = new ConnectionString(
  process.env.DATABASE_URL || "postgres://@localhost:5432/uaw4121"
);
let ssl = null;
if (process.env.NODE_ENV === "production") {
  ssl = { rejectUnauthorized: false };
}
const cn = {
  host: connectionObj.hostname,
  port: connectionObj.port,
  database: connectionObj.path?.[0],
  user: connectionObj.user,
  password: connectionObj.password,
  ssl: ssl,
};

exports.db = pgp(cn);
