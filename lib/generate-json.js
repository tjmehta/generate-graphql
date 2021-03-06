var assert = require('assert')
var path = require('path')

var maybe = require('call-me-maybe')
var graphql = require('graphql')

var writeFile = require('./write-file.js')

module.exports = generateJSON

function generateJSON (schemaFilepath, outputFilepath, cb) {
  assert(schemaFilepath, '"schemaFilepath" is required')
  assert(outputFilepath, '"outputFilepath" is required')
  schemaFilepath = path.resolve(schemaFilepath)
  outputFilepath = path.resolve(outputFilepath)
  // return promise or callback
  var schema = require(schemaFilepath)
  var promise = graphql.graphql(schema, graphql.introspectionQuery).then(function (result) {
    // handle any graphql errors
    if (result.errors) {
      var err = new Error('graphql error')
      err.errors = result.errors
      throw err
    }
    // write file
    return writeFile(outputFilepath, JSON.stringify(result.data, null, 2))
  })
  return maybe(cb, promise)
}
