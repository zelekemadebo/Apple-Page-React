const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
// const bodyparser = require("body-parser");
// Use  body parser as middle ware
// app.use(bodyparser.urlencoded({ extended: true }));//old way
const app = express();

// to permit for fixed users

const corsOption = {
  origin: [
    "http://localhost:3000",
    "http://www.evangadi.com",
    "http://www.apple.com"
  ],
}



// Middle ware to extract info from the html
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Middle ware to have access to the frontend
app.use(cors(corsOption));
app.use(express.json());

app.get("/", (req, res) =>
  res.send(
    '<body style="background-color: bisque;" ><h3>The server is running ...</h3></body>'
  )
);

/********************* */

// User account info
const connection = mysql.createConnection({
  user: "Mesafint",
  password: "mesafint@DataBase",
  host: "localhost",
  database: "mesafint",
  // socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock", //path to mysql sock in MAMP
});

// Connect to MySQL
connection.connect((err) => {
  if (err) console.log(err);
  console.log("Connected to MySQL");
});

app.get("/create-table", (req, res) => {
  // Putting Query on a variable
  let name = `CREATE TABLE if not exists customers(customer_id int auto_increment, name VARCHAR(255) not null, PRIMARY KEY (customer_id))`;

  let address = `CREATE TABLE if not exists address(address_id int auto_increment, customer_id int(11) not null, address VARCHAR(255) not null, PRIMARY KEY (address_id), FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`;

  let company = `CREATE TABLE if not exists company(company_id int auto_increment, customer_id int(11) not null, company VARCHAR(255) not null, PRIMARY KEY (company_id), FOREIGN KEY (customer_id) REFERENCES customers (customer_id))`;

  // Executing the query's we wrote above
  connection.query(name, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(address, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(company, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  res.end("Tables Created");
  console.log("Tables Created");
});

// Route: /insert-customers-info => To insert data to the tables
app.post("/insert-customers-info", (req, res) => {
  console.log(req.header);

  const { name, address, company } = req.body;
  let insertName = `INSERT INTO customers (name) VALUES ('${name}')`;

  // Executing the query we wrote above
  connection.query(insertName, (err, result, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  connection.query(
    `SELECT * FROM customers WHERE name = "${name}"`,
    (err, rows, fields) => {
      let nameAdded_id = rows[0].customer_id;

      let insertAddress = `INSERT INTO address (customer_id,address) VALUES ("${nameAdded_id}", "${address}")`;

      let insertCompany = `INSERT INTO company (customer_id,company) VALUES ("${nameAdded_id}", "${company}")`;

      // Executing the query's we wrote above
      connection.query(insertAddress, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });
      connection.query(insertCompany, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });
    }
  );

  res.end('<body style ="text-align: center; padding: 50px; "><h2>Data inserted to tables</h2><button style="background-color: coral; zoom: 200%" onclick="history.back()">Back</button></body>');
  console.log("Data inserted to tables");
});

app.get("/customers", (req, res) => {
  connection.query(
    "SELECT customers.customer_id AS ID,customers.name, address.address, company.company FROM customers JOIN address JOIN company ON customers.customer_id = address.address_id AND customers.customer_id = company.company_id",
    (err, results, fields) => {
      if (err) console.log("Error During selection", err);
      // console.log(results);
      res.send(results);
    }
  );
});

app.get("/customers-name", (req, res) => {
  connection.query("SELECT name FROM customers", (err, results, fields) => {
    if (err) console.log("Error During selection", err);
    let x = [];

    for (let i = 0; i < results.length; i++) {
      const data = results[i].name;
      x.push(data);
    }
    res.send(x);
  });
});

app.put("/update", (req, res) => {
  const { newName, id } = req.body;
  let updateName = `UPDATE customers SET name = '${newName}' WHERE customer_id = '${id}'`;
  connection.query(updateName, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
    res.send(result);
  });
});

// Route: /remove-user => To delete all data from the tables
app.delete("/remove-user", (req, res) => {
  // console.table(req.body)
  const { id } = req.body;
  let removeName = `DELETE FROM customers WHERE customer_id = '${id}'`;
  let removeAddress = `DELETE FROM address WHERE customer_id = '${id}'`;
  let removeCompany = `DELETE FROM company WHERE customer_id = '${id}'`;

  connection.query(removeAddress, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });

  connection.query(removeCompany, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });

  connection.query(removeName, (err, result) => {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) Deleted");
  });
});

// Route: /customers/:id => To retrieve single data from the tables using id
app.get("/customers/:id", (req, res) => {
  // console.log("ID from params", req.params.id);

  connection.query(
    `SELECT customers.customer_id AS ID,customers.name FROM customers WHERE customers.customer_id = ${req.params.id}`,
    (err, customerResults, fields) => {
      if (err) console.log("Error During selection", err);
      // console.log(results);

      connection.query(
        `SELECT address.address FROM address WHERE address.customer_id = ${req.params.id}`,
        (err, addressResults, fields) => {
          if (err) console.log("Error During selection", err);
          // console.log(results);
          connection.query(
            `SELECT company.company FROM company WHERE company.customer_id = ${req.params.id}`,
            (err, companyResults, fields) => {
              if (err) console.log("Error During selection", err);
              // console.log(results);
              res.send({
                id: customerResults[0]?.ID,
                name: customerResults[0]?.name,
                address: addressResults[0]?.address,
                company: companyResults[0]?.company,
              });
            }
          );
        }
      );
    }
  );
});






