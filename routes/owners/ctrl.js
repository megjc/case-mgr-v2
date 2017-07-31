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
    ticket.create(values, (err, id)=>{
      if(err) return res.json(err)
      return res.json({text: 'Your infomation has been succesfully submitted.', id: id, success: true})
    })

  }
}

exports.owners = owners
