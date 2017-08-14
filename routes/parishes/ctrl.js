'use strict'

const parish = require('../../models/parish')

let parishes = {
  index: (req, res)=>{
    parish.index((err, parishes)=>{
      if(err) return res.status(500).json(err)
      return res.json(parishes)
    })
  },
  create: (req, res)=>{
    let values = {
      title: req.body.title
    }

    parish.create(values, (err, id)=>{
      console.log('parishes' + JSON.stringify(values))
      if(err) return res.status(500).json(err)
      return res.json(id.insertId)
    })
  },
  show: (req, res)=>{
    parish.show(req.params.id, (err, parish)=>{
      if(err) return res.status(500).json(err)

      return res.json(parish)
    })
  }
}

exports.parishes = parishes
