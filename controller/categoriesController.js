const db = require('../config/database.js');


const categoriesController =
{

    getAllCategories(req,res)
    {
        const sql = 'SELECT * FROM categories';
        db.query(sql, (err, result)=>{
            if(err)throw err
            res.send(result);
        })
    },
    getCatById(req,res){
        const sql = `SELECT * FROM categories where id = ${req.body.id}`;
        db.query(sql, (err, result)=>{
            if(err) throw err
            res.send(result);
        })
    },

    create(req,res)
    {
        const result = req.body.name;
        const sql = `INSERT INTO categories (name)VALUES('${result}')`;
        db.query(sql, (err, data)=>{
            if(err) throw err
            res.send(data);
        })
    },

    delete(req,res){
        const sql = `DELETE FROM categories where id = ${req.body.id}`;
        db.query(sql, (err, result)=>{

            if(err) throw err
            res.send(result);
        })
    }






}

module.exports = categoriesController;