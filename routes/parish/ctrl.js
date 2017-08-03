'use strict'

const parish = require('../../models/parish')

let parishes = {
  index: (req, res)=>{
    parish.index((err, parishes)=>{
      if(err) return res.json(err)
      return res.json(parishes)
    })
  },
  create: (req, res)=>{
    parish.create(values, (err, id)=>{
      if(err) return res.json(err)
      return res.json({text: 'Your information has been successfully submitted.', id: id, success: true})
    })

  }
}

exports.parishes = parishes
