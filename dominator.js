const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  let nodes = flattenTreeToArray(root);
  let result;

  nodes.forEach(node => {
    if (node.id === id){
      result = node;
    }
  });
  return result;
};

const getElementsByClassName = function(root, className) {
  let nodes = flattenTreeToArray(root);
  let results = [];

  // nodes.forEach(el -> {


  // })
};

const getElementsByTagName = function(root, tagName) {
  let nodes = flattenTreeToArray(root);
  let results = [];

  nodes.forEach(node => {
    if (node.tagName === tagName){
      results.push(node)
    }
  });
  return results;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
