'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  a.title, p.location, o.first_name, o.last_name, r.amount ' +
         'FROM acquisitions as a ' +  
         'INNER JOIN owner AS o ON a.id = o.accession_id ' +
         'INNER JOIN property AS p ON o.id = p.owner_id ' +
         'INNER JOIN receipt AS r ON o.id = r.owner_id ' 
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}

