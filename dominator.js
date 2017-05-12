const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');


const getElementById = function(root, id) {
  let nodesArray = flattenTreeToArray(root);
  return _.filter(nodesArray, node => node.id === id)[0]
};

const getElementsByClassName = function(root, className) {
  let nodesArray = flattenTreeToArray(root);
  return _.filter(nodesArray, node => {
    return node.className && (node.className.indexOf(className) !== -1);
  });
};

const getElementsByTagName = function(root, tagName) {
  let nodesArray = flattenTreeToArray(root);
  return _.filter(nodesArray, node => node.tagName === tagName);
};


module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
