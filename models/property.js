'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM properties',

  CREATE: 'INSERT INTO properties SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, properties)=>{
    if(err) return cb(err)
    cb(null, properties)
 	})
}

exports.create = (values, cb)=>{
  let options = {
    sql: SQL.CREATE,
    values: {description: values.description, folio: values.folio, volume: values.volume, is_liber: values.is_liber}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}