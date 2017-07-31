'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/owners', api.properties.index)
router.post('/owners', api.properties.create)

module.exports = router