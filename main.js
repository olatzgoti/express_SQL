
const PORT = 3201;
const mysql = require('mysql2')
const express = require('express');

const app = express();

app.use(express.json());

const db = mysql.createConnection({
    host: '127.0.0.1',
    port: 3308,
    user: 'root',
    password: '1234',
	database: 'expressSqlDB'
}) 

db.connect();

app.get('/createdb', (req, res) => {
	const sql = 'CREATE DATABASE expressSqlDB'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Database created...')
	})
})

app.get('/createTableProducts', (req, res) => {
	const sql =
		'CREATE TABLE products(id int AUTO_INCREMENT,name VARCHAR(45), price int, PRIMARY KEY(id))'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Products table created...')
	})
})

app.get('/createTableCategories', (req, res) => {
	const sql =
		'CREATE TABLE categories(id int AUTO_INCREMENT,name VARCHAR(45), PRIMARY KEY(id))'

	db.query(sql, (err, result) => {
		if (err) throw err
		console.log(result)
		res.send('Categories table created...')
	})
})

app.get('/createtableproductscategories', (req,res) =>{
const sql= 'CREATE TABLE productsCategories( id_pro INT, id_cat INT, FOREIGN KEY(id_pro) REFERENCES products(id), FOREIGN KEY(id_cat) REFERENCES categories(id))';


		db.query(sql, (err,result)=>{

		if(err) throw err
		console.log(result);
		res.send('Productscategories table created...')
	})
})

/*


CREATE TABLE comments(
	id INT AUTO_INCREMENT,
	post_id INT,
	user_id INT,
	body TEXT,
	PRIMARY KEY(id),
	FOREIGN KEY(user_id) REFERENCES users(id),
	FOREIGN KEY(post_id) REFERENCES posts(id)
	);
	
*/



//EJERCICIO 3
app.post('/newproduct', (req,res)=>
{
const result = req.body;
	result.forEach((data) => {

	const sql = 'INSERT INTO products(name, price) VALUES(?, ?)';

	const values = [data.name, data.price];
	console.log(sql);
		
		db.query(sql, values, (error, result) => {
		if(error) throw error;
			console.log('data inserted',result);
			res.send('Products inserted');
		})
})
})
/*
dataArray.forEach((data) => {
	const sql = 'INSERT INTO your_table (field1, field2) VALUES (?, ?)';
	const values = [data.field1, data.field2];
  
	connection.query(sql, values, (error, results, fields) => {
	  if (error) throw error;
	  console.log('Data inserted:', results);
	});
  });
*/

app.post('/newcategory', (req,res)=>{

    const sql =`INSERT INTO categories(name) VALUES('${req.body.name}')`

    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('category inserted')
    })
})


//EJERCICIO 4

app.get('/getAllProducts', (req,res)=>{
const sql = 'SELECT * FROM products';

	db.query(sql, (err,result)=>{
		if(err) throw err
		//console.log(result)
		res.send(result);
	})
})

app.get('/getAllCategories', (req,res)=>{

	const sql = 'SELECT * FROM categories';
	db.query(sql, (err, result)=>{
	if(err) throw err;
		res.send(result);
}
	)
})

//Crea un endpoint que muestre de forma descendente los productos.
//Crea un endpoint donde puedas buscar un producto por su nombre


//Crea un endpoint que muestra todos los productos con sus categorías 
app.get('/getAllprodcat', (req,res)=>{
	
	const sql = 'SELECT products.name, products.price, categories.name from products INNER JOIN productsCategories ON products.id = productsCategories.id_pro inner join categories ON productsCategories.id_cat = categories.id';
	db.query(sql, (err, result)=>{
		
		if(err)throw err
		res.send(result);
	})
	
})

//Crea un endpoint donde puedas seleccionar un producto por id

app.post('/getProdById', (req,res)=>{
	
	const sql = `SELECT name, price FROM products where id = ${req.body.id}`;
	
	db.query(sql,(err,result)=>{
		
		if(err)throw err
		res.send(result);
	})
	
})

//Crea un endpoint donde puedas seleccionar una categoría por id
app.post('/getCatById', (req,res)=>{

	const sql = `SELECT name FROM categories where id = ${req.body.id}`;

	db.query(sql, (err,result)=>{

		if(err) throw err
		res.send(result);
	})
})


/*
sELECT comments.body, posts.title, users.first_name, users.last_name FROM comments
INNER JOIN posts ON posts.id = comments.post_id
INNER JOIN users ON users.id = comments.user_id;
*/




app.listen(PORT, ()=>{
    console.log(`server at ${PORT}`);
})