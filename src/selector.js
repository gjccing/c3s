import macro from './traversal.macro.js';
import macro from './util.macro.js';
import cssParser from './css-parser.pegjs';
import PseudoClass from './PseudoClass.js';
import NodeInfo from './NodeInfo.js';

DEFINE_MACRO(IS_MATCH_PROP_SELECTOR, (m$element, m$path) => {
  return (m$element === undefined || m$element.ident === '*' || m$path[m$path.length-1] === m$element.ident);
});
DEFINE_MACRO(IS_MATCH_ATTR_SELECTOR, (m$attributes, m$node) => {
  if (m$attributes) {
    if (m$node !== undefined && m$node !== null) {
      return EVERY(m$attributes, (attrSelector) => {
        if (attrSelector.type == 'Id') {
          return m$node.ID === attrSelector.ident ||
            m$node.Id === attrSelector.ident ||
            m$node.id === attrSelector.ident;
        } else if (attrSelector.type == 'Class') {
          return m$node.constructor &&
            m$node.constructor.name === attrSelector.ident;
        } else if (attrSelector.type == 'Attribute') {
          var m$attrValue = ''+m$node[attrSelector.ident];
          var selectValue = attrSelector.value;

          if (attrSelector.flag &&　attrSelector.flag.indexOf('i') != -1) {
            m$attrValue = m$attrValue.toLowerCase();
            selectValue = selectValue.toLowerCase();
          }

          if (attrSelector.operator == '=') {
            return m$attrValue == selectValue;
          } else if (attrSelector.operator == '^=') {
            return m$attrValue.indexOf(selectValue) == 0;
          } else if (attrSelector.operator == '$=') {
            return m$attrValue.indexOf(selectValue) == 
              (m$attrValue.length - selectValue.length);
          } else if (attrSelector.operator == '*=') {
            return m$attrValue.indexOf(selectValue) != -1;
          } else {
            return m$attrValue != undefined || 
              m$node.hasOwnProperty(attrSelector.ident);
          }
        }
        
        return false;
      });
    } else {
      return false;
    }
  }

  return true;
});
DEFINE_MACRO(IS_MATCH_PSEUDO_CLASS, (m$pseudoClasses, m$nodeInfo, m$customClass)=>{
  var pseudoClassMethod, pseudoClassArgs;
  if (m$pseudoClasses) {
    return EVERY(m$pseudoClasses, (pseudoClass) => {
      pseudoClassMethod = PseudoClass[pseudoClass.ident] || m$customClass[pseudoClass.ident];
      pseudoClassArgs = [m$nodeInfo];
      if (pseudoClass.args) pseudoClassArgs = pseudoClassArgs.concat(pseudoClass.args);
      return pseudoClassMethod.apply(undefined, pseudoClassArgs);
    });
  }

  return true;
});
DEFINE_MACRO(IS_MATCH_ALL_SELECTOR, (m$compound,m$subNodeInfo, m$option)=> {
  return IS_MATCH_PROP_SELECTOR(m$compound.element, m$subNodeInfo.path) &&
    IS_MATCH_ATTR_SELECTOR(m$compound.attributes, m$subNodeInfo.node) &&
    IS_MATCH_PSEUDO_CLASS(m$compound.pseudoClasses, m$subNodeInfo, m$option.pseudoClasses);
});

