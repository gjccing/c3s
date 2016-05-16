import cssParser from './css-parser.pegjs';

function c3Selector(root, option) {
  var _option = Object.assign({}, option);
  var _data = root;
  if (root instanceof Array) {
    for (var i = 0, I = root.length; i < I; i++) {
      this.push({value:root[i], path:[i], root:root});
    }
  } else if (root !== undefined && root !== null && root !== NaN) {
    this.push({value:root, path:[], root:root});
  }

  this.root = root;

  this.selectOne = function(input) {
    var cssTrees = cssParser.parse(input),
      result,
      tmp;
    for (var i = 0, I = cssTrees.length; i < I; i++) {
      if (tmp = combinatorFind(cssTrees[i].start, _data)) {
        result = new c3Selector(tmp[0], option);
        result[0].path = tmp[1];
        result[0].root = this.root;
        return result;
      }
    }

    return new c3Selector(undefined, option);
  };

  this.selectAll = function(input) {
    var cssTrees = cssParser.parse(input),
      result = [],
      tmp;
    for (var i = 0, I = cssTrees.length; i < I; i++) {
      if (tmp = combinatorFindAll(cssTrees[i].start, _data)) {
        result.push.apply(result, tmp);
      }
    }

    for (var i = result.length-1; i > -1; i--) {
      for (var j = i-1; j > -1; j--) {
        if (result[i][1].join() == result[j][1].join()) {
          result.splice(i,1);
          break;
        }
      }
    }

    tmp = result;
    result = new c3Selector(tmp.map(rec=>rec[0]), option);
    for (var i in tmp) {
      result[i].path = tmp[i][1];
      result[i].root = this.root;
    }

    return result;
  };

  this.getByPath = function (root, path) {
    var tmp = root;
    for (var i in path) {
      tmp[i];
    }

    return tmp;
  };

  function combinatorFind(combinator, scope) {
    switch (combinator.operator) {
      case ' ' :
        return spaceOperatorFind(combinator, scope);
      case '>' :
        return arrowOperatorFind(combinator, scope);
    }
  }

  function spaceOperatorFind(combinator, scope) {
    var result;
    if (result = compoundFind(combinator.next, scope)) {
      return result; 
    }

    for (var key in scope) {
      if (scope.hasOwnProperty(key)) {
        if (typeof scope[key] == 'object' && scope[key]) {
          if (result = spaceOperatorFind(combinator, scope[key])) {
            return prependPathThenReturn(result, key);
          }
        } else if (result = compoundFind(combinator.next, scope[key])) {
          return prependPathThenReturn(result, key);
        }
      }
    }

    return result;
  }

  function arrowOperatorFind(combinator, scope) {
    var result;
    if (result = compoundFind(combinator.next, scope)) {
      return result; 
    }

    for (var key in scope) {
      if (scope.hasOwnProperty(key) && typeof scope[key] != 'object') {
        if (result = compoundFind(combinator.next, scope[key])) {
          return prependPathThenReturn(result, key);

        }
      }
    }

    return result;
  }

  function prependPathThenReturn(result, path) {
    result[1].unshift(path);
    return result;
  }

  function compoundFind(compound, scope) {
    var result = scope;
    var propName;
    var part;
    for (var i = 0, I = compound.length; i < I; i++) {
      part = compound[i];
      result = compoundFunction['get'+part.type](part, result);
      if (result === errorVal) {
        return undefined;
      }

      if (part.type == 'Prop') {
        propName = part.ident;
      }
    }

    if (compound.next) {
      if (result = combinatorFind(compound.next, result)) {
        if (propName) {
          result[1].unshift(propName);
        }
      }
    } else {
      result = [result, propName?[propName]:[]];
    }

    return result;
  }

  function combinatorFindAll(combinator, scope) {
    switch (combinator.operator) {
      case ' ' :
        return spaceOperatorFindAll(combinator, scope);
      case '>' :
        return arrowOperatorFindAll(combinator, scope);
    }
  }

  function spaceOperatorFindAll(combinator, scope) {
    var result = [], tmp;
    if (tmp = compoundFindAll(combinator.next, scope)) {
      result.push.apply(result, tmp);
    }
    
    for (var key in scope) {
      if (scope.hasOwnProperty(key)) {
        if (typeof scope[key] == 'object' && scope[key]) {
          if (tmp = spaceOperatorFindAll(combinator, scope[key])) {
            prependPathAndMergeThenReturn(tmp, key, result);
          }
        } else if (tmp = compoundFindAll(combinator.next, scope[key])) {
          prependPathAndMergeThenReturn(tmp, key, result);
        }
      }
    }

    return result;
  }

  function arrowOperatorFindAll(combinator, scope) {
    var result = [], tmp;
    if (tmp = compoundFindAll(combinator.next, scope)) {
      result.push.apply(result, tmp);
    }

    for (var key in scope) {
      if (scope.hasOwnProperty(key) && typeof scope[key] != 'object') {
        if (tmp = compoundFindAll(combinator.next, scope[key])) {
          prependPathAndMergeThenReturn(tmp, i, result);
        }
      }
    }

    return result;
  }

  function compoundFindAll(compound, scope) {
    var result = [];
    var propName;
    var part;
    var tmp;
    for (var i = 0, I = compound.length; i < I; i++) {
      part = compound[i];
      scope = compoundFunction['get'+part.type](part, scope);
      if (scope === errorVal) {
        return undefined;
      }

      if (part.type == 'Prop') {
        propName = part.ident;
      }
    }

    if (compound.next) {
      if (tmp = combinatorFindAll(compound.next, scope)) {
        if (propName) {
          prependPathAndMergeThenReturn(tmp, propName, result)
        } else {
          result.push.apply(result, tmp);
        }
      }
    } else {
      result.push([scope, propName?[propName]:[]]);
    }

    return result;
  }

  function prependPathAndMergeThenReturn(newResult, path, result) {
    for (var i = 0, I = newResult.length; i < I; i++) {
      newResult[i][1].unshift(path);
    }
    
    result.push.apply(result, newResult);
  }

  var errorVal = {};
  var compoundFunction = {
    getProp : function (part, scope) {
      if (scope && 
        typeof scope == 'object' &&
        scope[part.ident] !== undefined && 
        scope[part.ident] !== null) {
        return scope[part.ident];
      } else {
        return errorVal;
      }
    },
    getId : function (part, scope) {
      if (scope && scope.id == part.ident) {
        return scope;
      } else {
        return errorVal;
      }
    },
    getClass : function (part, scope) {
      if (scope && (
          typeof scope.class == 'string' && scope.class.indexOf(part.ident) != -1 ||
          scope.class instanceof Array && scope.class.indexOf(part.ident) != -1 ||
          scope.constructor.name == part.ident
        )) {
        return scope;
      } else {
        return errorVal;
      }
    },
    getPseudoClass : function (part, scope) {
      var pseudoClass = pseudoClassFunction[part.ident];
      var pseudoClassArgs = [scope].concat(part.args);
      if (pseudoClass.apply(this, pseudoClassArgs)) {
        return scope;
      } else {
        return errorVal;
      }
    }
  };

  var pseudoClassFunction = Object.assign( {
    regexpTest: function (selectVal, val) {
      return typeof selectVal == 'string' && val.test(selectVal);
    },
    equal: function (selectVal, val) {
      return selectVal === val;
    }
  }, _option.pseudoClass);
};
c3Selector.prototype = [];

function c3s(root, option) {
  return new c3Selector(root, option);
};
c3s.prototype = new c3Selector();

export default c3s;