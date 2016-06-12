export default class PseudoClass{
  static regexpTest(node, path, parent, val) {
    return val.test(node);
  }
  static equal(node, path, parent, val) {
    return val === node;
  }
}