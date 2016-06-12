export default class NodeInfo{
  constructor(node, path, parent, root) {
  	this.node = node;
  	this.path = path || [];
  	this.parent = parent || [];
  	this.root = root || node;
  }
}