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
    let values = {
      file_id: req.body.file_id,
      start_date: req.body.start_date,
      end_date: req.body.end_date,
      remarks: req.body.remarks,
      status: req.body.status,
      location: req.body.location,
      title: req.body.title,
      
    }

    acquisition.create(values, (err, id)=>{
      if(err) return res.json(err)
      return res.json(values)
    })
  }
}

exports.acquisitions = acquisitions
