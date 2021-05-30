// local dependency
// npn i <packagename>

// global dependency
// npm install --g <packagename>

// for package.json
// npm init 

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newitem = _.flattenDeep(items);
console.log(newitem)
console.log("Hello world")

 //npm run start (for nodemon) npm start (for node)