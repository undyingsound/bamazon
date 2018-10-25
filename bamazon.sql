DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DEC(10,2) NOT NULL,
stock_quantity INT NOT NULL
);


INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("4K Television", "Electronics", 999.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gaming System", "Electronics", 199.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hair Gel", "Beauty & Health", 19.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Multivitamins", "Beauty & Health", 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dog Bone", "Pet Supplies", 12.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cat Toy", "Pet Supplies", 9.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Men's Hoodie", "Clothing & Fashion", 49.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yeezy Shoes", "Clothing & Fashion", 499.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Regulation Basketball", "Sports & Outdoors", 49.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Swiss Army Knife", "Sports & Outdoors", 99.99, 10);

SELECT * FROM bamazon.products;

