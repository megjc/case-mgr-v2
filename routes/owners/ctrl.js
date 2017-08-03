'use strict'

const owner = require('../../models/owner')

let owners = {
  index: (req, res)=>{
    owner.index((err, owners)=>{
      if(err) return res.json(err)
      return res.json(owners)
    })
  },
  create: (req, res)=>{
    owner.create(values, (err, id)=>{
      if(err) return   res.status(500).send(json(err))
      return res.json({text: 'Your information has been successfully submitted.', id: id, success: true})
    })

  }
}

exports.owners = owners
