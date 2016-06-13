import macro from './traversal.macro.js';
import macro from './util.macro.js';
import cssParser from './css-parser.pegjs';
import PseudoClass from './PseudoClass.js';
import NodeInfo from './NodeInfo.js';
import {getFromPath, getFromPathArray, listStruct} from './util.js';

var errorValue = {};

DEFINE_MACRO(IS_MATCH_PROP_SELECTOR, (m$compound, m$path) => {
  return (m$compound.element === undefined || m$path[m$path.length-1] === m$compound.element.ident);
});
DEFINE_MACRO(IS_MATCH_ATTR_SELECTOR, (m$compound, m$node) => {
  if (m$compound.attributes) {
    return EVERY(m$compound.attributes, (attrSelector) => {
      if (attrSelector.type == 'Id') {
        return m$node && (
          m$node.ID === attrSelector.ident ||
          m$node.Id === attrSelector.ident ||
          m$node.id === attrSelector.ident);
      } else if (attrSelector.type == 'Class') {
        return m$node && 
          m$node.constructor &&
          m$node.constructor.name === attrSelector.ident;
      } else if (attrSelector.type == 'Attribute') {
        var m$attrValue =m$node[attrSelector.ident].toString();
        if (attrSelector.operator == '=') {
          return m$attrValue === attrSelector.value;
        } else if (attrSelector.operator == '^=') {
          return m$attrValue.indexOf(attrSelector.value) === 0;
        } else if (attrSelector.operator == '$=') {
          debugger;
          console.log(
            m$attrValue.indexOf(attrSelector.value),
            m$attrValue.length,
            attrSelector.value.length
          );
          return m$attrValue.indexOf(attrSelector.value) === 
            (m$attrValue.length - attrSelector.value.length);
        } else if (attrSelector.operator == '*=') {
          return m$attrValue.indexOf(attrSelector.value) !== -1;
        } else {
          return m$node.hasOwnProperty(attrSelector.ident);
        }
      } else {
        return false;
      }
    });
  }

  return true;
});
DEFINE_MACRO(MATCH_PSEUDO_CLASS, (m$compound, m$node, m$path, m$parent, m$customClass)=>{
  var result = [m$node, m$path, m$parent];
  var pseudoClassMethod, pseudoClassArgs, tmp;
  if (m$compound.pseudoClasses) {
    EVERY(m$compound.pseudoClasses, (pseudoClass) => {
      pseudoClassMethod = PseudoClass[pseudoClass.ident] 
        || m$customClass[pseudoClass.ident];
      pseudoClassArgs = pseudoClass.args?
        result.concat(pseudoClass.args):result;
      tmp = pseudoClassMethod.apply(undefined, pseudoClassArgs);
      if (tmp instanceof Array || !tmp) {
        result = tmp;
      }

      return tmp;
    });
  }

  return result;
});
DEFINE_MACRO(IS_MATCH_ALL_SELECTOR, (subNode, path, parent, option)=> {
  if (IS_MATCH_PROP_SELECTOR(compound, path)) {
    if (IS_MATCH_ATTR_SELECTOR(compound, subNode)) {
      return MATCH_PSEUDO_CLASS(compound, subNode, path, parent, option.pseudoClasses);
    }
  }
});
      
function findFirstMatchNode(combinator, node, option) {
  var result, compound = combinator.next;
  if (combinator.operator == ' ') {
    DEPTH_FIRST_SEARCH(node, 1, undefined, (subNode, path, parent) => {
      return result = IS_MATCH_ALL_SELECTOR(subNode, path, parent, option)
        .FETCH_NEXT_SELECTOR(compound.next);
    });
  } else if (combinator.operator == '>') {
    BREADTH_FIRST_SEARCH(node, 1, 1, (subNode, path, parent) => {
      return result = IS_MATCH_ALL_SELECTOR(subNode, path, parent, option)
        .FETCH_NEXT_SELECTOR(compound.next);
    });
  }

  return result;
  DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$nodeInfo, m$combinator) => {
    var m$tmp;
    if (m$nodeInfo) {
      if (m$combinator) {
        if (typeof m$nodeInfo[0] !== 'object') {
          return false;
        } else if (!(m$tmp = findFirstMatchNode(m$combinator, m$nodeInfo[0]))) {
          return false;
        }

        m$nodeInfo[0] = m$tmp[0];
        Array.prototype.push.apply(m$nodeInfo[1], m$tmp[1]);
        Array.prototype.push.apply(m$nodeInfo[2], m$tmp[2]);
      }

      return m$nodeInfo;
    }
  });
}
function findMatchNode(combinator, node, option) {
  var result = [], compound = combinator.next, tmp;
  if (combinator.operator == ' ') {
    BREADTH_FIRST_TRAVERSAL(node, 1, undefined, (subNode, path, parent) => {
      tmp = IS_MATCH_ALL_SELECTOR(subNode, path, parent, option)
        .FETCH_NEXT_SELECTOR(compound.next);
      if (tmp) {
        Array.prototype.push.apply(result, tmp);
      }
    });
  } else if (combinator.operator == '>') {
    BREADTH_FIRST_TRAVERSAL(node, 1, 1, (subNode, path, parent) => {
      tmp = IS_MATCH_ALL_SELECTOR(subNode, path, parent, option)
        .FETCH_NEXT_SELECTOR(compound.next);
      if (tmp) {
        Array.prototype.push.apply(result, tmp);
      }
    });
  }
  return result;
  DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$nodeInfo, m$combinator) => {
    var m$tmp;
    if (m$nodeInfo) {
      if (m$combinator) {
        if (typeof m$nodeInfo[0] !== 'object') {
          return false;
        } else if (!(m$tmp = findMatchNode(m$combinator, m$nodeInfo[0]))) {
          return false;
        }

        FOR_EACH(m$tmp, (rec)=>{
          Array.prototype.unshift.apply(rec[1], m$nodeInfo[1]);
          Array.prototype.unshift.apply(rec[2], m$nodeInfo[2]);
        });
        return m$tmp;
      }

      return [m$nodeInfo];
    }
  });
}

export default class Selector{
  constructor(root, option) {
    this.root = root;
    this.option = option || { pseudoClasses: {} };
  }
  selectOne(input) {
    var self = this;
    var result;
    var cssRules = cssParser.parse(input);
    SOME(cssRules, (rule) => {
      return result = findFirstMatchNode(rule.start, self.root, self.option);
    });
    return result?new NodeInfo(result[0], result[1], result[2], self.root):undefined;
  }
  selectAll(input) {
    var self = this;
    var result;
    var cssRules = cssParser.parse(input);
    return REDUCE_BY_INITVAL(cssRules, (res, rule, index)=>{
        return res.concat(findMatchNode(rule.start, self.root, self.option));
      }, [])
      .FILTER((node, index, array)=>{
        for (let i = 0, testNode; i < index; i++) {
          testNode = array[i];
          if (node[0] === testNode[0]) {
            if (COMPARE_TWO_ARRAY(node[1], testNode[1])) {
              return false;
            }
          }
        }

        return true;
      })
      .MAP((node)=>{
        return new NodeInfo(node[0], node[1], node[2], self.root);
      });
  }
  getFromPath(path, delimiter='/') {
    if (path.charAt(0) == delimiter) {
      path = path.substr(1);
    }
    
    var path = path.split(delimiter);
    return getFromPathArray(this.root, path);
  }
};
