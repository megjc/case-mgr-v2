'use strict'

const acquisition = require('../../models/acquisition')

let acquisitions = {
  index: (req, res)=>{
    acquisition.index((err, acquisitions)=>{
      if(err) return res.json(err)
      return res.json(acquisitions)
    })
  },
  create: (req, res)=>{
    ticket.create(values, (err, id)=>{
      if(err) return res.json(err)
      return res.json({text: 'Your infomation has been succesfully submitted.', id: id, success: true})
    })

  }
}

exports.acquisitions = acquisitions
