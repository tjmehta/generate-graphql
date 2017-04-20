#!/usr/bin/env node
var path = require('path')
var generateGraphQL = require('../index').generateGraphQL

var args = process.argv.slice(2)
var schemaFilepath = args[0]
var outputFilepath = args[1] || path.join(process.cwd(), 'schema.graphql')

generateGraphQL(schemaFilepath, outputFilepath).catch(function (err) {
  process.nextTick(function () {
    throw err
  })
})
