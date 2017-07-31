'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/owners', api.owners.index)
router.post('/owners', api.owners.create)

module.exports = router