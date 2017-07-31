'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM property',

  CREATE: 'INSERT INTO tickets SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, properties)=>{
    if(err) return cb(err)
    cb(null, properties)
 	})
}

exports.create = (values, cb)=>{
  model.query(SQL.CREATE, values, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  })
}
