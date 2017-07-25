'use strict'
const express = require('express'),
      api = require('./ctrl')

let router = express.Router()

router.get('/acquisitions', api.acquisitions.index)

module.exports = router
