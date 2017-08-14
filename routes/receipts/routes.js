'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/receipts', api.receipts.index)
router.get('/receipts/:id', api.receipts.show)
router.post('/receipts', api.receipts.create)

module.exports = router