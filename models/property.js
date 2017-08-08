'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM property',

  CREATE: 'INSERT INTO property SET ?'
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
    values: {description: values.description, owner_id: values.owner_id, parish_id: values.parish_id, folio: values.folio, volume: values.volume, is_liber: values.is_liber}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}