const pgp = require("pg-promise")();
const { ConnectionString } = require("connection-string");

const connectionObj = new ConnectionString(
  process.env.DATABASE_URL ||
    "hostname:postgres://localhost:5432/uaw4121;id=root;Password='';"
);

const cn = {
  host: connectionObj.hostname,
  port: connectionObj.port,
  database: connectionObj.path?.[0],
  user: connectionObj.user,
  password: connectionObj.password,
  ssl: false,
};

exports.db = pgp(cn);
