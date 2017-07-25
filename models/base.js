'use strict'
const mysql = require('mysql')
let pool = mysql.createPool({
   connectionLimit: 10,//process.env.MYSQL_CONN_LIMIT,
    // multipleStatements: 10,//process.env.MYSQL_MULTIQUERIES,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

exports.model = new function() {
  this.query = (options, cb)=>{
    pool.getConnection((err, connection)=>{
      if(err){
        return cb(err)
      }
      connection.query(options, (err, results)=>{
        connection.release()
        if(err){
          return cb(err)
        }
        cb(null, results)
      })
    })
  }
}