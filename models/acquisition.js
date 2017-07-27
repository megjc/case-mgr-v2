'use strict'

const model = require('./base').model

const SQL = {
    GET: 'SELECT title, location FROM  acquisition '
}

exports.index = (cb)=>{
  model.query(SQL.GET, (err, acquisitions)=>{
    if(err) return cb(err)
    cb(null, acquisitions)
 	})
}