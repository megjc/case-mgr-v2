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
    acquisition.index((err, acquisitions)=>{
      if(err) return res.json(err)

      return res.json(acquisitions)
    })
  }
}

exports.acquisitions = acquisitions
