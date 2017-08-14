'use strict'

const model = require('./base').model

const SQL = {
  GET: 'SELECT  * FROM receipt',

  CREATE: 'INSERT INTO receipt SET ?',

  SHOW: 'SELECT * FROM receipt WHERE id = ?',
}	

exports.index = (cb)=>{
  model.query(SQL.GET, (err, receipts)=>{
    if(err) return cb(err)
    cb(null, receipts)
 	})
}

exports.create = (values, cb)=>{
  let options = {
    sql: SQL.CREATE,
    values: {owner_id: values.owner_id, property_id: values.property_id, amount: values.amount, currency: values.currency}//, receipt_date: values.receipt_date}
  }

  model.query(options, (err, id)=>{
    if(err) return cb(err)
    cb(null, id)
  }) 
}

exports.show = (cb)=>{
  model.query(SQL.SHOW, (err, receipts)=>{
    if(err) return cb(err)
    cb(null, receipts)
  })
}