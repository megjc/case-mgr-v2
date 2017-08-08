'use strict'

const owner = require('../../models/owner')

let owners = {
  index: (req, res)=>{
    owner.index((err, owners)=>{
      if(err) return res.status(500).json(err)
      return res.json(owners)
    })
  },
  create: (req, res)=>{
    let values = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      property_id : req.body.property_id,
      accession_id : req.body.accession_id
    }

    owner.create(values, (err, id)=>{
      console.log('owners' + JSON.stringify(values))
      if(err) return res.status(500).json(err)
      return res.json(id.insertId)
    })

  }
}

exports.owners = owners
