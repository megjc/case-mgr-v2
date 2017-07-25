'use strict'

const model = require('./base').model

const SQL = {
    GET: 'SELECT * FROM property'
}

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}