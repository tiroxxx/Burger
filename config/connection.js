var mysql = require("mysql");
// Global for connection
var connection;
// If on Heroku use the Envirnmental Variable for JawsDB
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	vnpdkgmheo93xhci",
    password: "v0rixgzsny5is14q",
    database: "zyem1qzcribaezyc"
  });
};
 //look for the error
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = connection;
