import mysql from "mysql2/promise";
const { createPool } = mysql;

export const pool = createPool({
  host: 'auth-db1216.hstgr.io',
  user: 'u823007245_rootienda',
  password: '12332145Jc',
  port: 3306,
  database: 'u823007245_tienda',
});

pool.getConnection().then((connection) => { console.log("Connected to database"); connection.release(); }).catch((error) => { console.error("Error connecting to database:", error); });