/*********************** *************************************/
/***********       My Data Base User server      *********** */
/********************************************************** */

const mySql = mysql.createConnection({
  user: "myDBuser",
  password: "myDBuser@123",
  host: "localhost",
  database: "mydbuser",
});

mySql.connect((err) => {
  if (err) console.log(err);
  else console.log("Connected to data base as an id " + mySql.threadId);
});

// Route: /install => To create the tables
app.get("/create-table", (req, res) => {
  // Putting Query on a variable
  let products = `CREATE TABLE if not exists products(product_id int auto_increment ,
    product_url VARCHAR(255) not null, product_name VARCHAR(255) not null, 
    PRIMARY KEY (product_id))`;

  let productDiscription = `CREATE TABLE if not exists ProductDescription(
        description_id int auto_increment,
        product_id int(11) not null,
        product_brief_description TEXT not null,
        product_description TEXT not null,
        product_img varchar(255) not null,
        product_link varchar(255) not null,
        PRIMARY KEY (description_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
      )`;

  let ProductPrice = `CREATE TABLE if not exists ProductPrice(
        price_id int auto_increment,
        product_id int(11) not null,    
        starting_price varchar(255) not null,
        price_range varchar(255) not null,
        PRIMARY KEY (price_id),
        FOREIGN KEY (product_id) REFERENCES Products(product_id)
      )`;

  let user = `CREATE TABLE if not exists User(
        user_id int auto_increment PRIMARY KEY, 
        user_name varchar(255) not null,
        user_password varchar(255) not null,
      )`;

  let orders = `CREATE TABLE if not exists Orders(
        order_id int auto_increment PRIMARY KEY,
        product_id int(11) not null,  
        user_id int(11) not null,    
        FOREIGN KEY (user_id) REFERENCES User(user_id)
        FOREIGN KEY (product_id) REFERENCES Products(product_id)

      )`;
  // Executing the query's we wrote above
  mySql.query(products, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  mySql.query(productDiscription, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  mySql.query(ProductPrice, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  mySql.query(user, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  mySql.query(orders, (err, results, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  res.end(
    '<body style="background-color: coral;" ><i><h3>The Five tables created</i></h3></body>'
  );
  console.log("Tables Created");
});

// // Route: /insert-customers-info => To insert data to the tables
app.post("/add-product", (req, res) => {
  console.log(req.header);

  const {
    iphoneId,
    imgPath,
    iphoneLink,
    iphoneTitle,
    StartPrice,
    priceRange,
    briefDescription,
    fullDescription,
    userId,
    userName,
    userPassword,
  } = req.body;
  let IphoneId = `INSERT INTO products (product_url, product_name ) VALUES ('${iphoneTitle}', '${iphoneId}')`;

  // Executing the query we wrote above
  mySql.query(IphoneId, (err, result, fields) => {
    if (err) console.log(`Error Found: ${err}`);
  });

  mySql.query(
    `SELECT * FROM products WHERE product_name = "${iphoneId}"`,
    (err, rows, fields) => {
      let nameAdded_id = rows[0].product_id;

      let insertProductDescription = `INSERT INTO ProductDescription (product_id,product_brief_description, product_description, product_img, product_link ) VALUES ("${nameAdded_id}", "${briefDescription}", "${fullDescription}", "${imgPath}", "${iphoneLink}")`;

      let insertProductPrice = `INSERT INTO ProductPrice (product_id,starting_price,price_range) VALUES ("${nameAdded_id}", "${StartPrice}", "${priceRange}")`;

      let insertOrders = `INSERT INTO Orders (product_id,user_id) VALUES ("${nameAdded_id}", "${userId}")`;

      let insertUser = `INSERT INTO User (product_id,user_name,user_password) VALUES ("${nameAdded_id}", "${userName}", "${userPassword}")`;

      // Executing the query's we wrote above
      mySql.query(insertProductDescription, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });
      mySql.query(insertProductPrice, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });

      mySql.query(insertOrders, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });

      mySql.query(insertUser, (err, result, fields) => {
        if (err) console.log(`Error Found: ${err}`);
      });
    }
  );

  res.end('<body style ="text-align: center; padding: 50px; "><h2>Data inserted to tables</h2><button style="background-color: coral; zoom: 200%" onclick="history.back()">Back</button></body>');
  console.log("Data inserted to tables");
});

app.get("/iphones", (req, res) => {
  mySql.query(
    "SELECT * FROM Products JOIN ProductDescription JOIN ProductPrice ON Products.product_id = ProductDescription.product_id AND Products.product_id = ProductPrice.product_id",
    (err, rows, fields) => {
      let iphones = { products: [] };
      iphones.products = rows;
      var stringIphones = JSON.stringify(iphones);
      if (!err) res.end(stringIphones);
      else console.log(err);
    },
  );
});

const port = 2024;
app.listen(port, () => console.log(`listening to http://localhost/${port}`));


