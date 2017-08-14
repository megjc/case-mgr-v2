'use strict'

const receipt = require('../../models/receipt')

let receipts = {
  index: (req, res)=>{
    receipt.index((err, receipts)=>{
      if(err) return res.status(500).json(err)
      return res.json(receipts)
    })
  },
  create: (req, res)=>{
    let values = {
      owner_id: req.body.owner_id, 
      property_id: req.body.property_id, 
      amount: req.body.amount, 
      currency: req.body.currency, 
      receipt_date: req.body.receipt_date 
    }

    receipt.create(values, (err, id)=>{
      if(err) return res.status(500).json(err)
      return res.json(values);
    })
  },
  show: (req, res)=>{
    parish.show(req.params.id, (err, parish)=>{
      if(err) return res.status(500).json(err)

      return res.json(parish)
    })
  }
}

exports.receipts = receipts
