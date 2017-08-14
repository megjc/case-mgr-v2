'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  *, a.title, p.volume, o.first_name, o.last_name, r.amount ' +
         'FROM acquisition as a ' +  
         'INNER JOIN owner AS o ON a.id = o.accession_id ' +
         'INNER JOIN property AS p ON o.property_id = p.id ' +
         'INNER JOIN receipt AS r ON o.id = r.owner_id ',

  CREATE: 'INSERT INTO acquisition SET ?',

  SHOW: 'SELECT * FROM acquisition WHERE id = ?',
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}

exports.create = (values, cb)=>{
  let options = {
    sql: SQL.CREATE,
    values: {file_id: values.file_id, start_date: values.start_date, end_date: values.end_date, title: values.title, 
              status: values.status, location: values.location, remarks: values.remarks}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}

exports.show = (cb)=>{
  model.query(SQL.SHOW, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
  })
}