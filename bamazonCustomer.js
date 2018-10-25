let mysql = require("mysql");
let inquirer = require("inquirer");
let table = require('cli-table3');


//----------------------------Connect to MySQL DB----------------------//
let connection = mysql.createConnection({
  host: "Localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Berkowitz5!",
  database: "bamazon"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Testing connection...Successful!");
  productTable();
});

function productTable() {
  connection.query("SELECT * FROM products", function (err, res) {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity + "\n");

    }
    connection.end();
  });
}
//--------------------------------------------------------------------//



/*
connection.query(function(err) {
  if (err) throw err;
  let del = "DELETE FROM problems WHERE solved = 'true'";
    console.log(del);
  });
  */