function findFirstMatchNode(combinator, nodeInfo, option) {
  DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$nodeInfo, m$combinator, m$option) => {
    if (m$combinator) {
      if (typeof m$nodeInfo.node === 'object' || m$combinator.operator == '~') {
        return findFirstMatchNode(m$combinator, m$nodeInfo, m$option);
      }
    } else 
      return m$nodeInfo;
  });

  var result;
  var compound = combinator.next;
  var lay = nodeInfo.path.length+1;
  if (combinator.operator == ' ') {
    DEPTH_FIRST_SEARCH(nodeInfo, lay, Infinity, (subNodeInfo) => {
      if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
        return result = FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option);
      }
    });
  } else if (combinator.operator == '>') {
    BREADTH_FIRST_SEARCH(nodeInfo, lay, lay, (subNodeInfo) => {
      if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
        return result = FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option);
      }
    });
  } else if (combinator.operator == '~') {
    var currentProp = nodeInfo.path[nodeInfo.path.length-1];
    BREADTH_FIRST_SEARCH(nodeInfo.getParent(), lay-1, lay-1, (subNodeInfo) => {
      if (subNodeInfo.path[subNodeInfo.path.length-1] != currentProp) {
        if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
          return result = FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option);
        }
      }
    });
  }

  return result;
}
function findMatchNode(combinator, nodeInfo, option) {
  DEFINE_MACRO(FETCH_NEXT_SELECTOR, (m$nodeInfo, m$combinator, m$option) => {
    if (m$combinator) {
      if (typeof m$nodeInfo.node === 'object' || m$combinator.operator == '~') {
        return findMatchNode(m$combinator, m$nodeInfo, m$option);
      }
    } else 
      return [m$nodeInfo];
  });

  var result = [];
  var compound = combinator.next, tmp;
  var lay = nodeInfo.path.length+1;
  if (combinator.operator == ' ') {
    BREADTH_FIRST_TRAVERSAL(nodeInfo, lay, Infinity, (subNodeInfo) => {
      if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
        Array.prototype.push.apply(result, FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option));
      }
    });
  } else if (combinator.operator == '>') {
    BREADTH_FIRST_TRAVERSAL(nodeInfo, lay, lay, (subNodeInfo) => {
      if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
        Array.prototype.push.apply(result, FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option));
      }
    });
  } else if (combinator.operator == '~') {
    var currentProp = nodeInfo.path[nodeInfo.path.length-1];
    BREADTH_FIRST_TRAVERSAL(nodeInfo.getParent(), lay-1, lay-1, (subNodeInfo) => {
      if (subNodeInfo.path[subNodeInfo.path.length-1] != currentProp) {
        if (IS_MATCH_ALL_SELECTOR(compound, subNodeInfo, option)) {
          Array.prototype.push.apply(result, FETCH_NEXT_SELECTOR(subNodeInfo, compound.next, option));
        }
      }
    });
  }

  return result;
}

export default class Selector{
  constructor(root, option) {
    this.root = root;
    this.option = option;
    if (typeof this.option !== 'object') {
      this.option = {pseudoClasses:{}};
    } else if (typeof this.option.pseudoClasses !== 'object') {
      this.option.pseudoClasses = {};
    }
  }
  selectOne(input) {
    var self = this;
    var result;
    var cssRules = cssParser.parse(input);
    SOME(cssRules, (rule) => {
      return result = findFirstMatchNode(rule.start, new NodeInfo(self.root), self.option);
    });
    return result;
  }
  selectAll(input) {
    var self = this;
    var result;
    var cssRules = cssParser.parse(input);
    var rootNodeInfo = new NodeInfo(self.root);
    return REDUCE_BY_INITVAL(cssRules, (res, rule, index)=>{
        return res.concat(findMatchNode(rule.start, rootNodeInfo, self.option));
      }, [])
      .FILTER((nodeInfo, index, array)=>{
        for (let i = 0, testNodeInfo; i < index; i++) {
          testNodeInfo = array[i];
          if (nodeInfo.node === testNodeInfo.node) {
            if (COMPARE_TWO_ARRAY(nodeInfo.path, testNodeInfo.path)) {
              return false;
            }
          }
        }

        return true;
      });
  }
  getByPath(path, delimiter='/') {
    if (path.charAt(0) == delimiter) {
      path = path.substr(1);
    }
    
    var result = new NodeInfo(this.root);
    var path = path.split(delimiter);
    EVERY(path, (val) => result.moveToChild(val).node != null);
    return result;
  }
};
