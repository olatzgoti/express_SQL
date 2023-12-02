
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


const sql= 'CREATE TABLE productsCategories(id_pro int, id_cat int)'



//EJERCICIO 3
app.post('/newproduct', (req,res)=>{

    const sql = `INSERT INTO products(name, price) VALUES('${req.body.name}', '${req.body.price}')`
console.log(sql);
    db.query(sql,(err, result)=>{
        if(err) throw err
        console.log(result)
        res.send('Products inserted')
    })
})

app.post('/newcategory', (req,res)=>{

    const sql =`INSERT INTO categories(name) VALUES('${req.body.name}')`

    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('category inserted')
    })
})

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







app.listen(PORT, ()=>{
    console.log(`server at ${PORT}`);
})