const visitAllNodes = function(node, callback) {
  callback(node);
  let children = node.childNodes;

  // base case
  if (children.length === 0) return;

  // recursive case
  children.forEach(childNode => visitAllNodes(childNode, callback));
};

const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  let result = [];
  visitAllNodes(node, element => result.push(element));
  return result;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};