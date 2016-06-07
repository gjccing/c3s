import macro from './traversal.macro.js';
import macro from './util.macro.js';
import cssParser from './css-parser.pegjs';
import {getFromPath, getFromPathArray, listStruct} from './util.js';

export default class Selector extends Array {
  constructor(root, option) {
    super();
    var self = this;
    Object.assign(
      this,
      // default public property
      {
        selectOne(input) {
          var result = new Selector(undefined, self.__option__);
          var cssRules = cssParser.parse(input);
          var target;
          if (SOME(cssRules, (rule) => {
            target = findFirstMatchNode(rule.start, self.__data__);
            return target !== errorValue;
          })) {
            result[0] = {
              value:target[0],
              path:target[1],
              root:self.__root__
            };
            result.__data__ = target[0];
            result.__root__ = self.__root__;
          }

          return result
        },
        selectAll(input) {
          var result = new Selector(undefined, self.__option__);
          var cssRules = cssParser.parse(input);
          var targetList = [], tmp;
          FOR_EACH(cssRules, (rule) => {
            tmp = FILTER(findMatchNode(rule.start, self.__data__), (node1, i1)=>{
              return EVERY(targetList, (node2)=>{
                if (node1[0] !== node2[0]) {
                  if (!COMPARE_TWO_ARRAY(node1[1], node2[1])) {
                    return true;
                  } 
                }
              });
            });
            Array.prototype.push.apply(targetList, tmp);
          });
          if (targetList.length) {
            FOR_EACH(targetList, (nodeInfo, i)=>{
              result[i] = {
                value:nodeInfo[0],
                path:nodeInfo[1],
                root:self.__root__
              };
            });
            result.__data__ = MAP(targetList, (target)=>target[0]);
            result.__root__ = self.__root__;
          }

          return result
        },
        getFromPath(path, delimiter='/') {
          var result = new Selector(self.__root__, self.__option__);
          if (path.charAt(0) == delimiter) {
            path = path.substr(1);
          }
          
          path = path.split(delimiter);
          MAP(self, (nodeInfo)=>{
            return {
              value: getFromPathArray(nodeInfo.value, path, delimiter),
              path: nodeInfo.path.concat(path),
              root: nodeInfo.root
            }
          })
          .FILTER((nodeInfo)=>nodeInfo.value)
          .FOR_EACH((nodeInfo,index)=>result[index] = nodeInfo);
          return result;
        },
        resetRoot() {
          var result = new Selector(self.__data__, self.__option__);
          FOR_EACH(self, (nodeInfo,index)=>{
            var tmp = Object.assign({}, nodeInfo);
            tmp.path = [];
            tmp.root = self.__data__;
            result[index] = tmp;
          });
          return result;
        },
        pseudoClass: {
          regexpTest: function (node, path, parent, val) {
            return val.test(node);
          },
          equal: function (node, path, parent, val) {
            return val === node;
          }
        }
      },
      // default private property
      {
        __root__: root,
        __data__: root,
        __option__: option
      },
      option
    );
    if (root) {
      super.push({value:root, path:[], root:root});
    }

    var errorValue = {};
    // private method -----------------------------------------------------------------
    function findFirstMatchNode(combinator, node) {
      var result;
      if (combinator.operator == ' ') {
        DEPTH_FIRST_SEARCH(node, (subNode, path, parent) => {
          result = FATCH_COMPOUND_SELECTOR(combinator.next, subNode, path, parent);
          if (result !== errorValue) {
            result = FETCH_NEXT_SELECTOR(combinator.next.next, result);
            if (result !== errorValue) {
              return true;
            }
          }
        });
      } else if (combinator.operator == '>') {
        BREADTH_FIRST_SEARCH(node, 1, (subNode, path, parent) => {
          result = FATCH_COMPOUND_SELECTOR(combinator.next, subNode, path, parent);
          if (result !== errorValue) {
            result = FETCH_NEXT_SELECTOR(combinator.next.next, result);
            if (result !== errorValue) {
              return true;
            }
          }
        });
      }

      return result;
      DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$combinator, m$nodeInfo) => {
        if (m$combinator) {
          if (typeof m$nodeInfo[0] == 'object') {
            var m$tmp = findFirstMatchNode(m$combinator, m$nodeInfo[0]);
            if (m$tmp !== errorValue) {
              m$nodeInfo[0] = m$tmp[0];
              Array.prototype.push.apply(m$nodeInfo[1], m$tmp[1]);
              Array.prototype.push.apply(m$nodeInfo[2], m$tmp[2]);
              return m$nodeInfo;
            }
          }

          return errorValue;
        }

        return m$nodeInfo;
      });
    }

    function findMatchNode(combinator, node) {
      var result = [], tmp;
      if (combinator.operator == ' ') {
        DEPTH_FIRST_TRAVERSAL(node, (subNode, path, parent) => {
          tmp = FATCH_COMPOUND_SELECTOR(combinator.next, subNode, path, parent);
          if (tmp !== errorValue) {
            tmp = FETCH_NEXT_SELECTOR(combinator.next.next, tmp);
            if (tmp !== errorValue) {
              Array.prototype.push.apply(result, tmp);
            }
          }
        });
      } else if (combinator.operator == '>') {
        BREADTH_FIRST_TRAVERSAL(node, 1, (subNode, path, parent) => {
          tmp = FATCH_COMPOUND_SELECTOR(combinator.next, subNode, path, parent);
          if (tmp !== errorValue) {
            tmp = FETCH_NEXT_SELECTOR(combinator.next.next, tmp);
            if (tmp !== errorValue) {
              Array.prototype.push.apply(result, tmp);
            }
          }
        });
      }

      return result;
      DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$combinator, m$nodeInfo) => {
        if (m$combinator) {
          if (typeof m$nodeInfo[0] == 'object') {
            var m$tmp = findMatchNode(m$combinator, m$nodeInfo[0]);
            if (m$tmp !== errorValue) {
              FOR_EACH(m$tmp, (rec)=>{
                Array.prototype.unshift.apply(rec[1], m$nodeInfo[1]);
                Array.prototype.unshift.apply(rec[2], m$nodeInfo[2]);
              });
              return m$tmp;
            }
          }

          return errorValue;
        }

        return [m$nodeInfo];
      });
    }

    DEFINE_MACRO(FATCH_COMPOUND_SELECTOR, (m$compound, m$subNode, m$path, m$parent) => {
      if (m$compound.element === undefined || 
        m$path[m$path.length-1] === m$compound.element.ident) {
        if (m$compound.attributes === undefined ||
          matchAttribute(m$compound.attributes, m$subNode)) {
          if (m$compound.pseudoClasses !== undefined) {
            var m$tmp = findPesudoClass(m$compound.pseudoClasses, m$subNode, m$path, m$parent);
            if (m$tmp) {
              return m$tmp;
            }
          } else {
            return [m$subNode, m$path, m$parent]
          }
        }
      }

      return errorValue;
    });

    function matchAttribute(attrSelectors, node) {
      return EVERY(attrSelectors, (attrSelector) => {
        if (attrSelector.type == 'Id') {
          return node && (
            node.ID == attrSelector.ident ||
            node.Id == attrSelector.ident ||
            node.id == attrSelector.ident);
        } else if (attrSelector.type == 'Class') {
          return node && scope.constructor.name == attrSelector.ident;
        }

        return false;
      });
    }

    function findPesudoClass(pseudoClasses, node, path, parent) {
      var result, tmp;
      result = EVERY(pseudoClasses, (pseudoClass) => {
        var pseudoClassMethod = self.pseudoClass[pseudoClass.ident];
        var pseudoClassArgs = [node, path, parent];
        if (pseudoClass.args) {
          pseudoClassArgs = pseudoClassArgs.concat(pseudoClass.args);
        }

        var tmp = pseudoClassMethod.apply(self, pseudoClassArgs);
        if (!tmp) {
          return false;
        } else if (tmp instanceof Array) {
          node = tmp[0];
          path = tmp[1];
          parent = tmp[2];
        }

        return true;
      }); 

      return result?[node, path, parent]:false;
    }
  }
};