const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  callback(node);
  let children = node.childNodes;

  // base case
  if (children.length === 0) return;

  // recursive case
  children.forEach(childNode => visitAllNodes(childNode, callback));
};

const flattenTreeToArray = function(node) {
  let result = [];
  visitAllNodes(node, childNode => result.push(childNode));
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};