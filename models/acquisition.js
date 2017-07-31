'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  *, a.title, p.volume, o.first_name, o.last_name, r.amount ' +
         'FROM acquisition as a ' +  
         'INNER JOIN owner AS o ON a.id = o.accession_id ' +
         'INNER JOIN property AS p ON o.id = p.owner_id ' +
         'INNER JOIN receipt AS r ON o.id = r.owner_id ',

  CREATE: 'INSERT INTO tickets SET ?'
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}

exports.create = (values, cb)=>{
  model.query(SQL.CREATE, values, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  })
}
