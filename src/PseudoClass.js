export default class PseudoClass{
  static regexpTest(nodeInfo, val) {
    return val.test(nodeInfo.node);
  }
  static equal(nodeInfo, val) {
    return nodeInfo.node === val;
  }
  static typeof(nodeInfo, val) {
    return typeof nodeInfo.node === val;
  }
  
}