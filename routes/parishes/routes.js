'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/parishes', api.parishes.index)
router.get('/parishes/:id', api.parishes.show)
router.post('/parishes', api.parishes.create)

module.exports = router