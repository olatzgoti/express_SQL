const db = require('../config/database.js');

const productController = 
{
    create(req,res) {

        const result = req.body;
        console.log(result);
        result.forEach((data)=>{
            const sql = 'INSERT INTO products(name, price) VALUES(?, ?)';

            const values = [data.name, data.price];
            console.log(sql);

            db.query(sql, values, (err, result)=>{
                if(err) throw err
                console.log(data);
                res.send('data inserted');
            })
        })
        },   
    
    getAllProducts(req,res) 
    {
        const sql = 'SELECT * FROM products';
        db.query(sql, (err,result)=>{
            if(err) throw err
                //console.log(result)
                res.send(result);
            })
    },
        
    getProdById(req,res)
    {   
	const sql = `SELECT name, price FROM products where id = ${req.body.id}`;
	db.query(sql,(err,result)=>{
	if(err)throw err
	res.send(result);
    })
    },
    
// TODO:  update
    update(req,res){
        const name = req.body.name;
        const price = req.body.price;
        const sql = `UPDATE products SET name= ${name}, price =${price} WHERE id = ${req.params.id}`

        db.query(sql, (err, result)=>{
            if(err) throw err
            res.send(result);

        })
    },

    delete(req,res)
     {
    const sql =`DELETE from products where id = ${req.body.id}`;
    db.query(sql, (err, result)=>{
    if(err) throw err
    res.send(result);
        })
        }
    }



        /*
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

*/


module.exports = productController;