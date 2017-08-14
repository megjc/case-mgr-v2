'use strict'

const property = require('../../models/property')

let properties = {
  index: (req, res)=>{
    property.index((err, properties)=>{
      if(err) return res.status(500).json(err)
      return res.json(properties)
    })
  },
  create: (req, res)=>{
    let values = {
      description: req.body.description,
      owner_id: req.body.owner_id,
      parish_id: req.body.parish_id,
      volume: req.body.volume,
      folio: req.body.folio,  
      is_liber: req.body.is_liber   
    }

    property.create(values, (err, id)=>{
      console.log('properties' + JSON.stringify(values))
      if(err) return res.status(500).json(err)
      return res.json(id.insertId);
    })
  },
  show: (req, res)=>{
    parish.show(req.params.id, (err, parish)=>{
      if(err) return res.status(500).json(err)

      return res.json(parish)
    })
  }
}

exports.properties = properties
