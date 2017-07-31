'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM owner',

  CREATE: 'INSERT INTO tickets SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, owners)=>{
    if(err) return cb(err)
    cb(null, owners)
 	})
}

exports.create = (values, cb)=>{
  model.query(SQL.CREATE, values, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  })
}
