'use strict'

const acquisition = require('../../models/acquisition')

let acquisitions = {
  index: (req, res)=>{
    acquisition.index((err, acquisitions)=>{
      if(err) return res.status(500).json(err)
      return res.json(acquisitions)
    })
  },
  create: (req, res)=>{
    let values = {
      file_id: req.body.file_id,
      start_date: req.body.start_date.slice(0, 19).replace('T', ' '),
      end_date: req.body.end_date.slice(0, 19).replace('T', ' '),
      remarks: req.body.remarks,
      status: req.body.status,
      location: req.body.location,
      title: req.body.title      
    }

    acquisition.create(values, (err, id)=>{
      console.log('acquisition' + JSON.stringify(values))
      if(err) return res.status(500).json(err)
      return res.json(id.insertId)
    })
  }
}

exports.acquisitions = acquisitions
