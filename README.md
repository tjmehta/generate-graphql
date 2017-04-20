# generate-graphql
Generate JSON and GraphQL files from a JavaScript GraphQLSchema

# Installation
```bash
npm i --save-dev generate-graphql
```

# Usage

### CLI

##### Commands
* `generate-graphql <schema-filepath> [output-filepath]`
* `generate-graphql-json <schema-filepath> [output-filepath]`

##### Parameters
* schema-filepath - filepath of javascript graphql schema, required
* output-filepath - filepath to create, defaults to schema.json or schema.graphql in current working directory

##### NPM scripts Example

Edit and add these scripts to your package.json:
```js
// ...
scripts: {
  // ...
  "generate-graphql": "generate-graphql ./schema.js ./schema.graphql"
  "generate-graphql-json": "generate-graphql-json ./schema.js ./schema.json"
  // ...
}
// ...
```

Then run:
`npm run generate-graphql` and `npm run generate-graphql-json` to generate your files.

### Module

##### Generate GraphQL Example
* `schemaFilepath` and `outputFilepath` are both required
```js
var generateGraphQL = require('generate-graphql').generateGraphQL

// promise style
generateGraphQL('/file/path/schema.js', '/output/path/schema.graphql').then(/*...*/).catch(/*...*/)
// callback style
generateGraphQL('/file/path/schema.js', '/output/path/schema.graphql', cb)
```

##### Generate JSON Example
* `schemaFilepath` and `outputFilepath` are both required
```js
var generateJSON = require('generate-graphql').generateJSON

// promise style
generateJSON('/file/path/schema.js', '/output/path/schema.json').then(/*...*/).catch(/*...*/)
// callback style
generateJSON('/file/path/schema.js', '/output/path/schema.json', cb)
```

# License
MIT
