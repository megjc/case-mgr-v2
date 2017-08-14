'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/owners', api.owners.index)
router.get('/owners/:id', api.owners.show)
router.post('/owners', api.owners.create)

module.exports = router