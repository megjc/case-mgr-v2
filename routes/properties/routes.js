'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/properties', api.properties.index)
router.post('/properties', api.properties.create)

module.exports = router