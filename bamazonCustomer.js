let mysql = require("mysql");
let inquirer = require("inquirer");


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
})



function productTable() {
  connection.query("SELECT * FROM products", function (err, res) {
    for (let i = 0; i < res.length; i++) {
      console.log(res[i].prod_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity + "\n");

    }
    customerPrompt(res);

  })
}



function customerPrompt(res) {
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: "Please select an item to purchase. (Select the ID number)"
  }]).then(function (answer) {
    for (i = 0; i < 10; i++) {
      if (res[i].prod_id == answer.choice) {
        let product = answer.choice;
        let id = i;
        
        inquirer.prompt({
          type: 'input',
          name: 'quantity',
          message: 'How many would you like to purchase?',
          validate: function (value) {
            if (isNaN(value)) {
              return false;
            } else {
              return true;
            }
          }
        }).then(function (answer) {
          
          if ((res[id].stock_quantity - answer.quantity) > 0) {
            connection.query("UPDATE products SET stock_quantity ='" + (res[id].stock_quantity - answer.quantity) + "' WHERE prod_id=' " + product + "'",
              function (err, res) {
                console.log('Thank you for your purchase!');
                contShop();
                

              })
          } else {
            console.log("Insufficent Stock. Please try again.");
            customerPrompt(res);

          }


        })
      }
    }
  })

}

function contShop() {
  inquirer.prompt([{
    type: 'confirm',
    name: 'choice',
    message: 'Would you like to keep shopping?'
  }]).then(function (answer) {
    if (answer.choice) {
      productTable();
    }
    else {
      console.log('Thank you! Come on back now! Ya hear?');
      connection.end();
    }
  })
};
