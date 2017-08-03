'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM parishes',

  CREATE: 'INSERT INTO parishes SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, parishes)=>{
    if(err) return cb(err)
    cb(null, parishes)
 	})
}

exports.create = (values, cb)=>{
  let options = {
    sql: SQL.CREATE,
    values: {title: values.title}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}