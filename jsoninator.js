const _ = require('underscore'); // the real one! :)


// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  if (typeof obj === 'number') return `${obj}`;

  else if (obj === null) return 'null';

  else if (typeof obj === 'boolean') return `${obj}`;

  else if (typeof obj === 'string') return `"${obj}"`;

  else if (_.isArray(obj)){
    return `[${_.map(obj, item => stringify(item))}]`
  }

  else {
    let string = _.map(obj, (item, key) => `\"${key}\":${stringify(item)}`)
    return `{${string}}`
  }

};

module.exports = {
  stringify: stringify
};