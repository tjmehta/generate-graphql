var assert = require('assert')
var path = require('path')
var graphql = require('graphql')

var writeFile = require('./write-file.js')

module.exports = generateGraphQL

function generateGraphQL (schemaFilepath, outputFilepath, cb) {
  assert(schemaFilepath, '"schemaFilepath" is required')
  assert(outputFilepath, '"outputFilepath" is required')
  schemaFilepath = path.resolve(schemaFilepath)
  outputFilepath = path.resolve(outputFilepath)
  // return promise or callback
  var schema = require(schemaFilepath)
  var promise = writeFile(outputFilepath, graphql.printSchema(schema))
  return maybe(cb, promise)
}
