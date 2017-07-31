'use strict'

const property = require('../../model/property')

let properties = {
  index: (req, res)=>{
    property.index((err, properties)=>{
      if(err) return res.json(err)
      return res.json(properties)
    })
  },
  create: (req, res)=>{
    property.create(values, (err, id)=>{
      if(err) return res.json(err)
      return res.json({text: 'Your information has been succesfully submitted.', id: id, success: true})
    })

  }
}

exports.properties = properties
