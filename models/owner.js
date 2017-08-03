'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM owner',

  CREATE: 'INSERT INTO owners SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, owners)=>{
    if(err) return cb(err)
    cb(null, owners)
 	})
}

exports.create = (values, cb)=>{
  let options = {
    sql: SQL.CREATE,
    values: {first_name: values.first_name, last_name: values.last_name, property_id: values.property_id, accession_id: values.accession_id}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}