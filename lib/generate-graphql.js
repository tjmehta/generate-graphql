var graphql = require('graphql')

var writeFile = require('./write-file.js')

module.exports = generateGraphQL

function generateGraphQL (schemaFilepath, outputFilepath, cb) {
  // return promise or callback
  var schema = require(schemaFilepath)
  var promise = writeFile(outputFilepath, graphql.printSchema(schema))
  return maybe(cb, promise)
}
