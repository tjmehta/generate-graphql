#!/usr/bin/env node
var path = require('path')
var generateJSON = require('../index').generateJSON

var args = process.argv.slice(2)
var schemaFilepath = args[0]
var outputFilepath = args[1] || path.join(process.cwd(), 'schema.json')

generateJSON(schemaFilepath, outputFilepath).then(function () {
  console.log('Created ' + path.resolve(outputFilepath))
}).catch(function (err) {
  process.nextTick(function () {
    throw err
  })
})
