export default class NodeInfo{
  constructor(node, path, parent, root) {
    this.node = node;
    this.path = path || [];
    this.parent = parent || [];
    this.root = root || node;
    this._parent = this.parent.slice();
    this._parent.push(this.node);
  }
  getChild(key) {
    return new NodeInfo(
      this.node[key],
      this.path.concat(key),
      this._parent,
      this.root
    );
  }
  moveToChild(key) {
    this.parent.push(this.node);
    this.path.push(key);
    this.node = this.node[key];
    this._parent.push(this.node);
    return this;
  }
  getParent() {
    return new NodeInfo(
      this.parent[this.parent.length-1],
      this.path.slice(0, this.path.length-1),
      this.parent.slice(0, this.path.length-1),
      this.root
    );
  }
}

