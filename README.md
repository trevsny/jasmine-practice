# jasmine-practice
Practice with unit tests with NodeJS and Jasmine

Following along with the Jasmine docs -- https://jasmine.github.io/pages/getting_started.html

`npm install jasmine --save-dev`   //to save as development dependency

`node/node_modules/jasmine/bin/jasmine init` //initializes jasmine, automatically creates spec folder

In package.json under the `scripts: {}` type `"test": "jasmine"`

# Run tests
`npm test` runs all Jasmine tests aka all *spec.js files

`npm test spec/hello_worldspec.js` would run specifically the tests written for 'hello_world.js'
