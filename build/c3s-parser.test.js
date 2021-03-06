/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	__webpack_require__(41);
	
	__webpack_require__(44);
	
	__webpack_require__(47);
	
	var _main = __webpack_require__(51);
	
	var _main2 = _interopRequireDefault(_main);
	
	var _chai = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('c3s', function () {
	  var data1 = __webpack_require__(46);
	  var data2 = __webpack_require__(52);
	  [{
	    input: '[value="New"]',
	    expect: {
	      path: 'menu,popup,menuitem,0',
	      value: data1.menu.popup.menuitem[0],
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'value',
	    expect: {
	      path: 'menu,value',
	      value: 'File'
	    }
	  }, {
	    input: 'value abc',
	    expect: {
	      value: undefined
	    }
	  }, {
	    input: 'popup value',
	    expect: {
	      path: 'menu,popup,menuitem,0,value',
	      value: 'New'
	    }
	  }, {
	    input: 'popup>value',
	    expect: {
	      value: undefined
	    }
	  }, {
	    input: 'menuitem>value',
	    expect: {
	      value: undefined
	    }
	  }, {
	    input: '#file',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: '#"file"',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: '#300',
	    expect: {
	      path: 'menu,popup,menuitem,0',
	      value: data1.menu.popup.menuitem[0],
	      desc: 'menu Object'
	    }
	  }, {
	    input: '.Object',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: '.Array',
	    expect: {
	      path: 'menu,popup,menuitem',
	      value: data1.menu.popup.menuitem,
	      desc: 'menu Object'
	    }
	  }, {
	    input: '>menu',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'popup>value, >menu',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'popup>menuitem menuitem2 value',
	    expect: {
	      path: 'menu,popup,menuitem,0,menuitem2,0,value',
	      value: 'New2_1'
	    }
	  }, {
	    input: '>menu>popup>menuitem>value',
	    expect: {
	      value: undefined
	    }
	  }, {
	    input: ':equal("CreateNewDoc()")',
	    expect: {
	      path: 'menu,popup,menuitem,0,onclick',
	      value: 'CreateNewDoc()'
	    }
	  }, {
	    input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
	    expect: {
	      path: 'menu,popup,menuitem,2,menuitem2,2,onclick',
	      value: 'CloseDoc2_3()'
	    }
	  }, {
	    input: 'menu[value]',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'menu[value="File"]',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'menu[value^="Fi"]',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'menu[value$="le"]',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'menu[value*="il"]',
	    expect: {
	      path: 'menu',
	      value: data1.menu,
	      desc: 'menu Object'
	    }
	  }, {
	    input: 'id ~ value',
	    expect: {
	      path: 'menu,value',
	      value: data1.menu.value
	    }
	  }].forEach(function (testCase) {
	    it('should return ' + (testCase.expect.desc || testCase.expect.value) + ' when the select is ' + testCase.input, function () {
	      var result = (0, _main2.default)(data1, {}).selectOne(testCase.input);
	      if (result) {
	        _chai.assert.equal(result.node, testCase.expect.value);
	        _chai.assert.equal(result.path.toString(), testCase.expect.path);
	      } else {
	        _chai.assert.equal(result, testCase.expect.value);
	      }
	    });
	  });
	
	  [{
	    input: '>"0">"0">"0"',
	    expect: '0,0,0'
	  }, {
	    input: '>"4">"4">"4">"1">"menu">"popup">"menuitem">"0">"menuitem2">"0">"value"',
	    expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
	  }, {
	    input: '>"4">"4">"4">"1" "popup">"menuitem">"0" "0">"value"',
	    expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
	  }, {
	    input: '"4">"4">"4">"1">"menu" "menuitem">"0">"menuitem2" "value"',
	    expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
	  }, {
	    input: ':equal(5555)',
	    expect: '2,3,3,0,1,1'
	  }, {
	    input: ':equal(6666)',
	    expect: '3,4,4,3,2,2'
	  }, {
	    input: ':equal(9000)',
	    expect: '4,4,4,0,2,2'
	  }, {
	    input: ':equal(22)',
	    expect: '0,3,0,1'
	  }, {
	    input: '>:equal(1000)',
	    expect: '6'
	  }, {
	    input: 'popup value',
	    expect: '4,4,4,1,menu,popup,menuitem,0,value'
	  }, {
	    input: 'popup>value',
	    expect: undefined
	  }, {
	    input: ':equal("CreateNewDoc()")',
	    expect: '0,3,4,onclick'
	  }, {
	    input: ':equal("CreateNewDoc2_1()")',
	    expect: '0,3,4,menuitem2,0,onclick'
	  }, {
	    input: 'popup>menuitem menuitem2 value',
	    expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
	  }, {
	    input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
	    expect: '4,4,4,1,menu,popup,menuitem,2,menuitem2,2,onclick'
	  }].forEach(function (testCase) {
	    it('should return ' + testCase.expect + ' when the select is ' + testCase.input, function () {
	      var result = (0, _main2.default)(data2, {}).selectOne(testCase.input);
	      if (result) {
	        _chai.assert.equal(result.path.toString(), testCase.expect);
	      } else {
	        _chai.assert.equal(result, testCase.expect);
	      }
	    });
	  });
	  [{
	    input: 'value',
	    expect: 13
	  }, {
	    input: 'popup value',
	    expect: 12
	  }, {
	    input: 'popup>value',
	    expect: 0
	  }, {
	    input: 'menuitem2 value',
	    expect: 9
	  }, {
	    input: '#file',
	    expect: 1
	  }, {
	    input: 'menu',
	    expect: 1
	  }, {
	    input: '>menu',
	    expect: 1
	  }, {
	    input: 'popup value, >menu',
	    expect: 13
	  }, {
	    input: ':equal("CreateNewDoc()")',
	    expect: 1
	  }, {
	    input: ':equal("CreateNewDoc2_1()")',
	    expect: 1
	  }, {
	    input: 'popup>menuitem menuitem2 value',
	    expect: 9
	  }, {
	    input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
	    expect: 1
	  }, {
	    input: ':regexpTest(/2_/)',
	    expect: 18
	  }, {
	    input: ':regexpTest(/2_/), :regexpTest(/2_/)',
	    expect: 18
	  }, {
	    input: '"0", "1"',
	    expect: 8
	  }, {
	    input: 'menuitem > "0" ~ *',
	    expect: 2
	  }].forEach(function (testCase) {
	    it('should return ' + (testCase.expectStr || JSON.stringify(testCase.expect)) + ' when the select is ' + JSON.stringify(testCase.input), function () {
	      var result = (0, _main2.default)(data1).selectAll(testCase.input);
	      _chai.assert.equal(result.length, testCase.expect);
	    });
	  });
	  [{
	    input: '>"0">"0">"0"',
	    expect: 1
	  }, {
	    input: '"4">"4">"4">"1">"menu">"popup">"menuitem">"0">"menuitem2">"0">"value"',
	    expect: 1
	  }, {
	    input: '"4">"4">"4">"1">"menu" "menuitem">"0">"menuitem2" "value"',
	    expect: 3
	  }, {
	    input: ':equal(5555)',
	    expect: 2
	  }, {
	    input: ':equal(22)',
	    expect: 1
	  }, {
	    input: ':equal(1), :equal(5)',
	    expect: 34
	  }, {
	    input: 'popup value',
	    expect: 12
	  }, {
	    input: 'popup>value',
	    expect: 0
	  }, {
	    input: ':equal("CreateNewDoc()")',
	    expect: 2
	  }, {
	    input: ':equal("CreateNewDoc2_1()")',
	    expect: 2
	  }, {
	    input: 'popup>menuitem menuitem2 value',
	    expect: 9
	  }, {
	    input: ':regexpTest(/2_/)',
	    expect: 36
	  }].forEach(function (testCase) {
	    it('should return ' + (testCase.expectStr || JSON.stringify(testCase.expect)) + ' when the select is ' + JSON.stringify(testCase.input), function () {
	      var result = (0, _main2.default)(data2).selectAll(testCase.input);
	      _chai.assert.equal(result.length, testCase.expect);
	    });
	  });
	  [{
	    input: {
	      select: ':gt(2000)',
	      option: {
	        pseudoClasses: {
	          gt: function gt(nodeInfo, v2) {
	            return nodeInfo.node > v2;
	          }
	        }
	      }
	    },
	    expect: 5
	  }, {
	    input: {
	      select: ':lt(1)',
	      option: {
	        pseudoClasses: {
	          lt: function lt(nodeInfo, v2) {
	            return nodeInfo.node < v2;
	          }
	        }
	      }
	    },
	    expect: 13
	  }].forEach(function (testCase) {
	    it('should return ' + testCase.expect + ' when the select is ' + JSON.stringify(testCase.input.select), function () {
	      var result = (0, _main2.default)(data2, testCase.input.option).selectAll(testCase.input.select);
	      _chai.assert.equal(result.length, testCase.expect);
	    });
	  });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _cssParser = __webpack_require__(3);
	
	var _cssParser2 = _interopRequireDefault(_cssParser);
	
	var _chai = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('cssParser', function () {
	
	  describe('Token', function () {
	    describe('S', function () {
	      it('in pseudo_class', function () {
	        var token = _cssParser2.default.parse(":test(1 ,  1   )")[0][1][0].toString();
	        _chai.assert.equal(token, ':test(1,1)');
	      });
	      it('in attrib', function () {
	        var token = _cssParser2.default.parse("[attr =  ''   i    ]")[0][1][0].toString();
	        _chai.assert.equal(token, '[attr="" i]');
	      });
	      it('between combinator', function () {
	        var token = _cssParser2.default.parse("div > span").toString();
	        _chai.assert.equal(token, ' div>span');
	      });
	      it('be combinator', function () {
	        var token = _cssParser2.default.parse(" div span")[0][2].toString();
	        _chai.assert.equal(token, ' ');
	      });
	      it('in scope_relative_selector_list', function () {
	        var token = _cssParser2.default.parse("a,a  , a").toString();
	        _chai.assert.equal(token, ' a, a, a');
	      });
	    });
	    describe('NUMBER', function () {
	      describe('SING', function () {
	        it('in INDEX', function () {
	          var token = _cssParser2.default.parse(":test(1e-1)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(0.1)');
	        });
	        describe('at beginning of NUMBER', function () {
	
	          it('with FLOAT', function () {
	            var token = _cssParser2.default.parse(":test(+.10)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(0.1)');
	          });
	          it('with DECIMAL', function () {
	            var token = _cssParser2.default.parse(":test(-10)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(-10)');
	          });
	          it('with HEXADECIMAL', function () {
	            var token = _cssParser2.default.parse(":test(+0x10)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(16)');
	          });
	          it('with OCTAL', function () {
	            var token = _cssParser2.default.parse(":test(-0o10)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(-8)');
	          });
	          it('with BINARY', function () {
	            var token = _cssParser2.default.parse(":test(+0b10)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(2)');
	          });
	          it('INFINITY', function () {
	            var token = _cssParser2.default.parse(":test(-Infinity)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(-Infinity)');
	          });
	          it('NaN', function () {
	            var token = _cssParser2.default.parse(":test(+NaN)")[0][1][0].toString();
	            _chai.assert.equal(token, ':test(NaN)');
	          });
	        });
	      });
	      describe('FLOAT', function () {
	        it('without INDEX', function () {
	          var token = _cssParser2.default.parse(":test(.0101)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(0.0101)');
	        });
	        it('with INDEX', function () {
	          var token = _cssParser2.default.parse(":test(.0101e2)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(1.01)');
	        });
	      });
	      describe('DECIMAL', function () {
	        it('integer', function () {
	          var token = _cssParser2.default.parse(":test(100)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(100)');
	        });
	        it('float', function () {
	          var token = _cssParser2.default.parse(":test(100.01)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(100.01)');
	        });
	        it('with INDEX', function () {
	          var token = _cssParser2.default.parse(":test(100e-2)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(1)');
	        });
	        it('OCTAL case, beginning with 0', function () {
	          var token = _cssParser2.default.parse(":test(010)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(8)');
	        });
	      });
	      describe('HEXADECIMAL', function () {
	        it('with "X"', function () {
	          var token = _cssParser2.default.parse(":test(0X10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(16)');
	        });
	        it('with "x"', function () {
	          var token = _cssParser2.default.parse(":test(0x10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(16)');
	        });
	      });
	      describe('OCTAL', function () {
	        it('with "O"', function () {
	          var token = _cssParser2.default.parse(":test(0X10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(16)');
	        });
	        it('with "o"', function () {
	          var token = _cssParser2.default.parse(":test(0x10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(16)');
	        });
	      });
	      describe('BINARY', function () {
	        it('with "B"', function () {
	          var token = _cssParser2.default.parse(":test(0B10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(2)');
	        });
	        it('with "b"', function () {
	          var token = _cssParser2.default.parse(":test(0b10)")[0][1][0].toString();
	          _chai.assert.equal(token, ':test(2)');
	        });
	      });
	      it('INFINITY', function () {
	        var token = _cssParser2.default.parse(":test(Infinity)")[0][1][0].toString();
	        _chai.assert.equal(token, ':test(Infinity)');
	      });
	      it('NaN', function () {
	        var token = _cssParser2.default.parse(":test(NaN)")[0][1][0].toString();
	        _chai.assert.equal(token, ':test(NaN)');
	      });
	    });
	    describe('String', function () {
	      it('String1', function () {
	        var token = _cssParser2.default.parse(':test("string")')[0][1][0].toString();
	        _chai.assert.equal(token, ':test("string")');
	      });
	      it('String2', function () {
	        var token = _cssParser2.default.parse(':test(\'string\')')[0][1][0].toString();
	        _chai.assert.equal(token, ':test("string")');
	      });
	      it('with "\\."', function () {
	        var token = _cssParser2.default.parse(':test(\'\\\'\\\t\')')[0][1][0].toString();
	        _chai.assert.equal(token, ':test("\'\t")');
	      });
	    });
	    describe('REGEX', function () {
	      it('with "\\."', function () {
	        var token = _cssParser2.default.parse(':test(/\\n\\s\\t/)')[0][1][0].toString();
	        _chai.assert.equal(token, ':test(/\\n\\s\\t/)');
	      });
	      it('with flag', function () {
	        var token = _cssParser2.default.parse(':test(/\\n\\s\\t/i)')[0][1][0].toString();
	        _chai.assert.equal(token, ':test(/\\n\\s\\t/i)');
	      });
	    });
	    describe('IDENT', function () {
	      it('when value is div', function () {
	        var token = _cssParser2.default.parse('div')[0][1][0].toString();
	        _chai.assert.equal(token, 'div');
	      });
	      it('when value is _$div', function () {
	        var token = _cssParser2.default.parse('_$div')[0][1][0].toString();
	        _chai.assert.equal(token, '_$div');
	      });
	      it('when value is 中文', function () {
	        var token = _cssParser2.default.parse('中文')[0][1][0].toString();
	        _chai.assert.equal(token, '中文');
	      });
	      it('when value is 0div, should throw exception', function () {
	        try {
	          var token = _cssParser2.default.parse('0div')[0][1][0].toString();
	        } catch (e) {
	          (0, _chai.assert)(true);
	        }
	      });
	    });
	    describe('PROP', function () {
	      it('when value is letter0123', function () {
	        var token = _cssParser2.default.parse('letter0123')[0][1][0].toString();
	        _chai.assert.equal(token, 'letter0123');
	      });
	      it('when value is "0001"', function () {
	        var token = _cssParser2.default.parse('"0001"')[0][1][0].toString();
	        _chai.assert.equal(token, '0001');
	      });
	    });
	    describe('ATTRIB_FLAGS', function () {
	      it('letters', function () {
	        var token = _cssParser2.default.parse('[attr="A" flag]')[0][1][0].flag.join('');
	        _chai.assert.equal(token, 'flag');
	      });
	    });
	    describe('ATTRIB_MATCH', function () {
	      it('=', function () {
	        var token = _cssParser2.default.parse('[attr="A"]')[0][1][0].operator;
	        _chai.assert.equal(token, '=');
	      });
	      it('^=', function () {
	        var token = _cssParser2.default.parse('[attr^="A"]')[0][1][0].operator;
	        _chai.assert.equal(token, '^=');
	      });
	      it('$=', function () {
	        var token = _cssParser2.default.parse('[attr$="A"]')[0][1][0].operator;
	        _chai.assert.equal(token, '$=');
	      });
	      it('*=', function () {
	        var token = _cssParser2.default.parse('[attr*="A"]')[0][1][0].operator;
	        _chai.assert.equal(token, '*=');
	      });
	    });
	    describe('VALUE', function () {
	      it('in attrib', function () {
	        var token = _cssParser2.default.parse('[attr=123]')[0][1][0].value;
	        _chai.assert.equal(token, '123');
	      });
	      it('in pseudo_class', function () {
	        var token = _cssParser2.default.parse(':test(123,"str",/regexp/g)')[0][1][0].args;
	        _chai.assert.strictEqual(token[0], 123);
	        _chai.assert.strictEqual(token[1], 'str');
	        _chai.assert.deepEqual(token[2], /regexp/g);
	      });
	    });
	  });
	
	  describe('Statement', function () {
	    describe('pseudo_class', function () {
	      it('without argument', function () {
	        var token = _cssParser2.default.parse(":test")[0][1][0];
	        _chai.assert.equal(token.ident, 'test');
	        _chai.assert.deepEqual(token.args, []);
	      });
	      it('with arguments', function () {
	        var token = _cssParser2.default.parse(":test(1, '1', /1/)")[0][1][0];
	        _chai.assert.equal(token.ident, 'test');
	        _chai.assert.deepEqual(token.args, [1, '1', /1/]);
	      });
	    });
	    describe('attrib', function () {
	      it('without value and flags', function () {
	        var token = _cssParser2.default.parse("[attr]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, undefined);
	        _chai.assert.equal(token.value, undefined);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('use STRING', function () {
	        var token = _cssParser2.default.parse("['attr']")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, undefined);
	        _chai.assert.equal(token.value, undefined);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('with "=" operator', function () {
	        var token = _cssParser2.default.parse("[attr=123]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, '=');
	        _chai.assert.equal(token.value, 123);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('with "^=" operator', function () {
	        var token = _cssParser2.default.parse("[attr^=123]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, '^=');
	        _chai.assert.equal(token.value, 123);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('with "$=" operator', function () {
	        var token = _cssParser2.default.parse("[attr$=123]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, '$=');
	        _chai.assert.equal(token.value, 123);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('with "*=" operator', function () {
	        var token = _cssParser2.default.parse("[attr*=123]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, '*=');
	        _chai.assert.equal(token.value, 123);
	        _chai.assert.deepEqual(token.flag, undefined);
	      });
	      it('with flags', function () {
	        var token = _cssParser2.default.parse("[attr=123 i]")[0][1][0];
	        _chai.assert.equal(token.ident, 'attr');
	        _chai.assert.equal(token.operator, '=');
	        _chai.assert.equal(token.value, 123);
	        _chai.assert.deepEqual(token.flag, ['i']);
	      });
	    });
	    describe('class', function () {
	      it('when value is .div', function () {
	        var token = _cssParser2.default.parse('.div')[0][1][0];
	        _chai.assert.equal(token.ident, 'div');
	      });
	      it('when value is ._$div', function () {
	        var token = _cssParser2.default.parse('._$div')[0][1][0];
	        _chai.assert.equal(token.ident, '_$div');
	      });
	      it('when value is .中文', function () {
	        var token = _cssParser2.default.parse('.中文')[0][1][0];
	        _chai.assert.equal(token.ident, '中文');
	      });
	    });
	    describe('id', function () {
	      it('when value is NUMBER', function () {
	        var token = _cssParser2.default.parse('#3000')[0][1][0];
	        _chai.assert.strictEqual(token.ident, 3000);
	      });
	      it('when value is STRING', function () {
	        var token = _cssParser2.default.parse('#"EX-1"')[0][1][0];
	        _chai.assert.strictEqual(token.ident, 'EX-1');
	      });
	      it('when value is IDENT', function () {
	        var token = _cssParser2.default.parse('#test')[0][1][0];
	        _chai.assert.strictEqual(token.ident, 'test');
	      });
	    });
	    describe('prop', function () {
	      it('when value is STRING', function () {
	        var token = _cssParser2.default.parse('"EX-1"')[0][1][0];
	        _chai.assert.strictEqual(token.ident, 'EX-1');
	      });
	      it('when value is IDENT', function () {
	        var token = _cssParser2.default.parse('test')[0][1][0];
	        _chai.assert.strictEqual(token.ident, 'test');
	      });
	      it('when value is *', function () {
	        var token = _cssParser2.default.parse('*')[0][1][0];
	        _chai.assert.strictEqual(token.ident, '*');
	      });
	    });
	    describe('compound_selector', function () {
	      it('pseudo_class only', function () {
	        var token = _cssParser2.default.parse(':test1:test2(2)')[0][1];
	        _chai.assert.equal(token[0].ident, 'test1');
	        _chai.assert.deepEqual(token[0].args, []);
	        _chai.assert.equal(token[1].ident, 'test2');
	        _chai.assert.deepEqual(token[1].args, [2]);
	      });
	      it('exclude prop', function () {
	        var token = _cssParser2.default.parse('#id.class1.class2:test1:test2(2)')[0][1];
	        _chai.assert.equal(token[0].ident, 'id');
	        _chai.assert.equal(token[1].ident, 'class1');
	        _chai.assert.equal(token[2].ident, 'class2');
	        _chai.assert.equal(token[3].ident, 'test1');
	        _chai.assert.deepEqual(token[3].args, []);
	        _chai.assert.equal(token[4].ident, 'test2');
	        _chai.assert.deepEqual(token[4].args, [2]);
	      });
	      it('with all', function () {
	        var token = _cssParser2.default.parse('prop#id.class1.class2:test1:test2(2)')[0][1];
	        _chai.assert.equal(token[0].ident, 'prop');
	        _chai.assert.equal(token[1].ident, 'id');
	        _chai.assert.equal(token[2].ident, 'class1');
	        _chai.assert.equal(token[3].ident, 'class2');
	        _chai.assert.equal(token[4].ident, 'test1');
	        _chai.assert.deepEqual(token[4].args, []);
	        _chai.assert.equal(token[5].ident, 'test2');
	        _chai.assert.deepEqual(token[5].args, [2]);
	      });
	    });
	    describe('combinator', function () {
	      it('" "', function () {
	        var token = _cssParser2.default.parse('div a')[0][2];
	        _chai.assert.strictEqual(token.operator, ' ');
	      });
	      it('">"', function () {
	        var token = _cssParser2.default.parse('div>a')[0][2];
	        _chai.assert.strictEqual(token.operator, '>');
	      });
	      it('"~"', function () {
	        var token = _cssParser2.default.parse('div~a')[0][2];
	        _chai.assert.strictEqual(token.operator, '~');
	      });
	    });
	    describe('scope_relative_selector', function () {
	      it('when statement is "div span :test1"', function () {
	        var token = _cssParser2.default.parse('div>a')[0].toString();
	        _chai.assert.equal(token, ' div>a');
	      });
	      it('when statement beginning of combinator', function () {
	        var token = _cssParser2.default.parse('>div span')[0].toString();
	        _chai.assert.equal(token, '>div span');
	      });
	      it('if statment beginning isn\'t combinator, insert " " combinator', function () {
	        var token = _cssParser2.default.parse('div~a')[0].toString();
	        _chai.assert.equal(token, ' div~a');
	      });
	    });
	    describe('scope_relative_selector_list', function () {
	      it('a relative selector', function () {
	        var token = _cssParser2.default.parse('div~a').toString();
	        _chai.assert.equal(token, ' div~a');
	      });
	      it('multi relative selectors', function () {
	        var token = _cssParser2.default.parse('div, span,p b').toString();
	        _chai.assert.equal(token, ' div, span, p b');
	      });
	    });
	  });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = (function() {
	  "use strict";
	
	  /*
	   * Generated by PEG.js 0.9.0.
	   *
	   * http://pegjs.org/
	   */
	
	  function peg$subclass(child, parent) {
	    function ctor() { this.constructor = child; }
	    ctor.prototype = parent.prototype;
	    child.prototype = new ctor();
	  }
	
	  function peg$SyntaxError(message, expected, found, location) {
	    this.message  = message;
	    this.expected = expected;
	    this.found    = found;
	    this.location = location;
	    this.name     = "SyntaxError";
	
	    if (typeof Error.captureStackTrace === "function") {
	      Error.captureStackTrace(this, peg$SyntaxError);
	    }
	  }
	
	  peg$subclass(peg$SyntaxError, Error);
	
	  function peg$parse(input) {
	    var options = arguments.length > 1 ? arguments[1] : {},
	        parser  = this,
	
	        peg$FAILED = {},
	
	        peg$startRuleFunctions = { scope_relative_selector_list: peg$parsescope_relative_selector_list },
	        peg$startRuleFunction  = peg$parsescope_relative_selector_list,
	
	        peg$c0 = ",",
	        peg$c1 = { type: "literal", value: ",", description: "\",\"" },
	        peg$c2 = function(first, next) {
	            var result = [first];
	            for (var i in next) {
	              result.push(next[i][2]);
	            }
	
	            return result;
	          },
	        peg$c3 = function(first_comb, first_comp, more) {
	            var result = [];
	            for (var i in more) {
	              var item = more[i];
	              result.push(item[0], item[1]);
	            }
	
	            result.unshift(first_comp);
	
	            if (first_comb) {
	              result.unshift(first_comb);
	            } else {
	              result.unshift(new Combinator(" "));
	            }
	
	            return new Selector(result);
	          },
	        peg$c4 = ">",
	        peg$c5 = { type: "literal", value: ">", description: "\">\"" },
	        peg$c6 = "~",
	        peg$c7 = { type: "literal", value: "~", description: "\"~\"" },
	        peg$c8 = function() {
	            return new Combinator(text().trim());
	          },
	        peg$c9 = function() {
	            return new Combinator(" ");
	          },
	        peg$c10 = function(pseudo_class) {
	            return new Compound(undefined, undefined, pseudo_class);
	          },
	        peg$c11 = function(compound, pseudo_class) {
	            return new Compound(compound[0], compound[1], pseudo_class);
	          },
	        peg$c12 = function(compound, pseudo_class) {
	            return new Compound(undefined, compound, pseudo_class);
	          },
	        peg$c13 = "*",
	        peg$c14 = { type: "literal", value: "*", description: "\"*\"" },
	        peg$c15 = function(prop) {
	            return new Prop(prop);
	          },
	        peg$c16 = "#",
	        peg$c17 = { type: "literal", value: "#", description: "\"#\"" },
	        peg$c18 = function(val) {
	            return new Id(val);
	          },
	        peg$c19 = ".",
	        peg$c20 = { type: "literal", value: ".", description: "\".\"" },
	        peg$c21 = function(val) {
	            return new Class(val);
	          },
	        peg$c22 = "[",
	        peg$c23 = { type: "literal", value: "[", description: "\"[\"" },
	        peg$c24 = "]",
	        peg$c25 = { type: "literal", value: "]", description: "\"]\"" },
	        peg$c26 = function(name, exp) {
	            var ident = name,operator, value, flag;
	            if (exp) {
	              operator = exp[0];
	              value = exp[2];
	              if (exp[3]) {
	                flag = exp[3][1];
	              }
	            }
	
	            return new Attribute(name,operator, value, flag);
	          },
	        peg$c27 = ":",
	        peg$c28 = { type: "literal", value: ":", description: "\":\"" },
	        peg$c29 = "(",
	        peg$c30 = { type: "literal", value: "(", description: "\"(\"" },
	        peg$c31 = ")",
	        peg$c32 = { type: "literal", value: ")", description: "\")\"" },
	        peg$c33 = function(ident, val) {
	            if (val) {
	              var tmp = [];
	              tmp.push(val[2]);
	              for (var i in val[3]) {
	                tmp.push(val[3][i][3]);
	              }
	
	              val = tmp;
	            }
	
	            return new PseudoClass(ident, val);
	          },
	        peg$c34 = "=",
	        peg$c35 = { type: "literal", value: "=", description: "\"=\"" },
	        peg$c36 = "^=",
	        peg$c37 = { type: "literal", value: "^=", description: "\"^=\"" },
	        peg$c38 = "$=",
	        peg$c39 = { type: "literal", value: "$=", description: "\"$=\"" },
	        peg$c40 = "*=",
	        peg$c41 = { type: "literal", value: "*=", description: "\"*=\"" },
	        peg$c42 = /^[A-Za-z]/,
	        peg$c43 = { type: "class", value: "[A-Za-z]", description: "[A-Za-z]" },
	        peg$c44 = /^[$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
	        peg$c45 = { type: "class", value: "[$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", description: "[$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]" },
	        peg$c46 = /^[$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F0\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC0-9\u0300-\u036F\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u08FE\u0900-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C01-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C82\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D02\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19B0-\u19C0\u19C8\u19C9\u19D0-\u19D9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1DC0-\u1DE6\u1DFC-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F1\uA900-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE26\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]/,
	        peg$c47 = { type: "class", value: "[$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc0-9\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u064b-\\u0669\\u0670\\u06d6-\\u06dc\\u06df-\\u06e4\\u06e7\\u06e8\\u06ea-\\u06ed\\u06f0-\\u06f9\\u0711\\u0730-\\u074a\\u07a6-\\u07b0\\u07c0-\\u07c9\\u07eb-\\u07f3\\u0816-\\u0819\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0859-\\u085b\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09cb-\\u09cd\\u09d7\\u09e2\\u09e3\\u09e6-\\u09ef\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b62\\u0b63\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c3e-\\u0c44\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d3e-\\u0d44\\u0d46-\\u0d48\\u0d4a-\\u0d4d\\u0d57\\u0d62\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e31\\u0e34-\\u0e3a\\u0e47-\\u0e4e\\u0e50-\\u0e59\\u0eb1\\u0eb4-\\u0eb9\\u0ebb\\u0ebc\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f3e\\u0f3f\\u0f71-\\u0f84\\u0f86\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u102b-\\u103e\\u1040-\\u1049\\u1056-\\u1059\\u105e-\\u1060\\u1062-\\u1064\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17b4-\\u17d3\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u18a9\\u1920-\\u192b\\u1930-\\u193b\\u1946-\\u194f\\u19b0-\\u19c0\\u19c8\\u19c9\\u19d0-\\u19d9\\u1a17-\\u1a1b\\u1a55-\\u1a5e\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b00-\\u1b04\\u1b34-\\u1b44\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1b80-\\u1b82\\u1ba1-\\u1bad\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c24-\\u1c37\\u1c40-\\u1c49\\u1c50-\\u1c59\\u1cd0-\\u1cd2\\u1cd4-\\u1ce8\\u1ced\\u1cf2-\\u1cf4\\u1dc0-\\u1de6\\u1dfc-\\u1dff\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2cef-\\u2cf1\\u2d7f\\u2de0-\\u2dff\\u302a-\\u302f\\u3099\\u309a\\ua620-\\ua629\\ua66f\\ua674-\\ua67d\\ua69f\\ua6f0\\ua6f1\\ua802\\ua806\\ua80b\\ua823-\\ua827\\ua880\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8e0-\\ua8f1\\ua900-\\ua909\\ua926-\\ua92d\\ua947-\\ua953\\ua980-\\ua983\\ua9b3-\\ua9c0\\ua9d0-\\ua9d9\\uaa29-\\uaa36\\uaa43\\uaa4c\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaab0\\uaab2-\\uaab4\\uaab7\\uaab8\\uaabe\\uaabf\\uaac1\\uaaeb-\\uaaef\\uaaf5\\uaaf6\\uabe3-\\uabea\\uabec\\uabed\\uabf0-\\uabf9\\ufb1e\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f]", description: "[$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc0-9\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u064b-\\u0669\\u0670\\u06d6-\\u06dc\\u06df-\\u06e4\\u06e7\\u06e8\\u06ea-\\u06ed\\u06f0-\\u06f9\\u0711\\u0730-\\u074a\\u07a6-\\u07b0\\u07c0-\\u07c9\\u07eb-\\u07f3\\u0816-\\u0819\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0859-\\u085b\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09cb-\\u09cd\\u09d7\\u09e2\\u09e3\\u09e6-\\u09ef\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b62\\u0b63\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c3e-\\u0c44\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d3e-\\u0d44\\u0d46-\\u0d48\\u0d4a-\\u0d4d\\u0d57\\u0d62\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e31\\u0e34-\\u0e3a\\u0e47-\\u0e4e\\u0e50-\\u0e59\\u0eb1\\u0eb4-\\u0eb9\\u0ebb\\u0ebc\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f3e\\u0f3f\\u0f71-\\u0f84\\u0f86\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u102b-\\u103e\\u1040-\\u1049\\u1056-\\u1059\\u105e-\\u1060\\u1062-\\u1064\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17b4-\\u17d3\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u18a9\\u1920-\\u192b\\u1930-\\u193b\\u1946-\\u194f\\u19b0-\\u19c0\\u19c8\\u19c9\\u19d0-\\u19d9\\u1a17-\\u1a1b\\u1a55-\\u1a5e\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b00-\\u1b04\\u1b34-\\u1b44\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1b80-\\u1b82\\u1ba1-\\u1bad\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c24-\\u1c37\\u1c40-\\u1c49\\u1c50-\\u1c59\\u1cd0-\\u1cd2\\u1cd4-\\u1ce8\\u1ced\\u1cf2-\\u1cf4\\u1dc0-\\u1de6\\u1dfc-\\u1dff\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2cef-\\u2cf1\\u2d7f\\u2de0-\\u2dff\\u302a-\\u302f\\u3099\\u309a\\ua620-\\ua629\\ua66f\\ua674-\\ua67d\\ua69f\\ua6f0\\ua6f1\\ua802\\ua806\\ua80b\\ua823-\\ua827\\ua880\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8e0-\\ua8f1\\ua900-\\ua909\\ua926-\\ua92d\\ua947-\\ua953\\ua980-\\ua983\\ua9b3-\\ua9c0\\ua9d0-\\ua9d9\\uaa29-\\uaa36\\uaa43\\uaa4c\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaab0\\uaab2-\\uaab4\\uaab7\\uaab8\\uaabe\\uaabf\\uaac1\\uaaeb-\\uaaef\\uaaf5\\uaaf6\\uabe3-\\uabea\\uabec\\uabed\\uabf0-\\uabf9\\ufb1e\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f]" },
	        peg$c48 = function() {
	            return text();
	          },
	        peg$c49 = "/",
	        peg$c50 = { type: "literal", value: "/", description: "\"/\"" },
	        peg$c51 = "\\",
	        peg$c52 = { type: "literal", value: "\\", description: "\"\\\\\"" },
	        peg$c53 = { type: "any", description: "any character" },
	        peg$c54 = /^[^\/\\]/,
	        peg$c55 = { type: "class", value: "[^/\\\\]", description: "[^/\\\\]" },
	        peg$c56 = function(source, flag) {
	            var src = '', item;
	            for (var i in source) {
	              item = source[i];
	              src = src + (item instanceof Array?item.join(''):item);
	            }
	
	            return new RegExp(src, flag.join(''));
	          },
	        peg$c57 = function() {
	            return eval(text());
	          },
	        peg$c58 = "\"",
	        peg$c59 = { type: "literal", value: "\"", description: "\"\\\"\"" },
	        peg$c60 = /^[^"\\]/,
	        peg$c61 = { type: "class", value: "[^\"\\\\]", description: "[^\"\\\\]" },
	        peg$c62 = "'",
	        peg$c63 = { type: "literal", value: "'", description: "\"'\"" },
	        peg$c64 = /^[^'\\]/,
	        peg$c65 = { type: "class", value: "[^'\\\\]", description: "[^'\\\\]" },
	        peg$c66 = function(sign, val) {
	            return (sign=='-')?-val:val;
	          },
	        peg$c67 = "NaN",
	        peg$c68 = { type: "literal", value: "NaN", description: "\"NaN\"" },
	        peg$c69 = function() {
	            return NaN;
	          },
	        peg$c70 = "Infinity",
	        peg$c71 = { type: "literal", value: "Infinity", description: "\"Infinity\"" },
	        peg$c72 = function() {
	            return Infinity;
	          },
	        peg$c73 = "0",
	        peg$c74 = { type: "literal", value: "0", description: "\"0\"" },
	        peg$c75 = /^[Bb]/,
	        peg$c76 = { type: "class", value: "[Bb]", description: "[Bb]" },
	        peg$c77 = /^[01]/,
	        peg$c78 = { type: "class", value: "[01]", description: "[01]" },
	        peg$c79 = function() {
	            return Number(text());
	          },
	        peg$c80 = /^[Oo]/,
	        peg$c81 = { type: "class", value: "[Oo]", description: "[Oo]" },
	        peg$c82 = /^[0-7]/,
	        peg$c83 = { type: "class", value: "[0-7]", description: "[0-7]" },
	        peg$c84 = /^[Xx]/,
	        peg$c85 = { type: "class", value: "[Xx]", description: "[Xx]" },
	        peg$c86 = /^[0-9A-Fa-f]/,
	        peg$c87 = { type: "class", value: "[0-9A-Fa-f]", description: "[0-9A-Fa-f]" },
	        peg$c88 = /^[0-9]/,
	        peg$c89 = { type: "class", value: "[0-9]", description: "[0-9]" },
	        peg$c90 = function() {
	            var val = text();
	            if ( /^0[0-7]+$/.test(val) ) {
	              val = val.charAt(0) + 'O' + val.substr(1);
	            }
	
	            return Number(val);
	          },
	        peg$c91 = "e",
	        peg$c92 = { type: "literal", value: "e", description: "\"e\"" },
	        peg$c93 = /^[+\-]/,
	        peg$c94 = { type: "class", value: "[+-]", description: "[+-]" },
	        peg$c95 = /^[ \t\r\n\f]/,
	        peg$c96 = { type: "class", value: "[ \\t\\r\\n\\f]", description: "[ \\t\\r\\n\\f]" },
	
	        peg$currPos          = 0,
	        peg$savedPos         = 0,
	        peg$posDetailsCache  = [{ line: 1, column: 1, seenCR: false }],
	        peg$maxFailPos       = 0,
	        peg$maxFailExpected  = [],
	        peg$silentFails      = 0,
	
	        peg$result;
	
	    if ("startRule" in options) {
	      if (!(options.startRule in peg$startRuleFunctions)) {
	        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
	      }
	
	      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
	    }
	
	    function text() {
	      return input.substring(peg$savedPos, peg$currPos);
	    }
	
	    function location() {
	      return peg$computeLocation(peg$savedPos, peg$currPos);
	    }
	
	    function expected(description) {
	      throw peg$buildException(
	        null,
	        [{ type: "other", description: description }],
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }
	
	    function error(message) {
	      throw peg$buildException(
	        message,
	        null,
	        input.substring(peg$savedPos, peg$currPos),
	        peg$computeLocation(peg$savedPos, peg$currPos)
	      );
	    }
	
	    function peg$computePosDetails(pos) {
	      var details = peg$posDetailsCache[pos],
	          p, ch;
	
	      if (details) {
	        return details;
	      } else {
	        p = pos - 1;
	        while (!peg$posDetailsCache[p]) {
	          p--;
	        }
	
	        details = peg$posDetailsCache[p];
	        details = {
	          line:   details.line,
	          column: details.column,
	          seenCR: details.seenCR
	        };
	
	        while (p < pos) {
	          ch = input.charAt(p);
	          if (ch === "\n") {
	            if (!details.seenCR) { details.line++; }
	            details.column = 1;
	            details.seenCR = false;
	          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
	            details.line++;
	            details.column = 1;
	            details.seenCR = true;
	          } else {
	            details.column++;
	            details.seenCR = false;
	          }
	
	          p++;
	        }
	
	        peg$posDetailsCache[pos] = details;
	        return details;
	      }
	    }
	
	    function peg$computeLocation(startPos, endPos) {
	      var startPosDetails = peg$computePosDetails(startPos),
	          endPosDetails   = peg$computePosDetails(endPos);
	
	      return {
	        start: {
	          offset: startPos,
	          line:   startPosDetails.line,
	          column: startPosDetails.column
	        },
	        end: {
	          offset: endPos,
	          line:   endPosDetails.line,
	          column: endPosDetails.column
	        }
	      };
	    }
	
	    function peg$fail(expected) {
	      if (peg$currPos < peg$maxFailPos) { return; }
	
	      if (peg$currPos > peg$maxFailPos) {
	        peg$maxFailPos = peg$currPos;
	        peg$maxFailExpected = [];
	      }
	
	      peg$maxFailExpected.push(expected);
	    }
	
	    function peg$buildException(message, expected, found, location) {
	      function cleanupExpected(expected) {
	        var i = 1;
	
	        expected.sort(function(a, b) {
	          if (a.description < b.description) {
	            return -1;
	          } else if (a.description > b.description) {
	            return 1;
	          } else {
	            return 0;
	          }
	        });
	
	        while (i < expected.length) {
	          if (expected[i - 1] === expected[i]) {
	            expected.splice(i, 1);
	          } else {
	            i++;
	          }
	        }
	      }
	
	      function buildMessage(expected, found) {
	        function stringEscape(s) {
	          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }
	
	          return s
	            .replace(/\\/g,   '\\\\')
	            .replace(/"/g,    '\\"')
	            .replace(/\x08/g, '\\b')
	            .replace(/\t/g,   '\\t')
	            .replace(/\n/g,   '\\n')
	            .replace(/\f/g,   '\\f')
	            .replace(/\r/g,   '\\r')
	            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
	            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
	            .replace(/[\u0100-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
	            .replace(/[\u1000-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
	        }
	
	        var expectedDescs = new Array(expected.length),
	            expectedDesc, foundDesc, i;
	
	        for (i = 0; i < expected.length; i++) {
	          expectedDescs[i] = expected[i].description;
	        }
	
	        expectedDesc = expected.length > 1
	          ? expectedDescs.slice(0, -1).join(", ")
	              + " or "
	              + expectedDescs[expected.length - 1]
	          : expectedDescs[0];
	
	        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";
	
	        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
	      }
	
	      if (expected !== null) {
	        cleanupExpected(expected);
	      }
	
	      return new peg$SyntaxError(
	        message !== null ? message : buildMessage(expected, found),
	        expected,
	        found,
	        location
	      );
	    }
	
	    function peg$parsescope_relative_selector_list() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8;
	
	      s0 = peg$currPos;
	      s1 = peg$parsescope_relative_selector();
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseS();
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 44) {
	            s5 = peg$c0;
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c1); }
	          }
	          if (s5 !== peg$FAILED) {
	            s6 = peg$parseS();
	            if (s6 === peg$FAILED) {
	              s6 = null;
	            }
	            if (s6 !== peg$FAILED) {
	              s7 = peg$parsescope_relative_selector();
	              if (s7 !== peg$FAILED) {
	                s8 = peg$parseS();
	                if (s8 === peg$FAILED) {
	                  s8 = null;
	                }
	                if (s8 !== peg$FAILED) {
	                  s5 = [s5, s6, s7, s8];
	                  s4 = s5;
	                } else {
	                  peg$currPos = s4;
	                  s4 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s4;
	                s4 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s4;
	              s4 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s4;
	            s4 = peg$FAILED;
	          }
	          while (s4 !== peg$FAILED) {
	            s3.push(s4);
	            s4 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 44) {
	              s5 = peg$c0;
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c1); }
	            }
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parseS();
	              if (s6 === peg$FAILED) {
	                s6 = null;
	              }
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parsescope_relative_selector();
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseS();
	                  if (s8 === peg$FAILED) {
	                    s8 = null;
	                  }
	                  if (s8 !== peg$FAILED) {
	                    s5 = [s5, s6, s7, s8];
	                    s4 = s5;
	                  } else {
	                    peg$currPos = s4;
	                    s4 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s4;
	                  s4 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s4;
	                s4 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s4;
	              s4 = peg$FAILED;
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseS();
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c2(s1, s3);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parsescope_relative_selector() {
	      var s0, s1, s2, s3, s4, s5, s6;
	
	      s0 = peg$currPos;
	      s1 = peg$parsecombinator();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parsecompound_selector();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$currPos;
	          s5 = peg$parsecombinator();
	          if (s5 !== peg$FAILED) {
	            s6 = peg$parsecompound_selector();
	            if (s6 !== peg$FAILED) {
	              s5 = [s5, s6];
	              s4 = s5;
	            } else {
	              peg$currPos = s4;
	              s4 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s4;
	            s4 = peg$FAILED;
	          }
	          while (s4 !== peg$FAILED) {
	            s3.push(s4);
	            s4 = peg$currPos;
	            s5 = peg$parsecombinator();
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parsecompound_selector();
	              if (s6 !== peg$FAILED) {
	                s5 = [s5, s6];
	                s4 = s5;
	              } else {
	                peg$currPos = s4;
	                s4 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s4;
	              s4 = peg$FAILED;
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c3(s1, s2, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parsecombinator() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      s1 = peg$parseS();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        if (input.charCodeAt(peg$currPos) === 62) {
	          s2 = peg$c4;
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c5); }
	        }
	        if (s2 === peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 126) {
	            s2 = peg$c6;
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c7); }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseS();
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c8();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = [];
	        s2 = peg$parseS();
	        if (s2 !== peg$FAILED) {
	          while (s2 !== peg$FAILED) {
	            s1.push(s2);
	            s2 = peg$parseS();
	          }
	        } else {
	          s1 = peg$FAILED;
	        }
	        if (s1 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c9();
	        }
	        s0 = s1;
	      }
	
	      return s0;
	    }
	
	    function peg$parsecompound_selector() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      s1 = [];
	      s2 = peg$parsepseudo_class();
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          s2 = peg$parsepseudo_class();
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c10(s1);
	      }
	      s0 = s1;
	      if (s0 === peg$FAILED) {
	        s0 = peg$currPos;
	        s1 = peg$currPos;
	        s2 = peg$parseprop();
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          s4 = peg$parseid();
	          if (s4 === peg$FAILED) {
	            s4 = peg$parseclass();
	            if (s4 === peg$FAILED) {
	              s4 = peg$parseattrib();
	            }
	          }
	          while (s4 !== peg$FAILED) {
	            s3.push(s4);
	            s4 = peg$parseid();
	            if (s4 === peg$FAILED) {
	              s4 = peg$parseclass();
	              if (s4 === peg$FAILED) {
	                s4 = peg$parseattrib();
	              }
	            }
	          }
	          if (s3 !== peg$FAILED) {
	            s2 = [s2, s3];
	            s1 = s2;
	          } else {
	            peg$currPos = s1;
	            s1 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s1;
	          s1 = peg$FAILED;
	        }
	        if (s1 !== peg$FAILED) {
	          s2 = [];
	          s3 = peg$parsepseudo_class();
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            s3 = peg$parsepseudo_class();
	          }
	          if (s2 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c11(s1, s2);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	        if (s0 === peg$FAILED) {
	          s0 = peg$currPos;
	          s1 = [];
	          s2 = peg$parseid();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parseclass();
	            if (s2 === peg$FAILED) {
	              s2 = peg$parseattrib();
	            }
	          }
	          if (s2 !== peg$FAILED) {
	            while (s2 !== peg$FAILED) {
	              s1.push(s2);
	              s2 = peg$parseid();
	              if (s2 === peg$FAILED) {
	                s2 = peg$parseclass();
	                if (s2 === peg$FAILED) {
	                  s2 = peg$parseattrib();
	                }
	              }
	            }
	          } else {
	            s1 = peg$FAILED;
	          }
	          if (s1 !== peg$FAILED) {
	            s2 = [];
	            s3 = peg$parsepseudo_class();
	            while (s3 !== peg$FAILED) {
	              s2.push(s3);
	              s3 = peg$parsepseudo_class();
	            }
	            if (s2 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c12(s1, s2);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseprop() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 42) {
	        s1 = peg$c13;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c14); }
	      }
	      if (s1 === peg$FAILED) {
	        s1 = peg$parsePROP();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c15(s1);
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseid() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 35) {
	        s1 = peg$c16;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c17); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseNUMBER();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parseSTRING();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parseIDENT();
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c18(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseclass() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 46) {
	        s1 = peg$c19;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c20); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseIDENT();
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c21(s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseattrib() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 91) {
	        s1 = peg$c22;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c23); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseS();
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parsePROP();
	          if (s3 !== peg$FAILED) {
	            s4 = peg$parseS();
	            if (s4 === peg$FAILED) {
	              s4 = null;
	            }
	            if (s4 !== peg$FAILED) {
	              s5 = peg$currPos;
	              s6 = peg$parseATTRIB_MATCH();
	              if (s6 !== peg$FAILED) {
	                s7 = peg$parseS();
	                if (s7 === peg$FAILED) {
	                  s7 = null;
	                }
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseVALUE();
	                  if (s8 !== peg$FAILED) {
	                    s9 = peg$currPos;
	                    s10 = peg$parseS();
	                    if (s10 !== peg$FAILED) {
	                      s11 = peg$parseATTRIB_FLAGS();
	                      if (s11 !== peg$FAILED) {
	                        s10 = [s10, s11];
	                        s9 = s10;
	                      } else {
	                        peg$currPos = s9;
	                        s9 = peg$FAILED;
	                      }
	                    } else {
	                      peg$currPos = s9;
	                      s9 = peg$FAILED;
	                    }
	                    if (s9 === peg$FAILED) {
	                      s9 = null;
	                    }
	                    if (s9 !== peg$FAILED) {
	                      s6 = [s6, s7, s8, s9];
	                      s5 = s6;
	                    } else {
	                      peg$currPos = s5;
	                      s5 = peg$FAILED;
	                    }
	                  } else {
	                    peg$currPos = s5;
	                    s5 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s5;
	                  s5 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s5;
	                s5 = peg$FAILED;
	              }
	              if (s5 === peg$FAILED) {
	                s5 = null;
	              }
	              if (s5 !== peg$FAILED) {
	                s6 = peg$parseS();
	                if (s6 === peg$FAILED) {
	                  s6 = null;
	                }
	                if (s6 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 93) {
	                    s7 = peg$c24;
	                    peg$currPos++;
	                  } else {
	                    s7 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c25); }
	                  }
	                  if (s7 !== peg$FAILED) {
	                    peg$savedPos = s0;
	                    s1 = peg$c26(s3, s5);
	                    s0 = s1;
	                  } else {
	                    peg$currPos = s0;
	                    s0 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s0;
	                  s0 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s0;
	                s0 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parsepseudo_class() {
	      var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 58) {
	        s1 = peg$c27;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c28); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseIDENT();
	        if (s2 !== peg$FAILED) {
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 40) {
	            s4 = peg$c29;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c30); }
	          }
	          if (s4 !== peg$FAILED) {
	            s5 = peg$parseS();
	            if (s5 === peg$FAILED) {
	              s5 = null;
	            }
	            if (s5 !== peg$FAILED) {
	              s6 = peg$parseVALUE();
	              if (s6 !== peg$FAILED) {
	                s7 = [];
	                s8 = peg$currPos;
	                s9 = peg$parseS();
	                if (s9 === peg$FAILED) {
	                  s9 = null;
	                }
	                if (s9 !== peg$FAILED) {
	                  if (input.charCodeAt(peg$currPos) === 44) {
	                    s10 = peg$c0;
	                    peg$currPos++;
	                  } else {
	                    s10 = peg$FAILED;
	                    if (peg$silentFails === 0) { peg$fail(peg$c1); }
	                  }
	                  if (s10 !== peg$FAILED) {
	                    s11 = peg$parseS();
	                    if (s11 === peg$FAILED) {
	                      s11 = null;
	                    }
	                    if (s11 !== peg$FAILED) {
	                      s12 = peg$parseVALUE();
	                      if (s12 !== peg$FAILED) {
	                        s9 = [s9, s10, s11, s12];
	                        s8 = s9;
	                      } else {
	                        peg$currPos = s8;
	                        s8 = peg$FAILED;
	                      }
	                    } else {
	                      peg$currPos = s8;
	                      s8 = peg$FAILED;
	                    }
	                  } else {
	                    peg$currPos = s8;
	                    s8 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s8;
	                  s8 = peg$FAILED;
	                }
	                while (s8 !== peg$FAILED) {
	                  s7.push(s8);
	                  s8 = peg$currPos;
	                  s9 = peg$parseS();
	                  if (s9 === peg$FAILED) {
	                    s9 = null;
	                  }
	                  if (s9 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 44) {
	                      s10 = peg$c0;
	                      peg$currPos++;
	                    } else {
	                      s10 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c1); }
	                    }
	                    if (s10 !== peg$FAILED) {
	                      s11 = peg$parseS();
	                      if (s11 === peg$FAILED) {
	                        s11 = null;
	                      }
	                      if (s11 !== peg$FAILED) {
	                        s12 = peg$parseVALUE();
	                        if (s12 !== peg$FAILED) {
	                          s9 = [s9, s10, s11, s12];
	                          s8 = s9;
	                        } else {
	                          peg$currPos = s8;
	                          s8 = peg$FAILED;
	                        }
	                      } else {
	                        peg$currPos = s8;
	                        s8 = peg$FAILED;
	                      }
	                    } else {
	                      peg$currPos = s8;
	                      s8 = peg$FAILED;
	                    }
	                  } else {
	                    peg$currPos = s8;
	                    s8 = peg$FAILED;
	                  }
	                }
	                if (s7 !== peg$FAILED) {
	                  s8 = peg$parseS();
	                  if (s8 === peg$FAILED) {
	                    s8 = null;
	                  }
	                  if (s8 !== peg$FAILED) {
	                    if (input.charCodeAt(peg$currPos) === 41) {
	                      s9 = peg$c31;
	                      peg$currPos++;
	                    } else {
	                      s9 = peg$FAILED;
	                      if (peg$silentFails === 0) { peg$fail(peg$c32); }
	                    }
	                    if (s9 !== peg$FAILED) {
	                      s4 = [s4, s5, s6, s7, s8, s9];
	                      s3 = s4;
	                    } else {
	                      peg$currPos = s3;
	                      s3 = peg$FAILED;
	                    }
	                  } else {
	                    peg$currPos = s3;
	                    s3 = peg$FAILED;
	                  }
	                } else {
	                  peg$currPos = s3;
	                  s3 = peg$FAILED;
	                }
	              } else {
	                peg$currPos = s3;
	                s3 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c33(s2, s3);
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseVALUE() {
	      var s0;
	
	      s0 = peg$parseNUMBER();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseSTRING();
	        if (s0 === peg$FAILED) {
	          s0 = peg$parseREGEX();
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseATTRIB_MATCH() {
	      var s0;
	
	      if (input.charCodeAt(peg$currPos) === 61) {
	        s0 = peg$c34;
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c35); }
	      }
	      if (s0 === peg$FAILED) {
	        if (input.substr(peg$currPos, 2) === peg$c36) {
	          s0 = peg$c36;
	          peg$currPos += 2;
	        } else {
	          s0 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c37); }
	        }
	        if (s0 === peg$FAILED) {
	          if (input.substr(peg$currPos, 2) === peg$c38) {
	            s0 = peg$c38;
	            peg$currPos += 2;
	          } else {
	            s0 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c39); }
	          }
	          if (s0 === peg$FAILED) {
	            if (input.substr(peg$currPos, 2) === peg$c40) {
	              s0 = peg$c40;
	              peg$currPos += 2;
	            } else {
	              s0 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c41); }
	            }
	          }
	        }
	      }
	
	      return s0;
	    }
	
	    function peg$parseATTRIB_FLAGS() {
	      var s0, s1;
	
	      s0 = [];
	      if (peg$c42.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c43); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c42.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c43); }
	          }
	        }
	      } else {
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parsePROP() {
	      var s0;
	
	      s0 = peg$parseSTRING();
	      if (s0 === peg$FAILED) {
	        s0 = peg$parseIDENT();
	      }
	
	      return s0;
	    }
	
	    function peg$parseIDENT() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      if (peg$c44.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c45); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        if (peg$c46.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c47); }
	        }
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          if (peg$c46.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c47); }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c48();
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseREGEX() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 47) {
	        s1 = peg$c49;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c50); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 92) {
	          s4 = peg$c51;
	          peg$currPos++;
	        } else {
	          s4 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c52); }
	        }
	        if (s4 !== peg$FAILED) {
	          if (input.length > peg$currPos) {
	            s5 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c53); }
	          }
	          if (s5 !== peg$FAILED) {
	            s4 = [s4, s5];
	            s3 = s4;
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$FAILED;
	        }
	        if (s3 === peg$FAILED) {
	          if (peg$c54.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c55); }
	          }
	        }
	        if (s3 !== peg$FAILED) {
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            s3 = peg$currPos;
	            if (input.charCodeAt(peg$currPos) === 92) {
	              s4 = peg$c51;
	              peg$currPos++;
	            } else {
	              s4 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c52); }
	            }
	            if (s4 !== peg$FAILED) {
	              if (input.length > peg$currPos) {
	                s5 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s5 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c53); }
	              }
	              if (s5 !== peg$FAILED) {
	                s4 = [s4, s5];
	                s3 = s4;
	              } else {
	                peg$currPos = s3;
	                s3 = peg$FAILED;
	              }
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	            if (s3 === peg$FAILED) {
	              if (peg$c54.test(input.charAt(peg$currPos))) {
	                s3 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s3 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c55); }
	              }
	            }
	          }
	        } else {
	          s2 = peg$FAILED;
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 47) {
	            s3 = peg$c49;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c50); }
	          }
	          if (s3 !== peg$FAILED) {
	            s4 = [];
	            if (peg$c42.test(input.charAt(peg$currPos))) {
	              s5 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c43); }
	            }
	            while (s5 !== peg$FAILED) {
	              s4.push(s5);
	              if (peg$c42.test(input.charAt(peg$currPos))) {
	                s5 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s5 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c43); }
	              }
	            }
	            if (s4 !== peg$FAILED) {
	              peg$savedPos = s0;
	              s1 = peg$c56(s2, s4);
	              s0 = s1;
	            } else {
	              peg$currPos = s0;
	              s0 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseSTRING() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      s1 = peg$parseSTRING1();
	      if (s1 === peg$FAILED) {
	        s1 = peg$parseSTRING2();
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c57();
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseSTRING1() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 34) {
	        s1 = peg$c58;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c59); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 92) {
	          s4 = peg$c51;
	          peg$currPos++;
	        } else {
	          s4 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c52); }
	        }
	        if (s4 !== peg$FAILED) {
	          if (input.length > peg$currPos) {
	            s5 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c53); }
	          }
	          if (s5 !== peg$FAILED) {
	            s4 = [s4, s5];
	            s3 = s4;
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$FAILED;
	        }
	        if (s3 === peg$FAILED) {
	          if (peg$c60.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c61); }
	          }
	        }
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 92) {
	            s4 = peg$c51;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c52); }
	          }
	          if (s4 !== peg$FAILED) {
	            if (input.length > peg$currPos) {
	              s5 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c53); }
	            }
	            if (s5 !== peg$FAILED) {
	              s4 = [s4, s5];
	              s3 = s4;
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	          if (s3 === peg$FAILED) {
	            if (peg$c60.test(input.charAt(peg$currPos))) {
	              s3 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c61); }
	            }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 34) {
	            s3 = peg$c58;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c59); }
	          }
	          if (s3 !== peg$FAILED) {
	            s1 = [s1, s2, s3];
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseSTRING2() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 39) {
	        s1 = peg$c62;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c63); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        s3 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 92) {
	          s4 = peg$c51;
	          peg$currPos++;
	        } else {
	          s4 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c52); }
	        }
	        if (s4 !== peg$FAILED) {
	          if (input.length > peg$currPos) {
	            s5 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c53); }
	          }
	          if (s5 !== peg$FAILED) {
	            s4 = [s4, s5];
	            s3 = s4;
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s3;
	          s3 = peg$FAILED;
	        }
	        if (s3 === peg$FAILED) {
	          if (peg$c64.test(input.charAt(peg$currPos))) {
	            s3 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c65); }
	          }
	        }
	        while (s3 !== peg$FAILED) {
	          s2.push(s3);
	          s3 = peg$currPos;
	          if (input.charCodeAt(peg$currPos) === 92) {
	            s4 = peg$c51;
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c52); }
	          }
	          if (s4 !== peg$FAILED) {
	            if (input.length > peg$currPos) {
	              s5 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c53); }
	            }
	            if (s5 !== peg$FAILED) {
	              s4 = [s4, s5];
	              s3 = s4;
	            } else {
	              peg$currPos = s3;
	              s3 = peg$FAILED;
	            }
	          } else {
	            peg$currPos = s3;
	            s3 = peg$FAILED;
	          }
	          if (s3 === peg$FAILED) {
	            if (peg$c64.test(input.charAt(peg$currPos))) {
	              s3 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c65); }
	            }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          if (input.charCodeAt(peg$currPos) === 39) {
	            s3 = peg$c62;
	            peg$currPos++;
	          } else {
	            s3 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c63); }
	          }
	          if (s3 !== peg$FAILED) {
	            s1 = [s1, s2, s3];
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseNUMBER() {
	      var s0, s1, s2;
	
	      s0 = peg$currPos;
	      s1 = peg$parseSIGN();
	      if (s1 === peg$FAILED) {
	        s1 = null;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseNAN();
	        if (s2 === peg$FAILED) {
	          s2 = peg$parseINFINITY();
	          if (s2 === peg$FAILED) {
	            s2 = peg$parseBINARY();
	            if (s2 === peg$FAILED) {
	              s2 = peg$parseOCTAL();
	              if (s2 === peg$FAILED) {
	                s2 = peg$parseHEXADECIMAL();
	                if (s2 === peg$FAILED) {
	                  s2 = peg$parseDECIMAL();
	                  if (s2 === peg$FAILED) {
	                    s2 = peg$parseFLOAT();
	                  }
	                }
	              }
	            }
	          }
	        }
	        if (s2 !== peg$FAILED) {
	          peg$savedPos = s0;
	          s1 = peg$c66(s1, s2);
	          s0 = s1;
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseNAN() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 3) === peg$c67) {
	        s1 = peg$c67;
	        peg$currPos += 3;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c68); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c69();
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseINFINITY() {
	      var s0, s1;
	
	      s0 = peg$currPos;
	      if (input.substr(peg$currPos, 8) === peg$c70) {
	        s1 = peg$c70;
	        peg$currPos += 8;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c71); }
	      }
	      if (s1 !== peg$FAILED) {
	        peg$savedPos = s0;
	        s1 = peg$c72();
	      }
	      s0 = s1;
	
	      return s0;
	    }
	
	    function peg$parseBINARY() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c73;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c74); }
	      }
	      if (s1 !== peg$FAILED) {
	        if (peg$c75.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c76); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          if (peg$c77.test(input.charAt(peg$currPos))) {
	            s4 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c78); }
	          }
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              if (peg$c77.test(input.charAt(peg$currPos))) {
	                s4 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c78); }
	              }
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c79();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseOCTAL() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c73;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c74); }
	      }
	      if (s1 !== peg$FAILED) {
	        if (peg$c80.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c81); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          if (peg$c82.test(input.charAt(peg$currPos))) {
	            s4 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c83); }
	          }
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              if (peg$c82.test(input.charAt(peg$currPos))) {
	                s4 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c83); }
	              }
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c79();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseHEXADECIMAL() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 48) {
	        s1 = peg$c73;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c74); }
	      }
	      if (s1 !== peg$FAILED) {
	        if (peg$c84.test(input.charAt(peg$currPos))) {
	          s2 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s2 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c85); }
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          if (peg$c86.test(input.charAt(peg$currPos))) {
	            s4 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c87); }
	          }
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              if (peg$c86.test(input.charAt(peg$currPos))) {
	                s4 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c87); }
	              }
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c79();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseDECIMAL() {
	      var s0, s1, s2, s3, s4, s5;
	
	      s0 = peg$currPos;
	      s1 = [];
	      if (peg$c88.test(input.charAt(peg$currPos))) {
	        s2 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s2 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c89); }
	      }
	      if (s2 !== peg$FAILED) {
	        while (s2 !== peg$FAILED) {
	          s1.push(s2);
	          if (peg$c88.test(input.charAt(peg$currPos))) {
	            s2 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s2 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c89); }
	          }
	        }
	      } else {
	        s1 = peg$FAILED;
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$currPos;
	        if (input.charCodeAt(peg$currPos) === 46) {
	          s3 = peg$c19;
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c20); }
	        }
	        if (s3 !== peg$FAILED) {
	          s4 = [];
	          if (peg$c88.test(input.charAt(peg$currPos))) {
	            s5 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s5 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c89); }
	          }
	          while (s5 !== peg$FAILED) {
	            s4.push(s5);
	            if (peg$c88.test(input.charAt(peg$currPos))) {
	              s5 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s5 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c89); }
	            }
	          }
	          if (s4 !== peg$FAILED) {
	            s3 = [s3, s4];
	            s2 = s3;
	          } else {
	            peg$currPos = s2;
	            s2 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s2;
	          s2 = peg$FAILED;
	        }
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseINDEX();
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c90();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseFLOAT() {
	      var s0, s1, s2, s3;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 46) {
	        s1 = peg$c19;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c20); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = [];
	        if (peg$c88.test(input.charAt(peg$currPos))) {
	          s3 = input.charAt(peg$currPos);
	          peg$currPos++;
	        } else {
	          s3 = peg$FAILED;
	          if (peg$silentFails === 0) { peg$fail(peg$c89); }
	        }
	        if (s3 !== peg$FAILED) {
	          while (s3 !== peg$FAILED) {
	            s2.push(s3);
	            if (peg$c88.test(input.charAt(peg$currPos))) {
	              s3 = input.charAt(peg$currPos);
	              peg$currPos++;
	            } else {
	              s3 = peg$FAILED;
	              if (peg$silentFails === 0) { peg$fail(peg$c89); }
	            }
	          }
	        } else {
	          s2 = peg$FAILED;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = peg$parseINDEX();
	          if (s3 === peg$FAILED) {
	            s3 = null;
	          }
	          if (s3 !== peg$FAILED) {
	            peg$savedPos = s0;
	            s1 = peg$c79();
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseINDEX() {
	      var s0, s1, s2, s3, s4;
	
	      s0 = peg$currPos;
	      if (input.charCodeAt(peg$currPos) === 101) {
	        s1 = peg$c91;
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c92); }
	      }
	      if (s1 !== peg$FAILED) {
	        s2 = peg$parseSIGN();
	        if (s2 === peg$FAILED) {
	          s2 = null;
	        }
	        if (s2 !== peg$FAILED) {
	          s3 = [];
	          if (peg$c88.test(input.charAt(peg$currPos))) {
	            s4 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s4 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c89); }
	          }
	          if (s4 !== peg$FAILED) {
	            while (s4 !== peg$FAILED) {
	              s3.push(s4);
	              if (peg$c88.test(input.charAt(peg$currPos))) {
	                s4 = input.charAt(peg$currPos);
	                peg$currPos++;
	              } else {
	                s4 = peg$FAILED;
	                if (peg$silentFails === 0) { peg$fail(peg$c89); }
	              }
	            }
	          } else {
	            s3 = peg$FAILED;
	          }
	          if (s3 !== peg$FAILED) {
	            s1 = [s1, s2, s3];
	            s0 = s1;
	          } else {
	            peg$currPos = s0;
	            s0 = peg$FAILED;
	          }
	        } else {
	          peg$currPos = s0;
	          s0 = peg$FAILED;
	        }
	      } else {
	        peg$currPos = s0;
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	    function peg$parseSIGN() {
	      var s0;
	
	      if (peg$c93.test(input.charAt(peg$currPos))) {
	        s0 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s0 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c94); }
	      }
	
	      return s0;
	    }
	
	    function peg$parseS() {
	      var s0, s1;
	
	      s0 = [];
	      if (peg$c95.test(input.charAt(peg$currPos))) {
	        s1 = input.charAt(peg$currPos);
	        peg$currPos++;
	      } else {
	        s1 = peg$FAILED;
	        if (peg$silentFails === 0) { peg$fail(peg$c96); }
	      }
	      if (s1 !== peg$FAILED) {
	        while (s1 !== peg$FAILED) {
	          s0.push(s1);
	          if (peg$c95.test(input.charAt(peg$currPos))) {
	            s1 = input.charAt(peg$currPos);
	            peg$currPos++;
	          } else {
	            s1 = peg$FAILED;
	            if (peg$silentFails === 0) { peg$fail(peg$c96); }
	          }
	        }
	      } else {
	        s0 = peg$FAILED;
	      }
	
	      return s0;
	    }
	
	
	      function Selector(exp) {
	        for (var i in exp) {
	          exp[i].next = exp[+i+1];
	          this.push(exp[i]);
	        }
	
	        this.start = exp[0];
	      }
	      Selector.prototype = [];
	      Selector.prototype.toString = function () {
	        return this.join('');
	      };
	      
	      function Combinator(operator) {
	        this.operator = operator;
	      }
	      Combinator.prototype = {
	        toString: function () {
	          return this.operator;
	        }
	      };
	      
	      function Compound(element, attributes, pseudoClasses) {
	        if (element) {
	          this.element = element;
	          this.push(element);
	        }
	        
	        if (attributes && attributes.length) {
	          this.attributes = attributes;
	          this.push.apply(this, attributes);
	        }
	
	        if (pseudoClasses && pseudoClasses.length) {
	          this.pseudoClasses = pseudoClasses;
	          this.push.apply(this, pseudoClasses);
	        }
	      }
	      Compound.prototype = [];
	      Compound.prototype.toString = function () {
	        return this.join('');
	      };
	      
	      function Prop(ident) {
	        this.type = 'Prop';
	        this.ident = ident;
	      }
	      Prop.prototype = {
	        toString: function () {
	          return this.ident;
	        }
	      };
	      
	      function Id(ident) {
	        this.type = 'Id';
	        this.ident = ident;
	      }
	      Id.prototype = {
	        toString: function () {
	          return '#' + this.ident;
	        }
	      };
	      
	      function Class(ident) {
	        this.type = 'Class';
	        this.ident = ident;
	      }
	      Class.prototype = {
	        toString: function () {
	          return '.' + this.ident;
	        }
	      };
	
	      function convetVALUEtoString(value) {
	        if (typeof value == 'string') {
	          return '"'+value+'"';
	        } else if (typeof value == 'number') {
	          return value.toString();;
	        } else if (typeof value == 'object') {
	          return value.toString();
	        }
	      }
	      function PseudoClass(ident, args) {
	        this.type = 'PseudoClass';
	        this.ident = ident;
	        this.args = args || [];
	      }
	      PseudoClass.prototype = {
	        toString: function () {
	          if (this.args && this.args.length) {
	            return ':' + this.ident + '(' + this.args.map(convetVALUEtoString).join() + ')';
	          } else {
	            return ':' + this.ident;
	          }
	        }
	      };
	
	      function Attribute(ident, operator, value, flag) {
	        this.type = 'Attribute';
	        this.ident = ident;
	        this.operator = operator;
	        this.value = value;
	        this.flag = flag;
	        if (this.ident.charAt(this.ident.length-1) == '$' && this.operator == '=') {
	          this.ident = this.ident.substr(0, this.ident.length-1);
	          this.operator = '$' + this.operator;
	        }
	      }
	      Attribute.prototype = {
	        toString: function () {
	          return '[' + 
	            this.ident + 
	            (this.operator||'')+
	            (convetVALUEtoString(this.value)||'')+
	            (this.flag?(' '+this.flag):'') +
	            ']';
	        }
	      };
	
	
	    peg$result = peg$startRuleFunction();
	
	    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
	      return peg$result;
	    } else {
	      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
	        peg$fail({ type: "end", description: "end of input" });
	      }
	
	      throw peg$buildException(
	        null,
	        peg$maxFailExpected,
	        peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
	        peg$maxFailPos < input.length
	          ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
	          : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
	      );
	    }
	  }
	
	  return {
	    SyntaxError: peg$SyntaxError,
	    parse:       peg$parse
	  };
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var used = []
	  , exports = module.exports = {};
	
	/*!
	 * Chai version
	 */
	
	exports.version = '3.5.0';
	
	/*!
	 * Assertion Error
	 */
	
	exports.AssertionError = __webpack_require__(6);
	
	/*!
	 * Utils for plugins (not exported)
	 */
	
	var util = __webpack_require__(7);
	
	/**
	 * # .use(function)
	 *
	 * Provides a way to extend the internals of Chai
	 *
	 * @param {Function}
	 * @returns {this} for chaining
	 * @api public
	 */
	
	exports.use = function (fn) {
	  if (!~used.indexOf(fn)) {
	    fn(this, util);
	    used.push(fn);
	  }
	
	  return this;
	};
	
	/*!
	 * Utility Functions
	 */
	
	exports.util = util;
	
	/*!
	 * Configuration
	 */
	
	var config = __webpack_require__(20);
	exports.config = config;
	
	/*!
	 * Primary `Assertion` prototype
	 */
	
	var assertion = __webpack_require__(36);
	exports.use(assertion);
	
	/*!
	 * Core Assertions
	 */
	
	var core = __webpack_require__(37);
	exports.use(core);
	
	/*!
	 * Expect interface
	 */
	
	var expect = __webpack_require__(38);
	exports.use(expect);
	
	/*!
	 * Should interface
	 */
	
	var should = __webpack_require__(39);
	exports.use(should);
	
	/*!
	 * Assert interface
	 */
	
	var assert = __webpack_require__(40);
	exports.use(assert);


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*!
	 * assertion-error
	 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Return a function that will copy properties from
	 * one object to another excluding any originally
	 * listed. Returned function will create a new `{}`.
	 *
	 * @param {String} excluded properties ...
	 * @return {Function}
	 */
	
	function exclude () {
	  var excludes = [].slice.call(arguments);
	
	  function excludeProps (res, obj) {
	    Object.keys(obj).forEach(function (key) {
	      if (!~excludes.indexOf(key)) res[key] = obj[key];
	    });
	  }
	
	  return function extendExclude () {
	    var args = [].slice.call(arguments)
	      , i = 0
	      , res = {};
	
	    for (; i < args.length; i++) {
	      excludeProps(res, args[i]);
	    }
	
	    return res;
	  };
	};
	
	/*!
	 * Primary Exports
	 */
	
	module.exports = AssertionError;
	
	/**
	 * ### AssertionError
	 *
	 * An extension of the JavaScript `Error` constructor for
	 * assertion and validation scenarios.
	 *
	 * @param {String} message
	 * @param {Object} properties to include (optional)
	 * @param {callee} start stack function (optional)
	 */
	
	function AssertionError (message, _props, ssf) {
	  var extend = exclude('name', 'message', 'stack', 'constructor', 'toJSON')
	    , props = extend(_props || {});
	
	  // default values
	  this.message = message || 'Unspecified AssertionError';
	  this.showDiff = false;
	
	  // copy from properties
	  for (var key in props) {
	    this[key] = props[key];
	  }
	
	  // capture stack trace
	  ssf = ssf || arguments.callee;
	  if (ssf && Error.captureStackTrace) {
	    Error.captureStackTrace(this, ssf);
	  } else {
	    try {
	      throw new Error();
	    } catch(e) {
	      this.stack = e.stack;
	    }
	  }
	}
	
	/*!
	 * Inherit from Error.prototype
	 */
	
	AssertionError.prototype = Object.create(Error.prototype);
	
	/*!
	 * Statically set name
	 */
	
	AssertionError.prototype.name = 'AssertionError';
	
	/*!
	 * Ensure correct constructor
	 */
	
	AssertionError.prototype.constructor = AssertionError;
	
	/**
	 * Allow errors to be converted to JSON for static transfer.
	 *
	 * @param {Boolean} include stack (default: `true`)
	 * @return {Object} object that can be `JSON.stringify`
	 */
	
	AssertionError.prototype.toJSON = function (stack) {
	  var extend = exclude('constructor', 'toJSON', 'stack')
	    , props = extend({ name: this.name }, this);
	
	  // include stack if exists and not turned off
	  if (false !== stack && this.stack) {
	    props.stack = this.stack;
	  }
	
	  return props;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Main exports
	 */
	
	var exports = module.exports = {};
	
	/*!
	 * test utility
	 */
	
	exports.test = __webpack_require__(8);
	
	/*!
	 * type utility
	 */
	
	exports.type = __webpack_require__(10);
	
	/*!
	 * expectTypes utility
	 */
	exports.expectTypes = __webpack_require__(12);
	
	/*!
	 * message utility
	 */
	
	exports.getMessage = __webpack_require__(13);
	
	/*!
	 * actual utility
	 */
	
	exports.getActual = __webpack_require__(14);
	
	/*!
	 * Inspect util
	 */
	
	exports.inspect = __webpack_require__(15);
	
	/*!
	 * Object Display util
	 */
	
	exports.objDisplay = __webpack_require__(19);
	
	/*!
	 * Flag utility
	 */
	
	exports.flag = __webpack_require__(9);
	
	/*!
	 * Flag transferring utility
	 */
	
	exports.transferFlags = __webpack_require__(21);
	
	/*!
	 * Deep equal utility
	 */
	
	exports.eql = __webpack_require__(22);
	
	/*!
	 * Deep path value
	 */
	
	exports.getPathValue = __webpack_require__(27);
	
	/*!
	 * Deep path info
	 */
	
	exports.getPathInfo = __webpack_require__(28);
	
	/*!
	 * Check if a property exists
	 */
	
	exports.hasProperty = __webpack_require__(29);
	
	/*!
	 * Function name
	 */
	
	exports.getName = __webpack_require__(16);
	
	/*!
	 * add Property
	 */
	
	exports.addProperty = __webpack_require__(30);
	
	/*!
	 * add Method
	 */
	
	exports.addMethod = __webpack_require__(31);
	
	/*!
	 * overwrite Property
	 */
	
	exports.overwriteProperty = __webpack_require__(32);
	
	/*!
	 * overwrite Method
	 */
	
	exports.overwriteMethod = __webpack_require__(33);
	
	/*!
	 * Add a chainable method
	 */
	
	exports.addChainableMethod = __webpack_require__(34);
	
	/*!
	 * Overwrite chainable method
	 */
	
	exports.overwriteChainableMethod = __webpack_require__(35);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - test utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(9);
	
	/**
	 * # test(object, expression)
	 *
	 * Test and object for expression.
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name test
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , expr = args[0];
	  return negate ? !expr : expr;
	};


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### flag(object, key, [value])
	 *
	 * Get or set a flag value on an object. If a
	 * value is provided it will be set, else it will
	 * return the currently set value or `undefined` if
	 * the value is not set.
	 *
	 *     utils.flag(this, 'foo', 'bar'); // setter
	 *     utils.flag(this, 'foo'); // getter, returns `bar`
	 *
	 * @param {Object} object constructed Assertion
	 * @param {String} key
	 * @param {Mixed} value (optional)
	 * @namespace Utils
	 * @name flag
	 * @api private
	 */
	
	module.exports = function (obj, key, value) {
	  var flags = obj.__flags || (obj.__flags = Object.create(null));
	  if (arguments.length === 3) {
	    flags[key] = value;
	  } else {
	    return flags[key];
	  }
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(11);


/***/ },
/* 11 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	var objectTypeRegexp = /^\[object (.*)\]$/;
	
	function getType(obj) {
	  var type = Object.prototype.toString.call(obj).match(objectTypeRegexp)[1].toLowerCase();
	  // Let "new String('')" return 'object'
	  if (typeof Promise === 'function' && obj instanceof Promise) return 'promise';
	  // PhantomJS has type "DOMWindow" for null
	  if (obj === null) return 'null';
	  // PhantomJS has type "DOMWindow" for undefined
	  if (obj === undefined) return 'undefined';
	  return type;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library() {
	  if (!(this instanceof Library)) return new Library();
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function(type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function(obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - expectTypes utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### expectTypes(obj, types)
	 *
	 * Ensures that the object being tested against is of a valid type.
	 *
	 *     utils.expectTypes(this, ['array', 'object', 'string']);
	 *
	 * @param {Mixed} obj constructed Assertion
	 * @param {Array} type A list of allowed types for this assertion
	 * @namespace Utils
	 * @name expectTypes
	 * @api public
	 */
	
	var AssertionError = __webpack_require__(6);
	var flag = __webpack_require__(9);
	var type = __webpack_require__(10);
	
	module.exports = function (obj, types) {
	  var obj = flag(obj, 'object');
	  types = types.map(function (t) { return t.toLowerCase(); });
	  types.sort();
	
	  // Transforms ['lorem', 'ipsum'] into 'a lirum, or an ipsum'
	  var str = types.map(function (t, index) {
	    var art = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(t.charAt(0)) ? 'an' : 'a';
	    var or = types.length > 1 && index === types.length - 1 ? 'or ' : '';
	    return or + art + ' ' + t;
	  }).join(', ');
	
	  if (!types.some(function (expected) { return type(obj) === expected; })) {
	    throw new AssertionError(
	      'object tested must be ' + str + ', but ' + type(obj) + ' given'
	    );
	  }
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - message composition utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var flag = __webpack_require__(9)
	  , getActual = __webpack_require__(14)
	  , inspect = __webpack_require__(15)
	  , objDisplay = __webpack_require__(19);
	
	/**
	 * ### .getMessage(object, message, negateMessage)
	 *
	 * Construct the error message based on flags
	 * and template tags. Template tags will return
	 * a stringified inspection of the object referenced.
	 *
	 * Message template tags:
	 * - `#{this}` current asserted object
	 * - `#{act}` actual value
	 * - `#{exp}` expected value
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getMessage
	 * @api public
	 */
	
	module.exports = function (obj, args) {
	  var negate = flag(obj, 'negate')
	    , val = flag(obj, 'object')
	    , expected = args[3]
	    , actual = getActual(obj, args)
	    , msg = negate ? args[2] : args[1]
	    , flagMsg = flag(obj, 'message');
	
	  if(typeof msg === "function") msg = msg();
	  msg = msg || '';
	  msg = msg
	    .replace(/#\{this\}/g, function () { return objDisplay(val); })
	    .replace(/#\{act\}/g, function () { return objDisplay(actual); })
	    .replace(/#\{exp\}/g, function () { return objDisplay(expected); });
	
	  return flagMsg ? flagMsg + ': ' + msg : msg;
	};


/***/ },
/* 14 */
/***/ function(module, exports) {

	/*!
	 * Chai - getActual utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getActual(object, [actual])
	 *
	 * Returns the `actual` value for an Assertion
	 *
	 * @param {Object} object (constructed Assertion)
	 * @param {Arguments} chai.Assertion.prototype.assert arguments
	 * @namespace Utils
	 * @name getActual
	 */
	
	module.exports = function (obj, args) {
	  return args.length > 4 ? args[4] : obj._obj;
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	// This is (almost) directly from Node.js utils
	// https://github.com/joyent/node/blob/f8c335d0caf47f16d31413f89aa28eda3878e3aa/lib/util.js
	
	var getName = __webpack_require__(16);
	var getProperties = __webpack_require__(17);
	var getEnumerableProperties = __webpack_require__(18);
	
	module.exports = inspect;
	
	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Boolean} showHidden Flag that shows hidden (not enumerable)
	 *    properties of objects.
	 * @param {Number} depth Depth in which to descend in object. Default is 2.
	 * @param {Boolean} colors Flag to turn on ANSI escape codes to color the
	 *    output. Default is false (no coloring).
	 * @namespace Utils
	 * @name inspect
	 */
	function inspect(obj, showHidden, depth, colors) {
	  var ctx = {
	    showHidden: showHidden,
	    seen: [],
	    stylize: function (str) { return str; }
	  };
	  return formatValue(ctx, obj, (typeof depth === 'undefined' ? 2 : depth));
	}
	
	// Returns true if object is a DOM element.
	var isDOMElement = function (object) {
	  if (typeof HTMLElement === 'object') {
	    return object instanceof HTMLElement;
	  } else {
	    return object &&
	      typeof object === 'object' &&
	      object.nodeType === 1 &&
	      typeof object.nodeName === 'string';
	  }
	};
	
	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (value && typeof value.inspect === 'function' &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes);
	    if (typeof ret !== 'string') {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }
	
	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }
	
	  // If this is a DOM element, try to get the outer HTML.
	  if (isDOMElement(value)) {
	    if ('outerHTML' in value) {
	      return value.outerHTML;
	      // This value does not have an outerHTML attribute,
	      //   it could still be an XML element
	    } else {
	      // Attempt to serialize it
	      try {
	        if (document.xmlVersion) {
	          var xmlSerializer = new XMLSerializer();
	          return xmlSerializer.serializeToString(value);
	        } else {
	          // Firefox 11- do not support outerHTML
	          //   It does, however, support innerHTML
	          //   Use the following to render the element
	          var ns = "http://www.w3.org/1999/xhtml";
	          var container = document.createElementNS(ns, '_');
	
	          container.appendChild(value.cloneNode(false));
	          html = container.innerHTML
	            .replace('><', '>' + value.innerHTML + '<');
	          container.innerHTML = '';
	          return html;
	        }
	      } catch (err) {
	        // This could be a non-native DOM implementation,
	        //   continue with the normal flow:
	        //   printing the element as if it is an object.
	      }
	    }
	  }
	
	  // Look up the keys of the object.
	  var visibleKeys = getEnumerableProperties(value);
	  var keys = ctx.showHidden ? getProperties(value) : visibleKeys;
	
	  // Some type of object without properties can be shortcutted.
	  // In IE, errors have a single `stack` property, or if they are vanilla `Error`,
	  // a `stack` plus `description` property; ignore those for consistency.
	  if (keys.length === 0 || (isError(value) && (
	      (keys.length === 1 && keys[0] === 'stack') ||
	      (keys.length === 2 && keys[0] === 'description' && keys[1] === 'stack')
	     ))) {
	    if (typeof value === 'function') {
	      var name = getName(value);
	      var nameSuffix = name ? ': ' + name : '';
	      return ctx.stylize('[Function' + nameSuffix + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toUTCString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }
	
	  var base = '', array = false, braces = ['{', '}'];
	
	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }
	
	  // Make functions say that they are functions
	  if (typeof value === 'function') {
	    var name = getName(value);
	    var nameSuffix = name ? ': ' + name : '';
	    base = ' [Function' + nameSuffix + ']';
	  }
	
	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }
	
	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }
	
	  // Make error with message first say the error
	  if (isError(value)) {
	    return formatError(value);
	  }
	
	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }
	
	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }
	
	  ctx.seen.push(value);
	
	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }
	
	  ctx.seen.pop();
	
	  return reduceToSingleString(output, base, braces);
	}
	
	
	function formatPrimitive(ctx, value) {
	  switch (typeof value) {
	    case 'undefined':
	      return ctx.stylize('undefined', 'undefined');
	
	    case 'string':
	      var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                               .replace(/'/g, "\\'")
	                                               .replace(/\\"/g, '"') + '\'';
	      return ctx.stylize(simple, 'string');
	
	    case 'number':
	      if (value === 0 && (1/value) === -Infinity) {
	        return ctx.stylize('-0', 'number');
	      }
	      return ctx.stylize('' + value, 'number');
	
	    case 'boolean':
	      return ctx.stylize('' + value, 'boolean');
	  }
	  // For some reason typeof null is "object", so special case here.
	  if (value === null) {
	    return ctx.stylize('null', 'null');
	  }
	}
	
	
	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}
	
	
	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (Object.prototype.hasOwnProperty.call(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}
	
	
	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str;
	  if (value.__lookupGetter__) {
	    if (value.__lookupGetter__(key)) {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Getter/Setter]', 'special');
	      } else {
	        str = ctx.stylize('[Getter]', 'special');
	      }
	    } else {
	      if (value.__lookupSetter__(key)) {
	        str = ctx.stylize('[Setter]', 'special');
	      }
	    }
	  }
	  if (visibleKeys.indexOf(key) < 0) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(value[key]) < 0) {
	      if (recurseTimes === null) {
	        str = formatValue(ctx, value[key], null);
	      } else {
	        str = formatValue(ctx, value[key], recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (typeof name === 'undefined') {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }
	
	  return name + ': ' + str;
	}
	
	
	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.length + 1;
	  }, 0);
	
	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }
	
	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}
	
	function isArray(ar) {
	  return Array.isArray(ar) ||
	         (typeof ar === 'object' && objectToString(ar) === '[object Array]');
	}
	
	function isRegExp(re) {
	  return typeof re === 'object' && objectToString(re) === '[object RegExp]';
	}
	
	function isDate(d) {
	  return typeof d === 'object' && objectToString(d) === '[object Date]';
	}
	
	function isError(e) {
	  return typeof e === 'object' && objectToString(e) === '[object Error]';
	}
	
	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


/***/ },
/* 16 */
/***/ function(module, exports) {

	/*!
	 * Chai - getName utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * # getName(func)
	 *
	 * Gets the name of a function, in a cross-browser way.
	 *
	 * @param {Function} a function (usually a constructor)
	 * @namespace Utils
	 * @name getName
	 */
	
	module.exports = function (func) {
	  if (func.name) return func.name;
	
	  var match = /^\s?function ([^(]*)\(/.exec(func);
	  return match && match[1] ? match[1] : "";
	};


/***/ },
/* 17 */
/***/ function(module, exports) {

	/*!
	 * Chai - getProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getProperties(object)
	 *
	 * This allows the retrieval of property names of an object, enumerable or not,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getProperties
	 * @api public
	 */
	
	module.exports = function getProperties(object) {
	  var result = Object.getOwnPropertyNames(object);
	
	  function addProperty(property) {
	    if (result.indexOf(property) === -1) {
	      result.push(property);
	    }
	  }
	
	  var proto = Object.getPrototypeOf(object);
	  while (proto !== null) {
	    Object.getOwnPropertyNames(proto).forEach(addProperty);
	    proto = Object.getPrototypeOf(proto);
	  }
	
	  return result;
	};


/***/ },
/* 18 */
/***/ function(module, exports) {

	/*!
	 * Chai - getEnumerableProperties utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### .getEnumerableProperties(object)
	 *
	 * This allows the retrieval of enumerable property names of an object,
	 * inherited or not.
	 *
	 * @param {Object} object
	 * @returns {Array}
	 * @namespace Utils
	 * @name getEnumerableProperties
	 * @api public
	 */
	
	module.exports = function getEnumerableProperties(object) {
	  var result = [];
	  for (var name in object) {
	    result.push(name);
	  }
	  return result;
	};


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - flag utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependancies
	 */
	
	var inspect = __webpack_require__(15);
	var config = __webpack_require__(20);
	
	/**
	 * ### .objDisplay (object)
	 *
	 * Determines if an object or an array matches
	 * criteria to be inspected in-line for error
	 * messages or should be truncated.
	 *
	 * @param {Mixed} javascript object to inspect
	 * @name objDisplay
	 * @namespace Utils
	 * @api public
	 */
	
	module.exports = function (obj) {
	  var str = inspect(obj)
	    , type = Object.prototype.toString.call(obj);
	
	  if (config.truncateThreshold && str.length >= config.truncateThreshold) {
	    if (type === '[object Function]') {
	      return !obj.name || obj.name === ''
	        ? '[Function]'
	        : '[Function: ' + obj.name + ']';
	    } else if (type === '[object Array]') {
	      return '[ Array(' + obj.length + ') ]';
	    } else if (type === '[object Object]') {
	      var keys = Object.keys(obj)
	        , kstr = keys.length > 2
	          ? keys.splice(0, 2).join(', ') + ', ...'
	          : keys.join(', ');
	      return '{ Object (' + kstr + ') }';
	    } else {
	      return str;
	    }
	  } else {
	    return str;
	  }
	};


/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = {
	
	  /**
	   * ### config.includeStack
	   *
	   * User configurable property, influences whether stack trace
	   * is included in Assertion error message. Default of false
	   * suppresses stack trace in the error message.
	   *
	   *     chai.config.includeStack = true;  // enable stack on error
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	   includeStack: false,
	
	  /**
	   * ### config.showDiff
	   *
	   * User configurable property, influences whether or not
	   * the `showDiff` flag should be included in the thrown
	   * AssertionErrors. `false` will always be `false`; `true`
	   * will be true when the assertion has requested a diff
	   * be shown.
	   *
	   * @param {Boolean}
	   * @api public
	   */
	
	  showDiff: true,
	
	  /**
	   * ### config.truncateThreshold
	   *
	   * User configurable property, sets length threshold for actual and
	   * expected values in assertion errors. If this threshold is exceeded, for
	   * example for large data structures, the value is replaced with something
	   * like `[ Array(3) ]` or `{ Object (prop1, prop2) }`.
	   *
	   * Set it to zero if you want to disable truncating altogether.
	   *
	   * This is especially userful when doing assertions on arrays: having this
	   * set to a reasonable large value makes the failure messages readily
	   * inspectable.
	   *
	   *     chai.config.truncateThreshold = 0;  // disable truncating
	   *
	   * @param {Number}
	   * @api public
	   */
	
	  truncateThreshold: 40
	
	};


/***/ },
/* 21 */
/***/ function(module, exports) {

	/*!
	 * Chai - transferFlags utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### transferFlags(assertion, object, includeAll = true)
	 *
	 * Transfer all the flags for `assertion` to `object`. If
	 * `includeAll` is set to `false`, then the base Chai
	 * assertion flags (namely `object`, `ssfi`, and `message`)
	 * will not be transferred.
	 *
	 *
	 *     var newAssertion = new Assertion();
	 *     utils.transferFlags(assertion, newAssertion);
	 *
	 *     var anotherAsseriton = new Assertion(myObj);
	 *     utils.transferFlags(assertion, anotherAssertion, false);
	 *
	 * @param {Assertion} assertion the assertion to transfer the flags from
	 * @param {Object} object the object to transfer the flags to; usually a new assertion
	 * @param {Boolean} includeAll
	 * @namespace Utils
	 * @name transferFlags
	 * @api private
	 */
	
	module.exports = function (assertion, object, includeAll) {
	  var flags = assertion.__flags || (assertion.__flags = Object.create(null));
	
	  if (!object.__flags) {
	    object.__flags = Object.create(null);
	  }
	
	  includeAll = arguments.length === 3 ? includeAll : true;
	
	  for (var flag in flags) {
	    if (includeAll ||
	        (flag !== 'object' && flag !== 'ssfi' && flag != 'message')) {
	      object.__flags[flag] = flags[flag];
	    }
	  }
	};


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(23);


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * deep-eql
	 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var type = __webpack_require__(24);
	
	/*!
	 * Buffer.isBuffer browser shim
	 */
	
	var Buffer;
	try { Buffer = __webpack_require__(26).Buffer; }
	catch(ex) {
	  Buffer = {};
	  Buffer.isBuffer = function() { return false; }
	}
	
	/*!
	 * Primary Export
	 */
	
	module.exports = deepEqual;
	
	/**
	 * Assert super-strict (egal) equality between
	 * two objects of any type.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @param {Array} memoised (optional)
	 * @return {Boolean} equal match
	 */
	
	function deepEqual(a, b, m) {
	  if (sameValue(a, b)) {
	    return true;
	  } else if ('date' === type(a)) {
	    return dateEqual(a, b);
	  } else if ('regexp' === type(a)) {
	    return regexpEqual(a, b);
	  } else if (Buffer.isBuffer(a)) {
	    return bufferEqual(a, b);
	  } else if ('arguments' === type(a)) {
	    return argumentsEqual(a, b, m);
	  } else if (!typeEqual(a, b)) {
	    return false;
	  } else if (('object' !== type(a) && 'object' !== type(b))
	  && ('array' !== type(a) && 'array' !== type(b))) {
	    return sameValue(a, b);
	  } else {
	    return objectEqual(a, b, m);
	  }
	}
	
	/*!
	 * Strict (egal) equality test. Ensures that NaN always
	 * equals NaN and `-0` does not equal `+0`.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} equal match
	 */
	
	function sameValue(a, b) {
	  if (a === b) return a !== 0 || 1 / a === 1 / b;
	  return a !== a && b !== b;
	}
	
	/*!
	 * Compare the types of two given objects and
	 * return if they are equal. Note that an Array
	 * has a type of `array` (not `object`) and arguments
	 * have a type of `arguments` (not `array`/`object`).
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function typeEqual(a, b) {
	  return type(a) === type(b);
	}
	
	/*!
	 * Compare two Date objects by asserting that
	 * the time values are equal using `saveValue`.
	 *
	 * @param {Date} a
	 * @param {Date} b
	 * @return {Boolean} result
	 */
	
	function dateEqual(a, b) {
	  if ('date' !== type(b)) return false;
	  return sameValue(a.getTime(), b.getTime());
	}
	
	/*!
	 * Compare two regular expressions by converting them
	 * to string and checking for `sameValue`.
	 *
	 * @param {RegExp} a
	 * @param {RegExp} b
	 * @return {Boolean} result
	 */
	
	function regexpEqual(a, b) {
	  if ('regexp' !== type(b)) return false;
	  return sameValue(a.toString(), b.toString());
	}
	
	/*!
	 * Assert deep equality of two `arguments` objects.
	 * Unfortunately, these must be sliced to arrays
	 * prior to test to ensure no bad behavior.
	 *
	 * @param {Arguments} a
	 * @param {Arguments} b
	 * @param {Array} memoize (optional)
	 * @return {Boolean} result
	 */
	
	function argumentsEqual(a, b, m) {
	  if ('arguments' !== type(b)) return false;
	  a = [].slice.call(a);
	  b = [].slice.call(b);
	  return deepEqual(a, b, m);
	}
	
	/*!
	 * Get enumerable properties of a given object.
	 *
	 * @param {Object} a
	 * @return {Array} property names
	 */
	
	function enumerable(a) {
	  var res = [];
	  for (var key in a) res.push(key);
	  return res;
	}
	
	/*!
	 * Simple equality for flat iterable objects
	 * such as Arrays or Node.js buffers.
	 *
	 * @param {Iterable} a
	 * @param {Iterable} b
	 * @return {Boolean} result
	 */
	
	function iterableEqual(a, b) {
	  if (a.length !==  b.length) return false;
	
	  var i = 0;
	  var match = true;
	
	  for (; i < a.length; i++) {
	    if (a[i] !== b[i]) {
	      match = false;
	      break;
	    }
	  }
	
	  return match;
	}
	
	/*!
	 * Extension to `iterableEqual` specifically
	 * for Node.js Buffers.
	 *
	 * @param {Buffer} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function bufferEqual(a, b) {
	  if (!Buffer.isBuffer(b)) return false;
	  return iterableEqual(a, b);
	}
	
	/*!
	 * Block for `objectEqual` ensuring non-existing
	 * values don't get in.
	 *
	 * @param {Mixed} object
	 * @return {Boolean} result
	 */
	
	function isValue(a) {
	  return a !== null && a !== undefined;
	}
	
	/*!
	 * Recursively check the equality of two objects.
	 * Once basic sameness has been established it will
	 * defer to `deepEqual` for each enumerable key
	 * in the object.
	 *
	 * @param {Mixed} a
	 * @param {Mixed} b
	 * @return {Boolean} result
	 */
	
	function objectEqual(a, b, m) {
	  if (!isValue(a) || !isValue(b)) {
	    return false;
	  }
	
	  if (a.prototype !== b.prototype) {
	    return false;
	  }
	
	  var i;
	  if (m) {
	    for (i = 0; i < m.length; i++) {
	      if ((m[i][0] === a && m[i][1] === b)
	      ||  (m[i][0] === b && m[i][1] === a)) {
	        return true;
	      }
	    }
	  } else {
	    m = [];
	  }
	
	  try {
	    var ka = enumerable(a);
	    var kb = enumerable(b);
	  } catch (ex) {
	    return false;
	  }
	
	  ka.sort();
	  kb.sort();
	
	  if (!iterableEqual(ka, kb)) {
	    return false;
	  }
	
	  m.push([ a, b ]);
	
	  var key;
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], m)) {
	      return false;
	    }
	  }
	
	  return true;
	}


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(25);


/***/ },
/* 25 */
/***/ function(module, exports) {

	/*!
	 * type-detect
	 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Primary Exports
	 */
	
	var exports = module.exports = getType;
	
	/*!
	 * Detectable javascript natives
	 */
	
	var natives = {
	    '[object Array]': 'array'
	  , '[object RegExp]': 'regexp'
	  , '[object Function]': 'function'
	  , '[object Arguments]': 'arguments'
	  , '[object Date]': 'date'
	};
	
	/**
	 * ### typeOf (obj)
	 *
	 * Use several different techniques to determine
	 * the type of object being tested.
	 *
	 *
	 * @param {Mixed} object
	 * @return {String} object type
	 * @api public
	 */
	
	function getType (obj) {
	  var str = Object.prototype.toString.call(obj);
	  if (natives[str]) return natives[str];
	  if (obj === null) return 'null';
	  if (obj === undefined) return 'undefined';
	  if (obj === Object(obj)) return 'object';
	  return typeof obj;
	}
	
	exports.Library = Library;
	
	/**
	 * ### Library
	 *
	 * Create a repository for custom type detection.
	 *
	 * ```js
	 * var lib = new type.Library;
	 * ```
	 *
	 */
	
	function Library () {
	  this.tests = {};
	}
	
	/**
	 * #### .of (obj)
	 *
	 * Expose replacement `typeof` detection to the library.
	 *
	 * ```js
	 * if ('string' === lib.of('hello world')) {
	 *   // ...
	 * }
	 * ```
	 *
	 * @param {Mixed} object to test
	 * @return {String} type
	 */
	
	Library.prototype.of = getType;
	
	/**
	 * #### .define (type, test)
	 *
	 * Add a test to for the `.test()` assertion.
	 *
	 * Can be defined as a regular expression:
	 *
	 * ```js
	 * lib.define('int', /^[0-9]+$/);
	 * ```
	 *
	 * ... or as a function:
	 *
	 * ```js
	 * lib.define('bln', function (obj) {
	 *   if ('boolean' === lib.of(obj)) return true;
	 *   var blns = [ 'yes', 'no', 'true', 'false', 1, 0 ];
	 *   if ('string' === lib.of(obj)) obj = obj.toLowerCase();
	 *   return !! ~blns.indexOf(obj);
	 * });
	 * ```
	 *
	 * @param {String} type
	 * @param {RegExp|Function} test
	 * @api public
	 */
	
	Library.prototype.define = function (type, test) {
	  if (arguments.length === 1) return this.tests[type];
	  this.tests[type] = test;
	  return this;
	};
	
	/**
	 * #### .test (obj, test)
	 *
	 * Assert that an object is of type. Will first
	 * check natives, and if that does not pass it will
	 * use the user defined custom tests.
	 *
	 * ```js
	 * assert(lib.test('1', 'int'));
	 * assert(lib.test('yes', 'bln'));
	 * ```
	 *
	 * @param {Mixed} object
	 * @param {String} type
	 * @return {Boolean} result
	 * @api public
	 */
	
	Library.prototype.test = function (obj, type) {
	  if (type === getType(obj)) return true;
	  var test = this.tests[type];
	
	  if (test && 'regexp' === getType(test)) {
	    return test.test(obj);
	  } else if (test && 'function' === getType(test)) {
	    return test(obj);
	  } else {
	    throw new ReferenceError('Type test "' + type + '" not defined or invalid.');
	  }
	};


/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = require("buffer");

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathValue utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * @see https://github.com/logicalparadox/filtr
	 * MIT Licensed
	 */
	
	var getPathInfo = __webpack_require__(28);
	
	/**
	 * ### .getPathValue(path, object)
	 *
	 * This allows the retrieval of values in an
	 * object given a string path.
	 *
	 *     var obj = {
	 *         prop1: {
	 *             arr: ['a', 'b', 'c']
	 *           , str: 'Hello'
	 *         }
	 *       , prop2: {
	 *             arr: [ { nested: 'Universe' } ]
	 *           , str: 'Hello again!'
	 *         }
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     getPathValue('prop1.str', obj); // Hello
	 *     getPathValue('prop1.att[2]', obj); // b
	 *     getPathValue('prop2.arr[0].nested', obj); // Universe
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} value or `undefined`
	 * @namespace Utils
	 * @name getPathValue
	 * @api public
	 */
	module.exports = function(path, obj) {
	  var info = getPathInfo(path, obj);
	  return info.value;
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - getPathInfo utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var hasProperty = __webpack_require__(29);
	
	/**
	 * ### .getPathInfo(path, object)
	 *
	 * This allows the retrieval of property info in an
	 * object given a string path.
	 *
	 * The path info consists of an object with the
	 * following properties:
	 *
	 * * parent - The parent object of the property referenced by `path`
	 * * name - The name of the final property, a number if it was an array indexer
	 * * value - The value of the property, if it exists, otherwise `undefined`
	 * * exists - Whether the property exists or not
	 *
	 * @param {String} path
	 * @param {Object} object
	 * @returns {Object} info
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */
	
	module.exports = function getPathInfo(path, obj) {
	  var parsed = parsePath(path),
	      last = parsed[parsed.length - 1];
	
	  var info = {
	    parent: parsed.length > 1 ? _getPathValue(parsed, obj, parsed.length - 1) : obj,
	    name: last.p || last.i,
	    value: _getPathValue(parsed, obj)
	  };
	  info.exists = hasProperty(info.name, info.parent);
	
	  return info;
	};
	
	
	/*!
	 * ## parsePath(path)
	 *
	 * Helper function used to parse string object
	 * paths. Use in conjunction with `_getPathValue`.
	 *
	 *      var parsed = parsePath('myobject.property.subprop');
	 *
	 * ### Paths:
	 *
	 * * Can be as near infinitely deep and nested
	 * * Arrays are also valid using the formal `myobject.document[3].property`.
	 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
	 *
	 * @param {String} path
	 * @returns {Object} parsed
	 * @api private
	 */
	
	function parsePath (path) {
	  var str = path.replace(/([^\\])\[/g, '$1.[')
	    , parts = str.match(/(\\\.|[^.]+?)+/g);
	  return parts.map(function (value) {
	    var re = /^\[(\d+)\]$/
	      , mArr = re.exec(value);
	    if (mArr) return { i: parseFloat(mArr[1]) };
	    else return { p: value.replace(/\\([.\[\]])/g, '$1') };
	  });
	}
	
	
	/*!
	 * ## _getPathValue(parsed, obj)
	 *
	 * Helper companion function for `.parsePath` that returns
	 * the value located at the parsed address.
	 *
	 *      var value = getPathValue(parsed, obj);
	 *
	 * @param {Object} parsed definition from `parsePath`.
	 * @param {Object} object to search against
	 * @param {Number} object to search against
	 * @returns {Object|Undefined} value
	 * @api private
	 */
	
	function _getPathValue (parsed, obj, index) {
	  var tmp = obj
	    , res;
	
	  index = (index === undefined ? parsed.length : index);
	
	  for (var i = 0, l = index; i < l; i++) {
	    var part = parsed[i];
	    if (tmp) {
	      if ('undefined' !== typeof part.p)
	        tmp = tmp[part.p];
	      else if ('undefined' !== typeof part.i)
	        tmp = tmp[part.i];
	      if (i == (l - 1)) res = tmp;
	    } else {
	      res = undefined;
	    }
	  }
	  return res;
	}


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - hasProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var type = __webpack_require__(10);
	
	/**
	 * ### .hasProperty(object, name)
	 *
	 * This allows checking whether an object has
	 * named property or numeric array index.
	 *
	 * Basically does the same thing as the `in`
	 * operator but works properly with natives
	 * and null/undefined values.
	 *
	 *     var obj = {
	 *         arr: ['a', 'b', 'c']
	 *       , str: 'Hello'
	 *     }
	 *
	 * The following would be the results.
	 *
	 *     hasProperty('str', obj);  // true
	 *     hasProperty('constructor', obj);  // true
	 *     hasProperty('bar', obj);  // false
	 *
	 *     hasProperty('length', obj.str); // true
	 *     hasProperty(1, obj.str);  // true
	 *     hasProperty(5, obj.str);  // false
	 *
	 *     hasProperty('length', obj.arr);  // true
	 *     hasProperty(2, obj.arr);  // true
	 *     hasProperty(3, obj.arr);  // false
	 *
	 * @param {Objuect} object
	 * @param {String|Number} name
	 * @returns {Boolean} whether it exists
	 * @namespace Utils
	 * @name getPathInfo
	 * @api public
	 */
	
	var literals = {
	    'number': Number
	  , 'string': String
	};
	
	module.exports = function hasProperty(name, obj) {
	  var ot = type(obj);
	
	  // Bad Object, obviously no props at all
	  if(ot === 'null' || ot === 'undefined')
	    return false;
	
	  // The `in` operator does not work with certain literals
	  // box these before the check
	  if(literals[ot] && typeof obj !== 'object')
	    obj = new literals[ot](obj);
	
	  return name in obj;
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(20);
	var flag = __webpack_require__(9);
	
	/**
	 * ### addProperty (ctx, name, getter)
	 *
	 * Adds a property to the prototype of an object.
	 *
	 *     utils.addProperty(chai.Assertion.prototype, 'foo', function () {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.instanceof(Foo);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.foo;
	 *
	 * @param {Object} ctx object to which the property is added
	 * @param {String} name of property to add
	 * @param {Function} getter function to be used for name
	 * @namespace Utils
	 * @name addProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  Object.defineProperty(ctx, name,
	    { get: function addProperty() {
	        var old_ssfi = flag(this, 'ssfi');
	        if (old_ssfi && config.includeStack === false)
	          flag(this, 'ssfi', addProperty);
	
	        var result = getter.call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(20);
	
	/**
	 * ### .addMethod (ctx, name, method)
	 *
	 * Adds a method to the prototype of an object.
	 *
	 *     utils.addMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for name
	 * @namespace Utils
	 * @name addMethod
	 * @api public
	 */
	var flag = __webpack_require__(9);
	
	module.exports = function (ctx, name, method) {
	  ctx[name] = function () {
	    var old_ssfi = flag(this, 'ssfi');
	    if (old_ssfi && config.includeStack === false)
	      flag(this, 'ssfi', ctx[name]);
	    var result = method.apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 32 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteProperty utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteProperty (ctx, name, fn)
	 *
	 * Overwites an already existing property getter and provides
	 * access to previous value. Must return function to use as getter.
	 *
	 *     utils.overwriteProperty(chai.Assertion.prototype, 'ok', function (_super) {
	 *       return function () {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.name).to.equal('bar');
	 *         } else {
	 *           _super.call(this);
	 *         }
	 *       }
	 *     });
	 *
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteProperty('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.be.ok;
	 *
	 * @param {Object} ctx object whose property is to be overwritten
	 * @param {String} name of property to overwrite
	 * @param {Function} getter function that returns a getter function to be used for name
	 * @namespace Utils
	 * @name overwriteProperty
	 * @api public
	 */
	
	module.exports = function (ctx, name, getter) {
	  var _get = Object.getOwnPropertyDescriptor(ctx, name)
	    , _super = function () {};
	
	  if (_get && 'function' === typeof _get.get)
	    _super = _get.get
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        var result = getter(_super).call(this);
	        return result === undefined ? this : result;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteMethod (ctx, name, fn)
	 *
	 * Overwites an already existing method and provides
	 * access to previous function. Must return function
	 * to be used for name.
	 *
	 *     utils.overwriteMethod(chai.Assertion.prototype, 'equal', function (_super) {
	 *       return function (str) {
	 *         var obj = utils.flag(this, 'object');
	 *         if (obj instanceof Foo) {
	 *           new chai.Assertion(obj.value).to.equal(str);
	 *         } else {
	 *           _super.apply(this, arguments);
	 *         }
	 *       }
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteMethod('foo', fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.equal('bar');
	 *
	 * @param {Object} ctx object whose method is to be overwritten
	 * @param {String} name of method to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @namespace Utils
	 * @name overwriteMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method) {
	  var _method = ctx[name]
	    , _super = function () { return this; };
	
	  if (_method && 'function' === typeof _method)
	    _super = _method;
	
	  ctx[name] = function () {
	    var result = method(_super).apply(this, arguments);
	    return result === undefined ? this : result;
	  }
	};


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * Chai - addChainingMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/*!
	 * Module dependencies
	 */
	
	var transferFlags = __webpack_require__(21);
	var flag = __webpack_require__(9);
	var config = __webpack_require__(20);
	
	/*!
	 * Module variables
	 */
	
	// Check whether `__proto__` is supported
	var hasProtoSupport = '__proto__' in Object;
	
	// Without `__proto__` support, this module will need to add properties to a function.
	// However, some Function.prototype methods cannot be overwritten,
	// and there seems no easy cross-platform way to detect them (@see chaijs/chai/issues/69).
	var excludeNames = /^(?:length|name|arguments|caller)$/;
	
	// Cache `Function` properties
	var call  = Function.prototype.call,
	    apply = Function.prototype.apply;
	
	/**
	 * ### addChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Adds a method to an object, such that the method can also be chained.
	 *
	 *     utils.addChainableMethod(chai.Assertion.prototype, 'foo', function (str) {
	 *       var obj = utils.flag(this, 'object');
	 *       new chai.Assertion(obj).to.be.equal(str);
	 *     });
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.addChainableMethod('foo', fn, chainingBehavior);
	 *
	 * The result can then be used as both a method assertion, executing both `method` and
	 * `chainingBehavior`, or as a language chain, which only executes `chainingBehavior`.
	 *
	 *     expect(fooStr).to.be.foo('bar');
	 *     expect(fooStr).to.be.foo.equal('foo');
	 *
	 * @param {Object} ctx object to which the method is added
	 * @param {String} name of method to add
	 * @param {Function} method function to be used for `name`, when called
	 * @param {Function} chainingBehavior function to be called every time the property is accessed
	 * @namespace Utils
	 * @name addChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  if (typeof chainingBehavior !== 'function') {
	    chainingBehavior = function () { };
	  }
	
	  var chainableBehavior = {
	      method: method
	    , chainingBehavior: chainingBehavior
	  };
	
	  // save the methods so we can overwrite them later, if we need to.
	  if (!ctx.__methods) {
	    ctx.__methods = {};
	  }
	  ctx.__methods[name] = chainableBehavior;
	
	  Object.defineProperty(ctx, name,
	    { get: function () {
	        chainableBehavior.chainingBehavior.call(this);
	
	        var assert = function assert() {
	          var old_ssfi = flag(this, 'ssfi');
	          if (old_ssfi && config.includeStack === false)
	            flag(this, 'ssfi', assert);
	          var result = chainableBehavior.method.apply(this, arguments);
	          return result === undefined ? this : result;
	        };
	
	        // Use `__proto__` if available
	        if (hasProtoSupport) {
	          // Inherit all properties from the object by replacing the `Function` prototype
	          var prototype = assert.__proto__ = Object.create(this);
	          // Restore the `call` and `apply` methods from `Function`
	          prototype.call = call;
	          prototype.apply = apply;
	        }
	        // Otherwise, redefine all properties (slow!)
	        else {
	          var asserterNames = Object.getOwnPropertyNames(ctx);
	          asserterNames.forEach(function (asserterName) {
	            if (!excludeNames.test(asserterName)) {
	              var pd = Object.getOwnPropertyDescriptor(ctx, asserterName);
	              Object.defineProperty(assert, asserterName, pd);
	            }
	          });
	        }
	
	        transferFlags(this, assert);
	        return assert;
	      }
	    , configurable: true
	  });
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	/*!
	 * Chai - overwriteChainableMethod utility
	 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	/**
	 * ### overwriteChainableMethod (ctx, name, method, chainingBehavior)
	 *
	 * Overwites an already existing chainable method
	 * and provides access to the previous function or
	 * property.  Must return functions to be used for
	 * name.
	 *
	 *     utils.overwriteChainableMethod(chai.Assertion.prototype, 'length',
	 *       function (_super) {
	 *       }
	 *     , function (_super) {
	 *       }
	 *     );
	 *
	 * Can also be accessed directly from `chai.Assertion`.
	 *
	 *     chai.Assertion.overwriteChainableMethod('foo', fn, fn);
	 *
	 * Then can be used as any other assertion.
	 *
	 *     expect(myFoo).to.have.length(3);
	 *     expect(myFoo).to.have.length.above(3);
	 *
	 * @param {Object} ctx object whose method / property is to be overwritten
	 * @param {String} name of method / property to overwrite
	 * @param {Function} method function that returns a function to be used for name
	 * @param {Function} chainingBehavior function that returns a function to be used for property
	 * @namespace Utils
	 * @name overwriteChainableMethod
	 * @api public
	 */
	
	module.exports = function (ctx, name, method, chainingBehavior) {
	  var chainableBehavior = ctx.__methods[name];
	
	  var _chainingBehavior = chainableBehavior.chainingBehavior;
	  chainableBehavior.chainingBehavior = function () {
	    var result = chainingBehavior(_chainingBehavior).call(this);
	    return result === undefined ? this : result;
	  };
	
	  var _method = chainableBehavior.method;
	  chainableBehavior.method = function () {
	    var result = method(_method).apply(this, arguments);
	    return result === undefined ? this : result;
	  };
	};


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	var config = __webpack_require__(20);
	
	module.exports = function (_chai, util) {
	  /*!
	   * Module dependencies.
	   */
	
	  var AssertionError = _chai.AssertionError
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  _chai.Assertion = Assertion;
	
	  /*!
	   * Assertion Constructor
	   *
	   * Creates object for chaining.
	   *
	   * @api private
	   */
	
	  function Assertion (obj, msg, stack) {
	    flag(this, 'ssfi', stack || arguments.callee);
	    flag(this, 'object', obj);
	    flag(this, 'message', msg);
	  }
	
	  Object.defineProperty(Assertion, 'includeStack', {
	    get: function() {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      return config.includeStack;
	    },
	    set: function(value) {
	      console.warn('Assertion.includeStack is deprecated, use chai.config.includeStack instead.');
	      config.includeStack = value;
	    }
	  });
	
	  Object.defineProperty(Assertion, 'showDiff', {
	    get: function() {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      return config.showDiff;
	    },
	    set: function(value) {
	      console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.');
	      config.showDiff = value;
	    }
	  });
	
	  Assertion.addProperty = function (name, fn) {
	    util.addProperty(this.prototype, name, fn);
	  };
	
	  Assertion.addMethod = function (name, fn) {
	    util.addMethod(this.prototype, name, fn);
	  };
	
	  Assertion.addChainableMethod = function (name, fn, chainingBehavior) {
	    util.addChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  Assertion.overwriteProperty = function (name, fn) {
	    util.overwriteProperty(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteMethod = function (name, fn) {
	    util.overwriteMethod(this.prototype, name, fn);
	  };
	
	  Assertion.overwriteChainableMethod = function (name, fn, chainingBehavior) {
	    util.overwriteChainableMethod(this.prototype, name, fn, chainingBehavior);
	  };
	
	  /**
	   * ### .assert(expression, message, negateMessage, expected, actual, showDiff)
	   *
	   * Executes an expression and check expectations. Throws AssertionError for reporting if test doesn't pass.
	   *
	   * @name assert
	   * @param {Philosophical} expression to be tested
	   * @param {String|Function} message or function that returns message to display if expression fails
	   * @param {String|Function} negatedMessage or function that returns negatedMessage to display if negated expression fails
	   * @param {Mixed} expected value (remember to check for negation)
	   * @param {Mixed} actual (optional) will default to `this.obj`
	   * @param {Boolean} showDiff (optional) when set to `true`, assert will display a diff in addition to the message if expression fails
	   * @api private
	   */
	
	  Assertion.prototype.assert = function (expr, msg, negateMsg, expected, _actual, showDiff) {
	    var ok = util.test(this, arguments);
	    if (true !== showDiff) showDiff = false;
	    if (true !== config.showDiff) showDiff = false;
	
	    if (!ok) {
	      var msg = util.getMessage(this, arguments)
	        , actual = util.getActual(this, arguments);
	      throw new AssertionError(msg, {
	          actual: actual
	        , expected: expected
	        , showDiff: showDiff
	      }, (config.includeStack) ? this.assert : flag(this, 'ssfi'));
	    }
	  };
	
	  /*!
	   * ### ._obj
	   *
	   * Quick reference to stored `actual` value for plugin developers.
	   *
	   * @api private
	   */
	
	  Object.defineProperty(Assertion.prototype, '_obj',
	    { get: function () {
	        return flag(this, 'object');
	      }
	    , set: function (val) {
	        flag(this, 'object', val);
	      }
	  });
	};


/***/ },
/* 37 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * http://chaijs.com
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, _) {
	  var Assertion = chai.Assertion
	    , toString = Object.prototype.toString
	    , flag = _.flag;
	
	  /**
	   * ### Language Chains
	   *
	   * The following are provided as chainable getters to
	   * improve the readability of your assertions. They
	   * do not provide testing capabilities unless they
	   * have been overwritten by a plugin.
	   *
	   * **Chains**
	   *
	   * - to
	   * - be
	   * - been
	   * - is
	   * - that
	   * - which
	   * - and
	   * - has
	   * - have
	   * - with
	   * - at
	   * - of
	   * - same
	   *
	   * @name language chains
	   * @namespace BDD
	   * @api public
	   */
	
	  [ 'to', 'be', 'been'
	  , 'is', 'and', 'has', 'have'
	  , 'with', 'that', 'which', 'at'
	  , 'of', 'same' ].forEach(function (chain) {
	    Assertion.addProperty(chain, function () {
	      return this;
	    });
	  });
	
	  /**
	   * ### .not
	   *
	   * Negates any of assertions following in the chain.
	   *
	   *     expect(foo).to.not.equal('bar');
	   *     expect(goodFn).to.not.throw(Error);
	   *     expect({ foo: 'baz' }).to.have.property('foo')
	   *       .and.not.equal('bar');
	   *
	   * @name not
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('not', function () {
	    flag(this, 'negate', true);
	  });
	
	  /**
	   * ### .deep
	   *
	   * Sets the `deep` flag, later used by the `equal` and
	   * `property` assertions.
	   *
	   *     expect(foo).to.deep.equal({ bar: 'baz' });
	   *     expect({ foo: { bar: { baz: 'quux' } } })
	   *       .to.have.deep.property('foo.bar.baz', 'quux');
	   *
	   * `.deep.property` special characters can be escaped
	   * by adding two slashes before the `.` or `[]`.
	   *
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name deep
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('deep', function () {
	    flag(this, 'deep', true);
	  });
	
	  /**
	   * ### .any
	   *
	   * Sets the `any` flag, (opposite of the `all` flag)
	   * later used in the `keys` assertion.
	   *
	   *     expect(foo).to.have.any.keys('bar', 'baz');
	   *
	   * @name any
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('any', function () {
	    flag(this, 'any', true);
	    flag(this, 'all', false)
	  });
	
	
	  /**
	   * ### .all
	   *
	   * Sets the `all` flag (opposite of the `any` flag)
	   * later used by the `keys` assertion.
	   *
	   *     expect(foo).to.have.all.keys('bar', 'baz');
	   *
	   * @name all
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('all', function () {
	    flag(this, 'all', true);
	    flag(this, 'any', false);
	  });
	
	  /**
	   * ### .a(type)
	   *
	   * The `a` and `an` assertions are aliases that can be
	   * used either as language chains or to assert a value's
	   * type.
	   *
	   *     // typeof
	   *     expect('test').to.be.a('string');
	   *     expect({ foo: 'bar' }).to.be.an('object');
	   *     expect(null).to.be.a('null');
	   *     expect(undefined).to.be.an('undefined');
	   *     expect(new Error).to.be.an('error');
	   *     expect(new Promise).to.be.a('promise');
	   *     expect(new Float32Array()).to.be.a('float32array');
	   *     expect(Symbol()).to.be.a('symbol');
	   *
	   *     // es6 overrides
	   *     expect({[Symbol.toStringTag]:()=>'foo'}).to.be.a('foo');
	   *
	   *     // language chain
	   *     expect(foo).to.be.an.instanceof(Foo);
	   *
	   * @name a
	   * @alias an
	   * @param {String} type
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function an (type, msg) {
	    if (msg) flag(this, 'message', msg);
	    type = type.toLowerCase();
	    var obj = flag(this, 'object')
	      , article = ~[ 'a', 'e', 'i', 'o', 'u' ].indexOf(type.charAt(0)) ? 'an ' : 'a ';
	
	    this.assert(
	        type === _.type(obj)
	      , 'expected #{this} to be ' + article + type
	      , 'expected #{this} not to be ' + article + type
	    );
	  }
	
	  Assertion.addChainableMethod('an', an);
	  Assertion.addChainableMethod('a', an);
	
	  /**
	   * ### .include(value)
	   *
	   * The `include` and `contain` assertions can be used as either property
	   * based language chains or as methods to assert the inclusion of an object
	   * in an array or a substring in a string. When used as language chains,
	   * they toggle the `contains` flag for the `keys` assertion.
	   *
	   *     expect([1,2,3]).to.include(2);
	   *     expect('foobar').to.contain('foo');
	   *     expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
	   *
	   * @name include
	   * @alias contain
	   * @alias includes
	   * @alias contains
	   * @param {Object|String|Number} obj
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function includeChainingBehavior () {
	    flag(this, 'contains', true);
	  }
	
	  function include (val, msg) {
	    _.expectTypes(this, ['array', 'object', 'string']);
	
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var expected = false;
	
	    if (_.type(obj) === 'array' && _.type(val) === 'object') {
	      for (var i in obj) {
	        if (_.eql(obj[i], val)) {
	          expected = true;
	          break;
	        }
	      }
	    } else if (_.type(val) === 'object') {
	      if (!flag(this, 'negate')) {
	        for (var k in val) new Assertion(obj).property(k, val[k]);
	        return;
	      }
	      var subset = {};
	      for (var k in val) subset[k] = obj[k];
	      expected = _.eql(subset, val);
	    } else {
	      expected = (obj != undefined) && ~obj.indexOf(val);
	    }
	    this.assert(
	        expected
	      , 'expected #{this} to include ' + _.inspect(val)
	      , 'expected #{this} to not include ' + _.inspect(val));
	  }
	
	  Assertion.addChainableMethod('include', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contain', include, includeChainingBehavior);
	  Assertion.addChainableMethod('contains', include, includeChainingBehavior);
	  Assertion.addChainableMethod('includes', include, includeChainingBehavior);
	
	  /**
	   * ### .ok
	   *
	   * Asserts that the target is truthy.
	   *
	   *     expect('everything').to.be.ok;
	   *     expect(1).to.be.ok;
	   *     expect(false).to.not.be.ok;
	   *     expect(undefined).to.not.be.ok;
	   *     expect(null).to.not.be.ok;
	   *
	   * @name ok
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('ok', function () {
	    this.assert(
	        flag(this, 'object')
	      , 'expected #{this} to be truthy'
	      , 'expected #{this} to be falsy');
	  });
	
	  /**
	   * ### .true
	   *
	   * Asserts that the target is `true`.
	   *
	   *     expect(true).to.be.true;
	   *     expect(1).to.not.be.true;
	   *
	   * @name true
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('true', function () {
	    this.assert(
	        true === flag(this, 'object')
	      , 'expected #{this} to be true'
	      , 'expected #{this} to be false'
	      , this.negate ? false : true
	    );
	  });
	
	  /**
	   * ### .false
	   *
	   * Asserts that the target is `false`.
	   *
	   *     expect(false).to.be.false;
	   *     expect(0).to.not.be.false;
	   *
	   * @name false
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('false', function () {
	    this.assert(
	        false === flag(this, 'object')
	      , 'expected #{this} to be false'
	      , 'expected #{this} to be true'
	      , this.negate ? true : false
	    );
	  });
	
	  /**
	   * ### .null
	   *
	   * Asserts that the target is `null`.
	   *
	   *     expect(null).to.be.null;
	   *     expect(undefined).to.not.be.null;
	   *
	   * @name null
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('null', function () {
	    this.assert(
	        null === flag(this, 'object')
	      , 'expected #{this} to be null'
	      , 'expected #{this} not to be null'
	    );
	  });
	
	  /**
	   * ### .undefined
	   *
	   * Asserts that the target is `undefined`.
	   *
	   *     expect(undefined).to.be.undefined;
	   *     expect(null).to.not.be.undefined;
	   *
	   * @name undefined
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('undefined', function () {
	    this.assert(
	        undefined === flag(this, 'object')
	      , 'expected #{this} to be undefined'
	      , 'expected #{this} not to be undefined'
	    );
	  });
	
	  /**
	   * ### .NaN
	   * Asserts that the target is `NaN`.
	   *
	   *     expect('foo').to.be.NaN;
	   *     expect(4).not.to.be.NaN;
	   *
	   * @name NaN
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('NaN', function () {
	    this.assert(
	        isNaN(flag(this, 'object'))
	        , 'expected #{this} to be NaN'
	        , 'expected #{this} not to be NaN'
	    );
	  });
	
	  /**
	   * ### .exist
	   *
	   * Asserts that the target is neither `null` nor `undefined`.
	   *
	   *     var foo = 'hi'
	   *       , bar = null
	   *       , baz;
	   *
	   *     expect(foo).to.exist;
	   *     expect(bar).to.not.exist;
	   *     expect(baz).to.not.exist;
	   *
	   * @name exist
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('exist', function () {
	    this.assert(
	        null != flag(this, 'object')
	      , 'expected #{this} to exist'
	      , 'expected #{this} to not exist'
	    );
	  });
	
	
	  /**
	   * ### .empty
	   *
	   * Asserts that the target's length is `0`. For arrays and strings, it checks
	   * the `length` property. For objects, it gets the count of
	   * enumerable keys.
	   *
	   *     expect([]).to.be.empty;
	   *     expect('').to.be.empty;
	   *     expect({}).to.be.empty;
	   *
	   * @name empty
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('empty', function () {
	    var obj = flag(this, 'object')
	      , expected = obj;
	
	    if (Array.isArray(obj) || 'string' === typeof object) {
	      expected = obj.length;
	    } else if (typeof obj === 'object') {
	      expected = Object.keys(obj).length;
	    }
	
	    this.assert(
	        !expected
	      , 'expected #{this} to be empty'
	      , 'expected #{this} not to be empty'
	    );
	  });
	
	  /**
	   * ### .arguments
	   *
	   * Asserts that the target is an arguments object.
	   *
	   *     function test () {
	   *       expect(arguments).to.be.arguments;
	   *     }
	   *
	   * @name arguments
	   * @alias Arguments
	   * @namespace BDD
	   * @api public
	   */
	
	  function checkArguments () {
	    var obj = flag(this, 'object')
	      , type = Object.prototype.toString.call(obj);
	    this.assert(
	        '[object Arguments]' === type
	      , 'expected #{this} to be arguments but got ' + type
	      , 'expected #{this} to not be arguments'
	    );
	  }
	
	  Assertion.addProperty('arguments', checkArguments);
	  Assertion.addProperty('Arguments', checkArguments);
	
	  /**
	   * ### .equal(value)
	   *
	   * Asserts that the target is strictly equal (`===`) to `value`.
	   * Alternately, if the `deep` flag is set, asserts that
	   * the target is deeply equal to `value`.
	   *
	   *     expect('hello').to.equal('hello');
	   *     expect(42).to.equal(42);
	   *     expect(1).to.not.equal(true);
	   *     expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
	   *     expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
	   *
	   * @name equal
	   * @alias equals
	   * @alias eq
	   * @alias deep.equal
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertEqual (val, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'deep')) {
	      return this.eql(val);
	    } else {
	      this.assert(
	          val === obj
	        , 'expected #{this} to equal #{exp}'
	        , 'expected #{this} to not equal #{exp}'
	        , val
	        , this._obj
	        , true
	      );
	    }
	  }
	
	  Assertion.addMethod('equal', assertEqual);
	  Assertion.addMethod('equals', assertEqual);
	  Assertion.addMethod('eq', assertEqual);
	
	  /**
	   * ### .eql(value)
	   *
	   * Asserts that the target is deeply equal to `value`.
	   *
	   *     expect({ foo: 'bar' }).to.eql({ foo: 'bar' });
	   *     expect([ 1, 2, 3 ]).to.eql([ 1, 2, 3 ]);
	   *
	   * @name eql
	   * @alias eqls
	   * @param {Mixed} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertEql(obj, msg) {
	    if (msg) flag(this, 'message', msg);
	    this.assert(
	        _.eql(obj, flag(this, 'object'))
	      , 'expected #{this} to deeply equal #{exp}'
	      , 'expected #{this} to not deeply equal #{exp}'
	      , obj
	      , this._obj
	      , true
	    );
	  }
	
	  Assertion.addMethod('eql', assertEql);
	  Assertion.addMethod('eqls', assertEql);
	
	  /**
	   * ### .above(value)
	   *
	   * Asserts that the target is greater than `value`.
	   *
	   *     expect(10).to.be.above(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *
	   * @name above
	   * @alias gt
	   * @alias greaterThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertAbove (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len > n
	        , 'expected #{this} to have a length above #{exp} but got #{act}'
	        , 'expected #{this} to not have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj > n
	        , 'expected #{this} to be above ' + n
	        , 'expected #{this} to be at most ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('above', assertAbove);
	  Assertion.addMethod('gt', assertAbove);
	  Assertion.addMethod('greaterThan', assertAbove);
	
	  /**
	   * ### .least(value)
	   *
	   * Asserts that the target is greater than or equal to `value`.
	   *
	   *     expect(10).to.be.at.least(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a minimum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.least(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.least(3);
	   *
	   * @name least
	   * @alias gte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertLeast (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= n
	        , 'expected #{this} to have a length at least #{exp} but got #{act}'
	        , 'expected #{this} to have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj >= n
	        , 'expected #{this} to be at least ' + n
	        , 'expected #{this} to be below ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('least', assertLeast);
	  Assertion.addMethod('gte', assertLeast);
	
	  /**
	   * ### .below(value)
	   *
	   * Asserts that the target is less than `value`.
	   *
	   *     expect(5).to.be.below(10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *
	   * @name below
	   * @alias lt
	   * @alias lessThan
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertBelow (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len < n
	        , 'expected #{this} to have a length below #{exp} but got #{act}'
	        , 'expected #{this} to not have a length below #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj < n
	        , 'expected #{this} to be below ' + n
	        , 'expected #{this} to be at least ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('below', assertBelow);
	  Assertion.addMethod('lt', assertBelow);
	  Assertion.addMethod('lessThan', assertBelow);
	
	  /**
	   * ### .most(value)
	   *
	   * Asserts that the target is less than or equal to `value`.
	   *
	   *     expect(5).to.be.at.most(5);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a maximum length. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.of.at.most(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.of.at.most(3);
	   *
	   * @name most
	   * @alias lte
	   * @param {Number} value
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertMost (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len <= n
	        , 'expected #{this} to have a length at most #{exp} but got #{act}'
	        , 'expected #{this} to have a length above #{exp}'
	        , n
	        , len
	      );
	    } else {
	      this.assert(
	          obj <= n
	        , 'expected #{this} to be at most ' + n
	        , 'expected #{this} to be above ' + n
	      );
	    }
	  }
	
	  Assertion.addMethod('most', assertMost);
	  Assertion.addMethod('lte', assertMost);
	
	  /**
	   * ### .within(start, finish)
	   *
	   * Asserts that the target is within a range.
	   *
	   *     expect(7).to.be.within(5,10);
	   *
	   * Can also be used in conjunction with `length` to
	   * assert a length range. The benefit being a
	   * more informative error message than if the length
	   * was supplied directly.
	   *
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * @name within
	   * @param {Number} start lowerbound inclusive
	   * @param {Number} finish upperbound inclusive
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('within', function (start, finish, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , range = start + '..' + finish;
	    if (flag(this, 'doLength')) {
	      new Assertion(obj, msg).to.have.property('length');
	      var len = obj.length;
	      this.assert(
	          len >= start && len <= finish
	        , 'expected #{this} to have a length within ' + range
	        , 'expected #{this} to not have a length within ' + range
	      );
	    } else {
	      this.assert(
	          obj >= start && obj <= finish
	        , 'expected #{this} to be within ' + range
	        , 'expected #{this} to not be within ' + range
	      );
	    }
	  });
	
	  /**
	   * ### .instanceof(constructor)
	   *
	   * Asserts that the target is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , Chai = new Tea('chai');
	   *
	   *     expect(Chai).to.be.an.instanceof(Tea);
	   *     expect([ 1, 2, 3 ]).to.be.instanceof(Array);
	   *
	   * @name instanceof
	   * @param {Constructor} constructor
	   * @param {String} message _optional_
	   * @alias instanceOf
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertInstanceOf (constructor, msg) {
	    if (msg) flag(this, 'message', msg);
	    var name = _.getName(constructor);
	    this.assert(
	        flag(this, 'object') instanceof constructor
	      , 'expected #{this} to be an instance of ' + name
	      , 'expected #{this} to not be an instance of ' + name
	    );
	  };
	
	  Assertion.addMethod('instanceof', assertInstanceOf);
	  Assertion.addMethod('instanceOf', assertInstanceOf);
	
	  /**
	   * ### .property(name, [value])
	   *
	   * Asserts that the target has a property `name`, optionally asserting that
	   * the value of that property is strictly equal to  `value`.
	   * If the `deep` flag is set, you can use dot- and bracket-notation for deep
	   * references into objects and arrays.
	   *
	   *     // simple referencing
	   *     var obj = { foo: 'bar' };
	   *     expect(obj).to.have.property('foo');
	   *     expect(obj).to.have.property('foo', 'bar');
	   *
	   *     // deep referencing
	   *     var deepObj = {
	   *         green: { tea: 'matcha' }
	   *       , teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
	   *     };
	   *
	   *     expect(deepObj).to.have.deep.property('green.tea', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
	   *     expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha');
	   *
	   * You can also use an array as the starting point of a `deep.property`
	   * assertion, or traverse nested arrays.
	   *
	   *     var arr = [
	   *         [ 'chai', 'matcha', 'konacha' ]
	   *       , [ { tea: 'chai' }
	   *         , { tea: 'matcha' }
	   *         , { tea: 'konacha' } ]
	   *     ];
	   *
	   *     expect(arr).to.have.deep.property('[0][1]', 'matcha');
	   *     expect(arr).to.have.deep.property('[1][2].tea', 'konacha');
	   *
	   * Furthermore, `property` changes the subject of the assertion
	   * to be the value of that property from the original object. This
	   * permits for further chainable assertions on that property.
	   *
	   *     expect(obj).to.have.property('foo')
	   *       .that.is.a('string');
	   *     expect(deepObj).to.have.property('green')
	   *       .that.is.an('object')
	   *       .that.deep.equals({ tea: 'matcha' });
	   *     expect(deepObj).to.have.property('teas')
	   *       .that.is.an('array')
	   *       .with.deep.property('[2]')
	   *         .that.deep.equals({ tea: 'konacha' });
	   *
	   * Note that dots and bracket in `name` must be backslash-escaped when
	   * the `deep` flag is set, while they must NOT be escaped when the `deep`
	   * flag is not set.
	   *
	   *     // simple referencing
	   *     var css = { '.link[target]': 42 };
	   *     expect(css).to.have.property('.link[target]', 42);
	   *
	   *     // deep referencing
	   *     var deepCss = { '.link': { '[target]': 42 }};
	   *     expect(deepCss).to.have.deep.property('\\.link.\\[target\\]', 42);
	   *
	   * @name property
	   * @alias deep.property
	   * @param {String} name
	   * @param {Mixed} value (optional)
	   * @param {String} message _optional_
	   * @returns value of property for chaining
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('property', function (name, val, msg) {
	    if (msg) flag(this, 'message', msg);
	
	    var isDeep = !!flag(this, 'deep')
	      , descriptor = isDeep ? 'deep property ' : 'property '
	      , negate = flag(this, 'negate')
	      , obj = flag(this, 'object')
	      , pathInfo = isDeep ? _.getPathInfo(name, obj) : null
	      , hasProperty = isDeep
	        ? pathInfo.exists
	        : _.hasProperty(name, obj)
	      , value = isDeep
	        ? pathInfo.value
	        : obj[name];
	
	    if (negate && arguments.length > 1) {
	      if (undefined === value) {
	        msg = (msg != null) ? msg + ': ' : '';
	        throw new Error(msg + _.inspect(obj) + ' has no ' + descriptor + _.inspect(name));
	      }
	    } else {
	      this.assert(
	          hasProperty
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name)
	        , 'expected #{this} to not have ' + descriptor + _.inspect(name));
	    }
	
	    if (arguments.length > 1) {
	      this.assert(
	          val === value
	        , 'expected #{this} to have a ' + descriptor + _.inspect(name) + ' of #{exp}, but got #{act}'
	        , 'expected #{this} to not have a ' + descriptor + _.inspect(name) + ' of #{act}'
	        , val
	        , value
	      );
	    }
	
	    flag(this, 'object', value);
	  });
	
	
	  /**
	   * ### .ownProperty(name)
	   *
	   * Asserts that the target has an own property `name`.
	   *
	   *     expect('test').to.have.ownProperty('length');
	   *
	   * @name ownProperty
	   * @alias haveOwnProperty
	   * @param {String} name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertOwnProperty (name, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        obj.hasOwnProperty(name)
	      , 'expected #{this} to have own property ' + _.inspect(name)
	      , 'expected #{this} to not have own property ' + _.inspect(name)
	    );
	  }
	
	  Assertion.addMethod('ownProperty', assertOwnProperty);
	  Assertion.addMethod('haveOwnProperty', assertOwnProperty);
	
	  /**
	   * ### .ownPropertyDescriptor(name[, descriptor[, message]])
	   *
	   * Asserts that the target has an own property descriptor `name`, that optionally matches `descriptor`.
	   *
	   *     expect('test').to.have.ownPropertyDescriptor('length');
	   *     expect('test').to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 4 });
	   *     expect('test').not.to.have.ownPropertyDescriptor('length', { enumerable: false, configurable: false, writable: false, value: 3 });
	   *     expect('test').ownPropertyDescriptor('length').to.have.property('enumerable', false);
	   *     expect('test').ownPropertyDescriptor('length').to.have.keys('value');
	   *
	   * @name ownPropertyDescriptor
	   * @alias haveOwnPropertyDescriptor
	   * @param {String} name
	   * @param {Object} descriptor _optional_
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertOwnPropertyDescriptor (name, descriptor, msg) {
	    if (typeof descriptor === 'string') {
	      msg = descriptor;
	      descriptor = null;
	    }
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var actualDescriptor = Object.getOwnPropertyDescriptor(Object(obj), name);
	    if (actualDescriptor && descriptor) {
	      this.assert(
	          _.eql(descriptor, actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to match ' + _.inspect(descriptor) + ', got ' + _.inspect(actualDescriptor)
	        , 'expected the own property descriptor for ' + _.inspect(name) + ' on #{this} to not match ' + _.inspect(descriptor)
	        , descriptor
	        , actualDescriptor
	        , true
	      );
	    } else {
	      this.assert(
	          actualDescriptor
	        , 'expected #{this} to have an own property descriptor for ' + _.inspect(name)
	        , 'expected #{this} to not have an own property descriptor for ' + _.inspect(name)
	      );
	    }
	    flag(this, 'object', actualDescriptor);
	  }
	
	  Assertion.addMethod('ownPropertyDescriptor', assertOwnPropertyDescriptor);
	  Assertion.addMethod('haveOwnPropertyDescriptor', assertOwnPropertyDescriptor);
	
	  /**
	   * ### .length
	   *
	   * Sets the `doLength` flag later used as a chain precursor to a value
	   * comparison for the `length` property.
	   *
	   *     expect('foo').to.have.length.above(2);
	   *     expect([ 1, 2, 3 ]).to.have.length.above(2);
	   *     expect('foo').to.have.length.below(4);
	   *     expect([ 1, 2, 3 ]).to.have.length.below(4);
	   *     expect('foo').to.have.length.within(2,4);
	   *     expect([ 1, 2, 3 ]).to.have.length.within(2,4);
	   *
	   * *Deprecation notice:* Using `length` as an assertion will be deprecated
	   * in version 2.4.0 and removed in 3.0.0. Code using the old style of
	   * asserting for `length` property value using `length(value)` should be
	   * switched to use `lengthOf(value)` instead.
	   *
	   * @name length
	   * @namespace BDD
	   * @api public
	   */
	
	  /**
	   * ### .lengthOf(value[, message])
	   *
	   * Asserts that the target's `length` property has
	   * the expected value.
	   *
	   *     expect([ 1, 2, 3]).to.have.lengthOf(3);
	   *     expect('foobar').to.have.lengthOf(6);
	   *
	   * @name lengthOf
	   * @param {Number} length
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertLengthChain () {
	    flag(this, 'doLength', true);
	  }
	
	  function assertLength (n, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).to.have.property('length');
	    var len = obj.length;
	
	    this.assert(
	        len == n
	      , 'expected #{this} to have a length of #{exp} but got #{act}'
	      , 'expected #{this} to not have a length of #{act}'
	      , n
	      , len
	    );
	  }
	
	  Assertion.addChainableMethod('length', assertLength, assertLengthChain);
	  Assertion.addMethod('lengthOf', assertLength);
	
	  /**
	   * ### .match(regexp)
	   *
	   * Asserts that the target matches a regular expression.
	   *
	   *     expect('foobar').to.match(/^foo/);
	   *
	   * @name match
	   * @alias matches
	   * @param {RegExp} RegularExpression
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	  function assertMatch(re, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    this.assert(
	        re.exec(obj)
	      , 'expected #{this} to match ' + re
	      , 'expected #{this} not to match ' + re
	    );
	  }
	
	  Assertion.addMethod('match', assertMatch);
	  Assertion.addMethod('matches', assertMatch);
	
	  /**
	   * ### .string(string)
	   *
	   * Asserts that the string target contains another string.
	   *
	   *     expect('foobar').to.have.string('bar');
	   *
	   * @name string
	   * @param {String} string
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('string', function (str, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('string');
	
	    this.assert(
	        ~obj.indexOf(str)
	      , 'expected #{this} to contain ' + _.inspect(str)
	      , 'expected #{this} to not contain ' + _.inspect(str)
	    );
	  });
	
	
	  /**
	   * ### .keys(key1, [key2], [...])
	   *
	   * Asserts that the target contains any or all of the passed-in keys.
	   * Use in combination with `any`, `all`, `contains`, or `have` will affect
	   * what will pass.
	   *
	   * When used in conjunction with `any`, at least one key that is passed
	   * in must exist in the target object. This is regardless whether or not
	   * the `have` or `contain` qualifiers are used. Note, either `any` or `all`
	   * should be used in the assertion. If neither are used, the assertion is
	   * defaulted to `all`.
	   *
	   * When both `all` and `contain` are used, the target object must have at
	   * least all of the passed-in keys but may have more keys not listed.
	   *
	   * When both `all` and `have` are used, the target object must both contain
	   * all of the passed-in keys AND the number of keys in the target object must
	   * match the number of keys passed in (in other words, a target object must
	   * have all and only all of the passed-in keys).
	   *
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.have.any.keys('foo');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys('bar', 'baz');
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys(['foo']);
	   *     expect({ foo: 1, bar: 2 }).to.contain.any.keys({'foo': 6});
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2 }).to.have.all.keys({'bar': 6, 'foo': 7});
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys(['bar', 'foo']);
	   *     expect({ foo: 1, bar: 2, baz: 3 }).to.contain.all.keys({'bar': 6});
	   *
	   *
	   * @name keys
	   * @alias key
	   * @param {...String|Array|Object} keys
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertKeys (keys) {
	    var obj = flag(this, 'object')
	      , str
	      , ok = true
	      , mixedArgsMsg = 'keys must be given single argument of Array|Object|String, or multiple String arguments';
	
	    switch (_.type(keys)) {
	      case "array":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        break;
	      case "object":
	        if (arguments.length > 1) throw (new Error(mixedArgsMsg));
	        keys = Object.keys(keys);
	        break;
	      default:
	        keys = Array.prototype.slice.call(arguments);
	    }
	
	    if (!keys.length) throw new Error('keys required');
	
	    var actual = Object.keys(obj)
	      , expected = keys
	      , len = keys.length
	      , any = flag(this, 'any')
	      , all = flag(this, 'all');
	
	    if (!any && !all) {
	      all = true;
	    }
	
	    // Has any
	    if (any) {
	      var intersection = expected.filter(function(key) {
	        return ~actual.indexOf(key);
	      });
	      ok = intersection.length > 0;
	    }
	
	    // Has all
	    if (all) {
	      ok = keys.every(function(key){
	        return ~actual.indexOf(key);
	      });
	      if (!flag(this, 'negate') && !flag(this, 'contains')) {
	        ok = ok && keys.length == actual.length;
	      }
	    }
	
	    // Key string
	    if (len > 1) {
	      keys = keys.map(function(key){
	        return _.inspect(key);
	      });
	      var last = keys.pop();
	      if (all) {
	        str = keys.join(', ') + ', and ' + last;
	      }
	      if (any) {
	        str = keys.join(', ') + ', or ' + last;
	      }
	    } else {
	      str = _.inspect(keys[0]);
	    }
	
	    // Form
	    str = (len > 1 ? 'keys ' : 'key ') + str;
	
	    // Have / include
	    str = (flag(this, 'contains') ? 'contain ' : 'have ') + str;
	
	    // Assertion
	    this.assert(
	        ok
	      , 'expected #{this} to ' + str
	      , 'expected #{this} to not ' + str
	      , expected.slice(0).sort()
	      , actual.sort()
	      , true
	    );
	  }
	
	  Assertion.addMethod('keys', assertKeys);
	  Assertion.addMethod('key', assertKeys);
	
	  /**
	   * ### .throw(constructor)
	   *
	   * Asserts that the function target will throw a specific error, or specific type of error
	   * (as determined using `instanceof`), optionally with a RegExp or string inclusion test
	   * for the error's message.
	   *
	   *     var err = new ReferenceError('This is a bad function.');
	   *     var fn = function () { throw err; }
	   *     expect(fn).to.throw(ReferenceError);
	   *     expect(fn).to.throw(Error);
	   *     expect(fn).to.throw(/bad function/);
	   *     expect(fn).to.not.throw('good function');
	   *     expect(fn).to.throw(ReferenceError, /bad function/);
	   *     expect(fn).to.throw(err);
	   *
	   * Please note that when a throw expectation is negated, it will check each
	   * parameter independently, starting with error constructor type. The appropriate way
	   * to check for the existence of a type of error but for a message that does not match
	   * is to use `and`.
	   *
	   *     expect(fn).to.throw(ReferenceError)
	   *        .and.not.throw(/good function/);
	   *
	   * @name throw
	   * @alias throws
	   * @alias Throw
	   * @param {ErrorConstructor} constructor
	   * @param {String|RegExp} expected error message
	   * @param {String} message _optional_
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @returns error for chaining (null if no error)
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertThrows (constructor, errMsg, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    new Assertion(obj, msg).is.a('function');
	
	    var thrown = false
	      , desiredError = null
	      , name = null
	      , thrownError = null;
	
	    if (arguments.length === 0) {
	      errMsg = null;
	      constructor = null;
	    } else if (constructor && (constructor instanceof RegExp || 'string' === typeof constructor)) {
	      errMsg = constructor;
	      constructor = null;
	    } else if (constructor && constructor instanceof Error) {
	      desiredError = constructor;
	      constructor = null;
	      errMsg = null;
	    } else if (typeof constructor === 'function') {
	      name = constructor.prototype.name;
	      if (!name || (name === 'Error' && constructor !== Error)) {
	        name = constructor.name || (new constructor()).name;
	      }
	    } else {
	      constructor = null;
	    }
	
	    try {
	      obj();
	    } catch (err) {
	      // first, check desired error
	      if (desiredError) {
	        this.assert(
	            err === desiredError
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp}'
	          , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        flag(this, 'object', err);
	        return this;
	      }
	
	      // next, check constructor
	      if (constructor) {
	        this.assert(
	            err instanceof constructor
	          , 'expected #{this} to throw #{exp} but #{act} was thrown'
	          , 'expected #{this} to not throw #{exp} but #{act} was thrown'
	          , name
	          , (err instanceof Error ? err.toString() : err)
	        );
	
	        if (!errMsg) {
	          flag(this, 'object', err);
	          return this;
	        }
	      }
	
	      // next, check message
	      var message = 'error' === _.type(err) && "message" in err
	        ? err.message
	        : '' + err;
	
	      if ((message != null) && errMsg && errMsg instanceof RegExp) {
	        this.assert(
	            errMsg.exec(message)
	          , 'expected #{this} to throw error matching #{exp} but got #{act}'
	          , 'expected #{this} to throw error not matching #{exp}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else if ((message != null) && errMsg && 'string' === typeof errMsg) {
	        this.assert(
	            ~message.indexOf(errMsg)
	          , 'expected #{this} to throw error including #{exp} but got #{act}'
	          , 'expected #{this} to throw error not including #{act}'
	          , errMsg
	          , message
	        );
	
	        flag(this, 'object', err);
	        return this;
	      } else {
	        thrown = true;
	        thrownError = err;
	      }
	    }
	
	    var actuallyGot = ''
	      , expectedThrown = name !== null
	        ? name
	        : desiredError
	          ? '#{exp}' //_.inspect(desiredError)
	          : 'an error';
	
	    if (thrown) {
	      actuallyGot = ' but #{act} was thrown'
	    }
	
	    this.assert(
	        thrown === true
	      , 'expected #{this} to throw ' + expectedThrown + actuallyGot
	      , 'expected #{this} to not throw ' + expectedThrown + actuallyGot
	      , (desiredError instanceof Error ? desiredError.toString() : desiredError)
	      , (thrownError instanceof Error ? thrownError.toString() : thrownError)
	    );
	
	    flag(this, 'object', thrownError);
	  };
	
	  Assertion.addMethod('throw', assertThrows);
	  Assertion.addMethod('throws', assertThrows);
	  Assertion.addMethod('Throw', assertThrows);
	
	  /**
	   * ### .respondTo(method)
	   *
	   * Asserts that the object or class target will respond to a method.
	   *
	   *     Klass.prototype.bar = function(){};
	   *     expect(Klass).to.respondTo('bar');
	   *     expect(obj).to.respondTo('bar');
	   *
	   * To check if a constructor will respond to a static function,
	   * set the `itself` flag.
	   *
	   *     Klass.baz = function(){};
	   *     expect(Klass).itself.to.respondTo('baz');
	   *
	   * @name respondTo
	   * @alias respondsTo
	   * @param {String} method
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function respondTo (method, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object')
	      , itself = flag(this, 'itself')
	      , context = ('function' === _.type(obj) && !itself)
	        ? obj.prototype[method]
	        : obj[method];
	
	    this.assert(
	        'function' === typeof context
	      , 'expected #{this} to respond to ' + _.inspect(method)
	      , 'expected #{this} to not respond to ' + _.inspect(method)
	    );
	  }
	
	  Assertion.addMethod('respondTo', respondTo);
	  Assertion.addMethod('respondsTo', respondTo);
	
	  /**
	   * ### .itself
	   *
	   * Sets the `itself` flag, later used by the `respondTo` assertion.
	   *
	   *     function Foo() {}
	   *     Foo.bar = function() {}
	   *     Foo.prototype.baz = function() {}
	   *
	   *     expect(Foo).itself.to.respondTo('bar');
	   *     expect(Foo).itself.not.to.respondTo('baz');
	   *
	   * @name itself
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('itself', function () {
	    flag(this, 'itself', true);
	  });
	
	  /**
	   * ### .satisfy(method)
	   *
	   * Asserts that the target passes a given truth test.
	   *
	   *     expect(1).to.satisfy(function(num) { return num > 0; });
	   *
	   * @name satisfy
	   * @alias satisfies
	   * @param {Function} matcher
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function satisfy (matcher, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	    var result = matcher(obj);
	    this.assert(
	        result
	      , 'expected #{this} to satisfy ' + _.objDisplay(matcher)
	      , 'expected #{this} to not satisfy' + _.objDisplay(matcher)
	      , this.negate ? false : true
	      , result
	    );
	  }
	
	  Assertion.addMethod('satisfy', satisfy);
	  Assertion.addMethod('satisfies', satisfy);
	
	  /**
	   * ### .closeTo(expected, delta)
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     expect(1.5).to.be.closeTo(1, 0.5);
	   *
	   * @name closeTo
	   * @alias approximately
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function closeTo(expected, delta, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj, msg).is.a('number');
	    if (_.type(expected) !== 'number' || _.type(delta) !== 'number') {
	      throw new Error('the arguments to closeTo or approximately must be numbers');
	    }
	
	    this.assert(
	        Math.abs(obj - expected) <= delta
	      , 'expected #{this} to be close to ' + expected + ' +/- ' + delta
	      , 'expected #{this} not to be close to ' + expected + ' +/- ' + delta
	    );
	  }
	
	  Assertion.addMethod('closeTo', closeTo);
	  Assertion.addMethod('approximately', closeTo);
	
	  function isSubsetOf(subset, superset, cmp) {
	    return subset.every(function(elem) {
	      if (!cmp) return superset.indexOf(elem) !== -1;
	
	      return superset.some(function(elem2) {
	        return cmp(elem, elem2);
	      });
	    })
	  }
	
	  /**
	   * ### .members(set)
	   *
	   * Asserts that the target is a superset of `set`,
	   * or that the target and `set` have the same strictly-equal (===) members.
	   * Alternately, if the `deep` flag is set, set members are compared for deep
	   * equality.
	   *
	   *     expect([1, 2, 3]).to.include.members([3, 2]);
	   *     expect([1, 2, 3]).to.not.include.members([3, 2, 8]);
	   *
	   *     expect([4, 2]).to.have.members([2, 4]);
	   *     expect([5, 2]).to.not.have.members([5, 2, 1]);
	   *
	   *     expect([{ id: 1 }]).to.deep.include.members([{ id: 1 }]);
	   *
	   * @name members
	   * @param {Array} set
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addMethod('members', function (subset, msg) {
	    if (msg) flag(this, 'message', msg);
	    var obj = flag(this, 'object');
	
	    new Assertion(obj).to.be.an('array');
	    new Assertion(subset).to.be.an('array');
	
	    var cmp = flag(this, 'deep') ? _.eql : undefined;
	
	    if (flag(this, 'contains')) {
	      return this.assert(
	          isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to be a superset of #{act}'
	        , 'expected #{this} to not be a superset of #{act}'
	        , obj
	        , subset
	      );
	    }
	
	    this.assert(
	        isSubsetOf(obj, subset, cmp) && isSubsetOf(subset, obj, cmp)
	        , 'expected #{this} to have the same members as #{act}'
	        , 'expected #{this} to not have the same members as #{act}'
	        , obj
	        , subset
	    );
	  });
	
	  /**
	   * ### .oneOf(list)
	   *
	   * Assert that a value appears somewhere in the top level of array `list`.
	   *
	   *     expect('a').to.be.oneOf(['a', 'b', 'c']);
	   *     expect(9).to.not.be.oneOf(['z']);
	   *     expect([3]).to.not.be.oneOf([1, 2, [3]]);
	   *
	   *     var three = [3];
	   *     // for object-types, contents are not compared
	   *     expect(three).to.not.be.oneOf([1, 2, [3]]);
	   *     // comparing references works
	   *     expect(three).to.be.oneOf([1, 2, three]);
	   *
	   * @name oneOf
	   * @param {Array<*>} list
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function oneOf (list, msg) {
	    if (msg) flag(this, 'message', msg);
	    var expected = flag(this, 'object');
	    new Assertion(list).to.be.an('array');
	
	    this.assert(
	        list.indexOf(expected) > -1
	      , 'expected #{this} to be one of #{exp}'
	      , 'expected #{this} to not be one of #{exp}'
	      , list
	      , expected
	    );
	  }
	
	  Assertion.addMethod('oneOf', oneOf);
	
	
	  /**
	   * ### .change(function)
	   *
	   * Asserts that a function changes an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val += 3 };
	   *     var noChangeFn = function() { return 'foo' + 'bar'; }
	   *     expect(fn).to.change(obj, 'val');
	   *     expect(noChangeFn).to.not.change(obj, 'val')
	   *
	   * @name change
	   * @alias changes
	   * @alias Change
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertChanges (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      initial !== object[prop]
	      , 'expected .' + prop + ' to change'
	      , 'expected .' + prop + ' to not change'
	    );
	  }
	
	  Assertion.addChainableMethod('change', assertChanges);
	  Assertion.addChainableMethod('changes', assertChanges);
	
	  /**
	   * ### .increase(function)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     expect(fn).to.increase(obj, 'val');
	   *
	   * @name increase
	   * @alias increases
	   * @alias Increase
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertIncreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      object[prop] - initial > 0
	      , 'expected .' + prop + ' to increase'
	      , 'expected .' + prop + ' to not increase'
	    );
	  }
	
	  Assertion.addChainableMethod('increase', assertIncreases);
	  Assertion.addChainableMethod('increases', assertIncreases);
	
	  /**
	   * ### .decrease(function)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     expect(fn).to.decrease(obj, 'val');
	   *
	   * @name decrease
	   * @alias decreases
	   * @alias Decrease
	   * @param {String} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace BDD
	   * @api public
	   */
	
	  function assertDecreases (object, prop, msg) {
	    if (msg) flag(this, 'message', msg);
	    var fn = flag(this, 'object');
	    new Assertion(object, msg).to.have.property(prop);
	    new Assertion(fn).is.a('function');
	
	    var initial = object[prop];
	    fn();
	
	    this.assert(
	      object[prop] - initial < 0
	      , 'expected .' + prop + ' to decrease'
	      , 'expected .' + prop + ' to not decrease'
	    );
	  }
	
	  Assertion.addChainableMethod('decrease', assertDecreases);
	  Assertion.addChainableMethod('decreases', assertDecreases);
	
	  /**
	   * ### .extensible
	   *
	   * Asserts that the target is extensible (can have new properties added to
	   * it).
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect({}).to.be.extensible;
	   *     expect(nonExtensibleObject).to.not.be.extensible;
	   *     expect(sealedObject).to.not.be.extensible;
	   *     expect(frozenObject).to.not.be.extensible;
	   *
	   * @name extensible
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('extensible', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a non-extensible ordinary object, simply return false.
	    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isExtensible;
	
	    try {
	      isExtensible = Object.isExtensible(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isExtensible = false;
	      else throw err;
	    }
	
	    this.assert(
	      isExtensible
	      , 'expected #{this} to be extensible'
	      , 'expected #{this} to not be extensible'
	    );
	  });
	
	  /**
	   * ### .sealed
	   *
	   * Asserts that the target is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(sealedObject).to.be.sealed;
	   *     expect(frozenObject).to.be.sealed;
	   *     expect({}).to.not.be.sealed;
	   *
	   * @name sealed
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('sealed', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a sealed ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isSealed
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isSealed;
	
	    try {
	      isSealed = Object.isSealed(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isSealed = true;
	      else throw err;
	    }
	
	    this.assert(
	      isSealed
	      , 'expected #{this} to be sealed'
	      , 'expected #{this} to not be sealed'
	    );
	  });
	
	  /**
	   * ### .frozen
	   *
	   * Asserts that the target is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *
	   *     expect(frozenObject).to.be.frozen;
	   *     expect({}).to.not.be.frozen;
	   *
	   * @name frozen
	   * @namespace BDD
	   * @api public
	   */
	
	  Assertion.addProperty('frozen', function() {
	    var obj = flag(this, 'object');
	
	    // In ES5, if the argument to this method is not an object (a primitive), then it will cause a TypeError.
	    // In ES6, a non-object argument will be treated as if it was a frozen ordinary object, simply return true.
	    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
	    // The following provides ES6 behavior when a TypeError is thrown under ES5.
	
	    var isFrozen;
	
	    try {
	      isFrozen = Object.isFrozen(obj);
	    } catch (err) {
	      if (err instanceof TypeError) isFrozen = true;
	      else throw err;
	    }
	
	    this.assert(
	      isFrozen
	      , 'expected #{this} to be frozen'
	      , 'expected #{this} to not be frozen'
	    );
	  });
	};


/***/ },
/* 38 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  chai.expect = function (val, message) {
	    return new chai.Assertion(val, message);
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Expect
	   * @api public
	   */
	
	  chai.expect.fail = function (actual, expected, message, operator) {
	    message = message || 'expect.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, chai.expect.fail);
	  };
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	module.exports = function (chai, util) {
	  var Assertion = chai.Assertion;
	
	  function loadShould () {
	    // explicitly define this method as function as to have it's name to include as `ssfi`
	    function shouldGetter() {
	      if (this instanceof String || this instanceof Number || this instanceof Boolean ) {
	        return new Assertion(this.valueOf(), null, shouldGetter);
	      }
	      return new Assertion(this, null, shouldGetter);
	    }
	    function shouldSetter(value) {
	      // See https://github.com/chaijs/chai/issues/86: this makes
	      // `whatever.should = someValue` actually set `someValue`, which is
	      // especially useful for `global.should = require('chai').should()`.
	      //
	      // Note that we have to use [[DefineProperty]] instead of [[Put]]
	      // since otherwise we would trigger this very setter!
	      Object.defineProperty(this, 'should', {
	        value: value,
	        enumerable: true,
	        configurable: true,
	        writable: true
	      });
	    }
	    // modify Object.prototype to have `should`
	    Object.defineProperty(Object.prototype, 'should', {
	      set: shouldSetter
	      , get: shouldGetter
	      , configurable: true
	    });
	
	    var should = {};
	
	    /**
	     * ### .fail(actual, expected, [message], [operator])
	     *
	     * Throw a failure.
	     *
	     * @name fail
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @param {String} operator
	     * @namespace Should
	     * @api public
	     */
	
	    should.fail = function (actual, expected, message, operator) {
	      message = message || 'should.fail()';
	      throw new chai.AssertionError(message, {
	          actual: actual
	        , expected: expected
	        , operator: operator
	      }, should.fail);
	    };
	
	    /**
	     * ### .equal(actual, expected, [message])
	     *
	     * Asserts non-strict equality (`==`) of `actual` and `expected`.
	     *
	     *     should.equal(3, '3', '== coerces values to strings');
	     *
	     * @name equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */
	
	    should.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.equal(val2);
	    };
	
	    /**
	     * ### .throw(function, [constructor/string/regexp], [string/regexp], [message])
	     *
	     * Asserts that `function` will throw an error that is an instance of
	     * `constructor`, or alternately that it will throw an error with message
	     * matching `regexp`.
	     *
	     *     should.throw(fn, 'function throws a reference error');
	     *     should.throw(fn, /function throws a reference error/);
	     *     should.throw(fn, ReferenceError);
	     *     should.throw(fn, ReferenceError, 'function throws a reference error');
	     *     should.throw(fn, ReferenceError, /function throws a reference error/);
	     *
	     * @name throw
	     * @alias Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */
	
	    should.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.Throw(errt, errs);
	    };
	
	    /**
	     * ### .exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var foo = 'hi';
	     *
	     *     should.exist(foo, 'foo exists');
	     *
	     * @name exist
	     * @namespace Should
	     * @api public
	     */
	
	    should.exist = function (val, msg) {
	      new Assertion(val, msg).to.exist;
	    }
	
	    // negation
	    should.not = {}
	
	    /**
	     * ### .not.equal(actual, expected, [message])
	     *
	     * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	     *
	     *     should.not.equal(3, 4, 'these numbers are not equal');
	     *
	     * @name not.equal
	     * @param {Mixed} actual
	     * @param {Mixed} expected
	     * @param {String} message
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.equal = function (val1, val2, msg) {
	      new Assertion(val1, msg).to.not.equal(val2);
	    };
	
	    /**
	     * ### .throw(function, [constructor/regexp], [message])
	     *
	     * Asserts that `function` will _not_ throw an error that is an instance of
	     * `constructor`, or alternately that it will not throw an error with message
	     * matching `regexp`.
	     *
	     *     should.not.throw(fn, Error, 'function does not throw');
	     *
	     * @name not.throw
	     * @alias not.Throw
	     * @param {Function} function
	     * @param {ErrorConstructor} constructor
	     * @param {RegExp} regexp
	     * @param {String} message
	     * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.Throw = function (fn, errt, errs, msg) {
	      new Assertion(fn, msg).to.not.Throw(errt, errs);
	    };
	
	    /**
	     * ### .not.exist
	     *
	     * Asserts that the target is neither `null` nor `undefined`.
	     *
	     *     var bar = null;
	     *
	     *     should.not.exist(bar, 'bar does not exist');
	     *
	     * @name not.exist
	     * @namespace Should
	     * @api public
	     */
	
	    should.not.exist = function (val, msg) {
	      new Assertion(val, msg).to.not.exist;
	    }
	
	    should['throw'] = should['Throw'];
	    should.not['throw'] = should.not['Throw'];
	
	    return should;
	  };
	
	  chai.should = loadShould;
	  chai.Should = loadShould;
	};


/***/ },
/* 40 */
/***/ function(module, exports) {

	/*!
	 * chai
	 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
	 * MIT Licensed
	 */
	
	
	module.exports = function (chai, util) {
	
	  /*!
	   * Chai dependencies.
	   */
	
	  var Assertion = chai.Assertion
	    , flag = util.flag;
	
	  /*!
	   * Module export.
	   */
	
	  /**
	   * ### assert(expression, message)
	   *
	   * Write your own test expressions.
	   *
	   *     assert('foo' !== 'bar', 'foo is not bar');
	   *     assert(Array.isArray([]), 'empty arrays are arrays');
	   *
	   * @param {Mixed} expression to test for truthiness
	   * @param {String} message to display on error
	   * @name assert
	   * @namespace Assert
	   * @api public
	   */
	
	  var assert = chai.assert = function (express, errmsg) {
	    var test = new Assertion(null, null, chai.assert);
	    test.assert(
	        express
	      , errmsg
	      , '[ negation message unavailable ]'
	    );
	  };
	
	  /**
	   * ### .fail(actual, expected, [message], [operator])
	   *
	   * Throw a failure. Node.js `assert` module-compatible.
	   *
	   * @name fail
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @param {String} operator
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.fail = function (actual, expected, message, operator) {
	    message = message || 'assert.fail()';
	    throw new chai.AssertionError(message, {
	        actual: actual
	      , expected: expected
	      , operator: operator
	    }, assert.fail);
	  };
	
	  /**
	   * ### .isOk(object, [message])
	   *
	   * Asserts that `object` is truthy.
	   *
	   *     assert.isOk('everything', 'everything is ok');
	   *     assert.isOk(false, 'this will fail');
	   *
	   * @name isOk
	   * @alias ok
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isOk = function (val, msg) {
	    new Assertion(val, msg).is.ok;
	  };
	
	  /**
	   * ### .isNotOk(object, [message])
	   *
	   * Asserts that `object` is falsy.
	   *
	   *     assert.isNotOk('everything', 'this will fail');
	   *     assert.isNotOk(false, 'this will pass');
	   *
	   * @name isNotOk
	   * @alias notOk
	   * @param {Mixed} object to test
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotOk = function (val, msg) {
	    new Assertion(val, msg).is.not.ok;
	  };
	
	  /**
	   * ### .equal(actual, expected, [message])
	   *
	   * Asserts non-strict equality (`==`) of `actual` and `expected`.
	   *
	   *     assert.equal(3, '3', '== coerces values to strings');
	   *
	   * @name equal
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.equal = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.equal);
	
	    test.assert(
	        exp == flag(test, 'object')
	      , 'expected #{this} to equal #{exp}'
	      , 'expected #{this} to not equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .notEqual(actual, expected, [message])
	   *
	   * Asserts non-strict inequality (`!=`) of `actual` and `expected`.
	   *
	   *     assert.notEqual(3, 4, 'these numbers are not equal');
	   *
	   * @name notEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notEqual = function (act, exp, msg) {
	    var test = new Assertion(act, msg, assert.notEqual);
	
	    test.assert(
	        exp != flag(test, 'object')
	      , 'expected #{this} to not equal #{exp}'
	      , 'expected #{this} to equal #{act}'
	      , exp
	      , act
	    );
	  };
	
	  /**
	   * ### .strictEqual(actual, expected, [message])
	   *
	   * Asserts strict equality (`===`) of `actual` and `expected`.
	   *
	   *     assert.strictEqual(true, true, 'these booleans are strictly equal');
	   *
	   * @name strictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.strictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.equal(exp);
	  };
	
	  /**
	   * ### .notStrictEqual(actual, expected, [message])
	   *
	   * Asserts strict inequality (`!==`) of `actual` and `expected`.
	   *
	   *     assert.notStrictEqual(3, '3', 'no coercion for strict equality');
	   *
	   * @name notStrictEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notStrictEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.equal(exp);
	  };
	
	  /**
	   * ### .deepEqual(actual, expected, [message])
	   *
	   * Asserts that `actual` is deeply equal to `expected`.
	   *
	   *     assert.deepEqual({ tea: 'green' }, { tea: 'green' });
	   *
	   * @name deepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.eql(exp);
	  };
	
	  /**
	   * ### .notDeepEqual(actual, expected, [message])
	   *
	   * Assert that `actual` is not deeply equal to `expected`.
	   *
	   *     assert.notDeepEqual({ tea: 'green' }, { tea: 'jasmine' });
	   *
	   * @name notDeepEqual
	   * @param {Mixed} actual
	   * @param {Mixed} expected
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notDeepEqual = function (act, exp, msg) {
	    new Assertion(act, msg).to.not.eql(exp);
	  };
	
	   /**
	   * ### .isAbove(valueToCheck, valueToBeAbove, [message])
	   *
	   * Asserts `valueToCheck` is strictly greater than (>) `valueToBeAbove`
	   *
	   *     assert.isAbove(5, 2, '5 is strictly greater than 2');
	   *
	   * @name isAbove
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAbove
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAbove = function (val, abv, msg) {
	    new Assertion(val, msg).to.be.above(abv);
	  };
	
	   /**
	   * ### .isAtLeast(valueToCheck, valueToBeAtLeast, [message])
	   *
	   * Asserts `valueToCheck` is greater than or equal to (>=) `valueToBeAtLeast`
	   *
	   *     assert.isAtLeast(5, 2, '5 is greater or equal to 2');
	   *     assert.isAtLeast(3, 3, '3 is greater or equal to 3');
	   *
	   * @name isAtLeast
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtLeast
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAtLeast = function (val, atlst, msg) {
	    new Assertion(val, msg).to.be.least(atlst);
	  };
	
	   /**
	   * ### .isBelow(valueToCheck, valueToBeBelow, [message])
	   *
	   * Asserts `valueToCheck` is strictly less than (<) `valueToBeBelow`
	   *
	   *     assert.isBelow(3, 6, '3 is strictly less than 6');
	   *
	   * @name isBelow
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeBelow
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isBelow = function (val, blw, msg) {
	    new Assertion(val, msg).to.be.below(blw);
	  };
	
	   /**
	   * ### .isAtMost(valueToCheck, valueToBeAtMost, [message])
	   *
	   * Asserts `valueToCheck` is less than or equal to (<=) `valueToBeAtMost`
	   *
	   *     assert.isAtMost(3, 6, '3 is less than or equal to 6');
	   *     assert.isAtMost(4, 4, '4 is less than or equal to 4');
	   *
	   * @name isAtMost
	   * @param {Mixed} valueToCheck
	   * @param {Mixed} valueToBeAtMost
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isAtMost = function (val, atmst, msg) {
	    new Assertion(val, msg).to.be.most(atmst);
	  };
	
	  /**
	   * ### .isTrue(value, [message])
	   *
	   * Asserts that `value` is true.
	   *
	   *     var teaServed = true;
	   *     assert.isTrue(teaServed, 'the tea has been served');
	   *
	   * @name isTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isTrue = function (val, msg) {
	    new Assertion(val, msg).is['true'];
	  };
	
	  /**
	   * ### .isNotTrue(value, [message])
	   *
	   * Asserts that `value` is not true.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotTrue(tea, 'great, time for tea!');
	   *
	   * @name isNotTrue
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotTrue = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(true);
	  };
	
	  /**
	   * ### .isFalse(value, [message])
	   *
	   * Asserts that `value` is false.
	   *
	   *     var teaServed = false;
	   *     assert.isFalse(teaServed, 'no tea yet? hmm...');
	   *
	   * @name isFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFalse = function (val, msg) {
	    new Assertion(val, msg).is['false'];
	  };
	
	  /**
	   * ### .isNotFalse(value, [message])
	   *
	   * Asserts that `value` is not false.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotFalse(tea, 'great, time for tea!');
	   *
	   * @name isNotFalse
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFalse = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(false);
	  };
	
	  /**
	   * ### .isNull(value, [message])
	   *
	   * Asserts that `value` is null.
	   *
	   *     assert.isNull(err, 'there was no error');
	   *
	   * @name isNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNull = function (val, msg) {
	    new Assertion(val, msg).to.equal(null);
	  };
	
	  /**
	   * ### .isNotNull(value, [message])
	   *
	   * Asserts that `value` is not null.
	   *
	   *     var tea = 'tasty chai';
	   *     assert.isNotNull(tea, 'great, time for tea!');
	   *
	   * @name isNotNull
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotNull = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(null);
	  };
	
	  /**
	   * ### .isNaN
	   * Asserts that value is NaN
	   *
	   *    assert.isNaN('foo', 'foo is NaN');
	   *
	   * @name isNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNaN = function (val, msg) {
	    new Assertion(val, msg).to.be.NaN;
	  };
	
	  /**
	   * ### .isNotNaN
	   * Asserts that value is not NaN
	   *
	   *    assert.isNotNaN(4, '4 is not NaN');
	   *
	   * @name isNotNaN
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	  assert.isNotNaN = function (val, msg) {
	    new Assertion(val, msg).not.to.be.NaN;
	  };
	
	  /**
	   * ### .isUndefined(value, [message])
	   *
	   * Asserts that `value` is `undefined`.
	   *
	   *     var tea;
	   *     assert.isUndefined(tea, 'no tea defined');
	   *
	   * @name isUndefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isUndefined = function (val, msg) {
	    new Assertion(val, msg).to.equal(undefined);
	  };
	
	  /**
	   * ### .isDefined(value, [message])
	   *
	   * Asserts that `value` is not `undefined`.
	   *
	   *     var tea = 'cup of chai';
	   *     assert.isDefined(tea, 'tea has been defined');
	   *
	   * @name isDefined
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isDefined = function (val, msg) {
	    new Assertion(val, msg).to.not.equal(undefined);
	  };
	
	  /**
	   * ### .isFunction(value, [message])
	   *
	   * Asserts that `value` is a function.
	   *
	   *     function serveTea() { return 'cup of tea'; };
	   *     assert.isFunction(serveTea, 'great, we can have tea now');
	   *
	   * @name isFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFunction = function (val, msg) {
	    new Assertion(val, msg).to.be.a('function');
	  };
	
	  /**
	   * ### .isNotFunction(value, [message])
	   *
	   * Asserts that `value` is _not_ a function.
	   *
	   *     var serveTea = [ 'heat', 'pour', 'sip' ];
	   *     assert.isNotFunction(serveTea, 'great, we have listed the steps');
	   *
	   * @name isNotFunction
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFunction = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('function');
	  };
	
	  /**
	   * ### .isObject(value, [message])
	   *
	   * Asserts that `value` is an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   * _The assertion does not match subclassed objects._
	   *
	   *     var selection = { name: 'Chai', serve: 'with spices' };
	   *     assert.isObject(selection, 'tea selection is an object');
	   *
	   * @name isObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isObject = function (val, msg) {
	    new Assertion(val, msg).to.be.a('object');
	  };
	
	  /**
	   * ### .isNotObject(value, [message])
	   *
	   * Asserts that `value` is _not_ an object of type 'Object' (as revealed by `Object.prototype.toString`).
	   *
	   *     var selection = 'chai'
	   *     assert.isNotObject(selection, 'tea selection is not an object');
	   *     assert.isNotObject(null, 'null is not an object');
	   *
	   * @name isNotObject
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotObject = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('object');
	  };
	
	  /**
	   * ### .isArray(value, [message])
	   *
	   * Asserts that `value` is an array.
	   *
	   *     var menu = [ 'green', 'chai', 'oolong' ];
	   *     assert.isArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isArray = function (val, msg) {
	    new Assertion(val, msg).to.be.an('array');
	  };
	
	  /**
	   * ### .isNotArray(value, [message])
	   *
	   * Asserts that `value` is _not_ an array.
	   *
	   *     var menu = 'green|chai|oolong';
	   *     assert.isNotArray(menu, 'what kind of tea do we want?');
	   *
	   * @name isNotArray
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotArray = function (val, msg) {
	    new Assertion(val, msg).to.not.be.an('array');
	  };
	
	  /**
	   * ### .isString(value, [message])
	   *
	   * Asserts that `value` is a string.
	   *
	   *     var teaOrder = 'chai';
	   *     assert.isString(teaOrder, 'order placed');
	   *
	   * @name isString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isString = function (val, msg) {
	    new Assertion(val, msg).to.be.a('string');
	  };
	
	  /**
	   * ### .isNotString(value, [message])
	   *
	   * Asserts that `value` is _not_ a string.
	   *
	   *     var teaOrder = 4;
	   *     assert.isNotString(teaOrder, 'order placed');
	   *
	   * @name isNotString
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotString = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('string');
	  };
	
	  /**
	   * ### .isNumber(value, [message])
	   *
	   * Asserts that `value` is a number.
	   *
	   *     var cups = 2;
	   *     assert.isNumber(cups, 'how many cups');
	   *
	   * @name isNumber
	   * @param {Number} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNumber = function (val, msg) {
	    new Assertion(val, msg).to.be.a('number');
	  };
	
	  /**
	   * ### .isNotNumber(value, [message])
	   *
	   * Asserts that `value` is _not_ a number.
	   *
	   *     var cups = '2 cups please';
	   *     assert.isNotNumber(cups, 'how many cups');
	   *
	   * @name isNotNumber
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotNumber = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('number');
	  };
	
	  /**
	   * ### .isBoolean(value, [message])
	   *
	   * Asserts that `value` is a boolean.
	   *
	   *     var teaReady = true
	   *       , teaServed = false;
	   *
	   *     assert.isBoolean(teaReady, 'is the tea ready');
	   *     assert.isBoolean(teaServed, 'has tea been served');
	   *
	   * @name isBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isBoolean = function (val, msg) {
	    new Assertion(val, msg).to.be.a('boolean');
	  };
	
	  /**
	   * ### .isNotBoolean(value, [message])
	   *
	   * Asserts that `value` is _not_ a boolean.
	   *
	   *     var teaReady = 'yep'
	   *       , teaServed = 'nope';
	   *
	   *     assert.isNotBoolean(teaReady, 'is the tea ready');
	   *     assert.isNotBoolean(teaServed, 'has tea been served');
	   *
	   * @name isNotBoolean
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotBoolean = function (val, msg) {
	    new Assertion(val, msg).to.not.be.a('boolean');
	  };
	
	  /**
	   * ### .typeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.typeOf({ tea: 'chai' }, 'object', 'we have an object');
	   *     assert.typeOf(['chai', 'jasmine'], 'array', 'we have an array');
	   *     assert.typeOf('tea', 'string', 'we have a string');
	   *     assert.typeOf(/tea/, 'regexp', 'we have a regular expression');
	   *     assert.typeOf(null, 'null', 'we have a null');
	   *     assert.typeOf(undefined, 'undefined', 'we have an undefined');
	   *
	   * @name typeOf
	   * @param {Mixed} value
	   * @param {String} name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.typeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.a(type);
	  };
	
	  /**
	   * ### .notTypeOf(value, name, [message])
	   *
	   * Asserts that `value`'s type is _not_ `name`, as determined by
	   * `Object.prototype.toString`.
	   *
	   *     assert.notTypeOf('tea', 'number', 'strings are not numbers');
	   *
	   * @name notTypeOf
	   * @param {Mixed} value
	   * @param {String} typeof name
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notTypeOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.a(type);
	  };
	
	  /**
	   * ### .instanceOf(object, constructor, [message])
	   *
	   * Asserts that `value` is an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new Tea('chai');
	   *
	   *     assert.instanceOf(chai, Tea, 'chai is an instance of tea');
	   *
	   * @name instanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.instanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.be.instanceOf(type);
	  };
	
	  /**
	   * ### .notInstanceOf(object, constructor, [message])
	   *
	   * Asserts `value` is not an instance of `constructor`.
	   *
	   *     var Tea = function (name) { this.name = name; }
	   *       , chai = new String('chai');
	   *
	   *     assert.notInstanceOf(chai, Tea, 'chai is not an instance of tea');
	   *
	   * @name notInstanceOf
	   * @param {Object} object
	   * @param {Constructor} constructor
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notInstanceOf = function (val, type, msg) {
	    new Assertion(val, msg).to.not.be.instanceOf(type);
	  };
	
	  /**
	   * ### .include(haystack, needle, [message])
	   *
	   * Asserts that `haystack` includes `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.include('foobar', 'bar', 'foobar contains string "bar"');
	   *     assert.include([ 1, 2, 3 ], 3, 'array contains value');
	   *
	   * @name include
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.include = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.include).include(inc);
	  };
	
	  /**
	   * ### .notInclude(haystack, needle, [message])
	   *
	   * Asserts that `haystack` does not include `needle`. Works
	   * for strings and arrays.
	   *
	   *     assert.notInclude('foobar', 'baz', 'string not include substring');
	   *     assert.notInclude([ 1, 2, 3 ], 4, 'array not include contain value');
	   *
	   * @name notInclude
	   * @param {Array|String} haystack
	   * @param {Mixed} needle
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notInclude = function (exp, inc, msg) {
	    new Assertion(exp, msg, assert.notInclude).not.include(inc);
	  };
	
	  /**
	   * ### .match(value, regexp, [message])
	   *
	   * Asserts that `value` matches the regular expression `regexp`.
	   *
	   *     assert.match('foobar', /^foo/, 'regexp matches');
	   *
	   * @name match
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.match = function (exp, re, msg) {
	    new Assertion(exp, msg).to.match(re);
	  };
	
	  /**
	   * ### .notMatch(value, regexp, [message])
	   *
	   * Asserts that `value` does not match the regular expression `regexp`.
	   *
	   *     assert.notMatch('foobar', /^foo/, 'regexp does not match');
	   *
	   * @name notMatch
	   * @param {Mixed} value
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notMatch = function (exp, re, msg) {
	    new Assertion(exp, msg).to.not.match(re);
	  };
	
	  /**
	   * ### .property(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`.
	   *
	   *     assert.property({ tea: { green: 'matcha' }}, 'tea');
	   *
	   * @name property
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.property = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.property(prop);
	  };
	
	  /**
	   * ### .notProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`.
	   *
	   *     assert.notProperty({ tea: { green: 'matcha' }}, 'coffee');
	   *
	   * @name notProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop);
	  };
	
	  /**
	   * ### .deepProperty(object, property, [message])
	   *
	   * Asserts that `object` has a property named by `property`, which can be a
	   * string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.deepProperty({ tea: { green: 'matcha' }}, 'tea.green');
	   *
	   * @name deepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop);
	  };
	
	  /**
	   * ### .notDeepProperty(object, property, [message])
	   *
	   * Asserts that `object` does _not_ have a property named by `property`, which
	   * can be a string using dot- and bracket-notation for deep reference.
	   *
	   *     assert.notDeepProperty({ tea: { green: 'matcha' }}, 'tea.oolong');
	   *
	   * @name notDeepProperty
	   * @param {Object} object
	   * @param {String} property
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.notDeepProperty = function (obj, prop, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop);
	  };
	
	  /**
	   * ### .propertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`.
	   *
	   *     assert.propertyVal({ tea: 'is good' }, 'tea', 'is good');
	   *
	   * @name propertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.propertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.property(prop, val);
	  };
	
	  /**
	   * ### .propertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`.
	   *
	   *     assert.propertyNotVal({ tea: 'is good' }, 'tea', 'is bad');
	   *
	   * @name propertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.propertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property` with value given
	   * by `value`. `property` can use dot- and bracket-notation for deep
	   * reference.
	   *
	   *     assert.deepPropertyVal({ tea: { green: 'matcha' }}, 'tea.green', 'matcha');
	   *
	   * @name deepPropertyVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepPropertyVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .deepPropertyNotVal(object, property, value, [message])
	   *
	   * Asserts that `object` has a property named by `property`, but with a value
	   * different from that given by `value`. `property` can use dot- and
	   * bracket-notation for deep reference.
	   *
	   *     assert.deepPropertyNotVal({ tea: { green: 'matcha' }}, 'tea.green', 'konacha');
	   *
	   * @name deepPropertyNotVal
	   * @param {Object} object
	   * @param {String} property
	   * @param {Mixed} value
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.deepPropertyNotVal = function (obj, prop, val, msg) {
	    new Assertion(obj, msg).to.not.have.deep.property(prop, val);
	  };
	
	  /**
	   * ### .lengthOf(object, length, [message])
	   *
	   * Asserts that `object` has a `length` property with the expected value.
	   *
	   *     assert.lengthOf([1,2,3], 3, 'array has length of 3');
	   *     assert.lengthOf('foobar', 6, 'string has length of 6');
	   *
	   * @name lengthOf
	   * @param {Mixed} object
	   * @param {Number} length
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.lengthOf = function (exp, len, msg) {
	    new Assertion(exp, msg).to.have.length(len);
	  };
	
	  /**
	   * ### .throws(function, [constructor/string/regexp], [string/regexp], [message])
	   *
	   * Asserts that `function` will throw an error that is an instance of
	   * `constructor`, or alternately that it will throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.throws(fn, 'function throws a reference error');
	   *     assert.throws(fn, /function throws a reference error/);
	   *     assert.throws(fn, ReferenceError);
	   *     assert.throws(fn, ReferenceError, 'function throws a reference error');
	   *     assert.throws(fn, ReferenceError, /function throws a reference error/);
	   *
	   * @name throws
	   * @alias throw
	   * @alias Throw
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.throws = function (fn, errt, errs, msg) {
	    if ('string' === typeof errt || errt instanceof RegExp) {
	      errs = errt;
	      errt = null;
	    }
	
	    var assertErr = new Assertion(fn, msg).to.throw(errt, errs);
	    return flag(assertErr, 'object');
	  };
	
	  /**
	   * ### .doesNotThrow(function, [constructor/regexp], [message])
	   *
	   * Asserts that `function` will _not_ throw an error that is an instance of
	   * `constructor`, or alternately that it will not throw an error with message
	   * matching `regexp`.
	   *
	   *     assert.doesNotThrow(fn, Error, 'function does not throw');
	   *
	   * @name doesNotThrow
	   * @param {Function} function
	   * @param {ErrorConstructor} constructor
	   * @param {RegExp} regexp
	   * @param {String} message
	   * @see https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error#Error_types
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotThrow = function (fn, type, msg) {
	    if ('string' === typeof type) {
	      msg = type;
	      type = null;
	    }
	
	    new Assertion(fn, msg).to.not.Throw(type);
	  };
	
	  /**
	   * ### .operator(val1, operator, val2, [message])
	   *
	   * Compares two values using `operator`.
	   *
	   *     assert.operator(1, '<', 2, 'everything is ok');
	   *     assert.operator(1, '>', 2, 'this will fail');
	   *
	   * @name operator
	   * @param {Mixed} val1
	   * @param {String} operator
	   * @param {Mixed} val2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.operator = function (val, operator, val2, msg) {
	    var ok;
	    switch(operator) {
	      case '==':
	        ok = val == val2;
	        break;
	      case '===':
	        ok = val === val2;
	        break;
	      case '>':
	        ok = val > val2;
	        break;
	      case '>=':
	        ok = val >= val2;
	        break;
	      case '<':
	        ok = val < val2;
	        break;
	      case '<=':
	        ok = val <= val2;
	        break;
	      case '!=':
	        ok = val != val2;
	        break;
	      case '!==':
	        ok = val !== val2;
	        break;
	      default:
	        throw new Error('Invalid operator "' + operator + '"');
	    }
	    var test = new Assertion(ok, msg);
	    test.assert(
	        true === flag(test, 'object')
	      , 'expected ' + util.inspect(val) + ' to be ' + operator + ' ' + util.inspect(val2)
	      , 'expected ' + util.inspect(val) + ' to not be ' + operator + ' ' + util.inspect(val2) );
	  };
	
	  /**
	   * ### .closeTo(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.closeTo(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name closeTo
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.closeTo = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.closeTo(exp, delta);
	  };
	
	  /**
	   * ### .approximately(actual, expected, delta, [message])
	   *
	   * Asserts that the target is equal `expected`, to within a +/- `delta` range.
	   *
	   *     assert.approximately(1.5, 1, 0.5, 'numbers are close');
	   *
	   * @name approximately
	   * @param {Number} actual
	   * @param {Number} expected
	   * @param {Number} delta
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.approximately = function (act, exp, delta, msg) {
	    new Assertion(act, msg).to.be.approximately(exp, delta);
	  };
	
	  /**
	   * ### .sameMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members.
	   * Order is not taken into account.
	   *
	   *     assert.sameMembers([ 1, 2, 3 ], [ 2, 1, 3 ], 'same members');
	   *
	   * @name sameMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.sameMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.members(set2);
	  }
	
	  /**
	   * ### .sameDeepMembers(set1, set2, [message])
	   *
	   * Asserts that `set1` and `set2` have the same members - using a deep equality checking.
	   * Order is not taken into account.
	   *
	   *     assert.sameDeepMembers([ {b: 3}, {a: 2}, {c: 5} ], [ {c: 5}, {b: 3}, {a: 2} ], 'same deep members');
	   *
	   * @name sameDeepMembers
	   * @param {Array} set1
	   * @param {Array} set2
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.sameDeepMembers = function (set1, set2, msg) {
	    new Assertion(set1, msg).to.have.same.deep.members(set2);
	  }
	
	  /**
	   * ### .includeMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset`.
	   * Order is not taken into account.
	   *
	   *     assert.includeMembers([ 1, 2, 3 ], [ 2, 1 ], 'include members');
	   *
	   * @name includeMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.includeMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.members(subset);
	  }
	
	  /**
	   * ### .includeDeepMembers(superset, subset, [message])
	   *
	   * Asserts that `subset` is included in `superset` - using deep equality checking.
	   * Order is not taken into account.
	   * Duplicates are ignored.
	   *
	   *     assert.includeDeepMembers([ {a: 1}, {b: 2}, {c: 3} ], [ {b: 2}, {a: 1}, {b: 2} ], 'include deep members');
	   *
	   * @name includeDeepMembers
	   * @param {Array} superset
	   * @param {Array} subset
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.includeDeepMembers = function (superset, subset, msg) {
	    new Assertion(superset, msg).to.include.deep.members(subset);
	  }
	
	  /**
	   * ### .oneOf(inList, list, [message])
	   *
	   * Asserts that non-object, non-array value `inList` appears in the flat array `list`.
	   *
	   *     assert.oneOf(1, [ 2, 1 ], 'Not found in list');
	   *
	   * @name oneOf
	   * @param {*} inList
	   * @param {Array<*>} list
	   * @param {String} message
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.oneOf = function (inList, list, msg) {
	    new Assertion(inList, msg).to.be.oneOf(list);
	  }
	
	   /**
	   * ### .changes(function, object, property)
	   *
	   * Asserts that a function changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 22 };
	   *     assert.changes(fn, obj, 'val');
	   *
	   * @name changes
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.changes = function (fn, obj, prop) {
	    new Assertion(fn).to.change(obj, prop);
	  }
	
	   /**
	   * ### .doesNotChange(function, object, property)
	   *
	   * Asserts that a function does not changes the value of a property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { console.log('foo'); };
	   *     assert.doesNotChange(fn, obj, 'val');
	   *
	   * @name doesNotChange
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotChange = function (fn, obj, prop) {
	    new Assertion(fn).to.not.change(obj, prop);
	  }
	
	   /**
	   * ### .increases(function, object, property)
	   *
	   * Asserts that a function increases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 13 };
	   *     assert.increases(fn, obj, 'val');
	   *
	   * @name increases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.increases = function (fn, obj, prop) {
	    new Assertion(fn).to.increase(obj, prop);
	  }
	
	   /**
	   * ### .doesNotIncrease(function, object, property)
	   *
	   * Asserts that a function does not increase object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 8 };
	   *     assert.doesNotIncrease(fn, obj, 'val');
	   *
	   * @name doesNotIncrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotIncrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.increase(obj, prop);
	  }
	
	   /**
	   * ### .decreases(function, object, property)
	   *
	   * Asserts that a function decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 5 };
	   *     assert.decreases(fn, obj, 'val');
	   *
	   * @name decreases
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.decreases = function (fn, obj, prop) {
	    new Assertion(fn).to.decrease(obj, prop);
	  }
	
	   /**
	   * ### .doesNotDecrease(function, object, property)
	   *
	   * Asserts that a function does not decreases an object property
	   *
	   *     var obj = { val: 10 };
	   *     var fn = function() { obj.val = 15 };
	   *     assert.doesNotDecrease(fn, obj, 'val');
	   *
	   * @name doesNotDecrease
	   * @param {Function} modifier function
	   * @param {Object} object
	   * @param {String} property name
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.doesNotDecrease = function (fn, obj, prop) {
	    new Assertion(fn).to.not.decrease(obj, prop);
	  }
	
	  /*!
	   * ### .ifError(object)
	   *
	   * Asserts if value is not a false value, and throws if it is a true value.
	   * This is added to allow for chai to be a drop-in replacement for Node's
	   * assert class.
	   *
	   *     var err = new Error('I am a custom error');
	   *     assert.ifError(err); // Rethrows err!
	   *
	   * @name ifError
	   * @param {Object} object
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.ifError = function (val) {
	    if (val) {
	      throw(val);
	    }
	  };
	
	  /**
	   * ### .isExtensible(object)
	   *
	   * Asserts that `object` is extensible (can have new properties added to it).
	   *
	   *     assert.isExtensible({});
	   *
	   * @name isExtensible
	   * @alias extensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.be.extensible;
	  };
	
	  /**
	   * ### .isNotExtensible(object)
	   *
	   * Asserts that `object` is _not_ extensible.
	   *
	   *     var nonExtensibleObject = Object.preventExtensions({});
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.freese({});
	   *
	   *     assert.isNotExtensible(nonExtensibleObject);
	   *     assert.isNotExtensible(sealedObject);
	   *     assert.isNotExtensible(frozenObject);
	   *
	   * @name isNotExtensible
	   * @alias notExtensible
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotExtensible = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.extensible;
	  };
	
	  /**
	   * ### .isSealed(object)
	   *
	   * Asserts that `object` is sealed (cannot have new properties added to it
	   * and its existing properties cannot be removed).
	   *
	   *     var sealedObject = Object.seal({});
	   *     var frozenObject = Object.seal({});
	   *
	   *     assert.isSealed(sealedObject);
	   *     assert.isSealed(frozenObject);
	   *
	   * @name isSealed
	   * @alias sealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.be.sealed;
	  };
	
	  /**
	   * ### .isNotSealed(object)
	   *
	   * Asserts that `object` is _not_ sealed.
	   *
	   *     assert.isNotSealed({});
	   *
	   * @name isNotSealed
	   * @alias notSealed
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotSealed = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.sealed;
	  };
	
	  /**
	   * ### .isFrozen(object)
	   *
	   * Asserts that `object` is frozen (cannot have new properties added to it
	   * and its existing properties cannot be modified).
	   *
	   *     var frozenObject = Object.freeze({});
	   *     assert.frozen(frozenObject);
	   *
	   * @name isFrozen
	   * @alias frozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.be.frozen;
	  };
	
	  /**
	   * ### .isNotFrozen(object)
	   *
	   * Asserts that `object` is _not_ frozen.
	   *
	   *     assert.isNotFrozen({});
	   *
	   * @name isNotFrozen
	   * @alias notFrozen
	   * @param {Object} object
	   * @param {String} message _optional_
	   * @namespace Assert
	   * @api public
	   */
	
	  assert.isNotFrozen = function (obj, msg) {
	    new Assertion(obj, msg).to.not.be.frozen;
	  };
	
	  /*!
	   * Aliases.
	   */
	
	  (function alias(name, as){
	    assert[as] = assert[name];
	    return alias;
	  })
	  ('isOk', 'ok')
	  ('isNotOk', 'notOk')
	  ('throws', 'throw')
	  ('throws', 'Throw')
	  ('isExtensible', 'extensible')
	  ('isNotExtensible', 'notExtensible')
	  ('isSealed', 'sealed')
	  ('isNotSealed', 'notSealed')
	  ('isFrozen', 'frozen')
	  ('isNotFrozen', 'notFrozen');
	};


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _NodeInfo = __webpack_require__(42);
	
	var _NodeInfo2 = _interopRequireDefault(_NodeInfo);
	
	var _chai = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var data = __webpack_require__(43);
	describe('traversal', function () {
	  describe('BREADTH_FIRST_TRAVERSAL', function () {
	    it('check each nodeInfo.node', function () {
	      var expectVals = ['"g"', 'null', '[]', '{"g":"g"}', '"f"', '"e"', 'null', '["f",{"g":"g"},[],null]', '{"e":"e"}', '"a"', '{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}'];
	
	      var _m$nodeInfo = new _NodeInfo2.default(data);
	
	      var _m$startDepth = 0;
	
	      var _breadthFirstTraversal = void 0;
	
	      var _m$buffer = [_m$nodeInfo];
	      var _m$tmpNodeInfo, _m$key, _m$newNode;
	      while (_m$buffer.length) {
	        _m$tmpNodeInfo = _m$buffer.shift();
	        if (_m$startDepth <= _m$tmpNodeInfo.path.length) {
	          var _m$visitor31 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo.node), expectVals.pop());
	
	          _m$visitor31;
	        }
	
	        if (_typeof(_m$tmpNodeInfo.node) == 'object' && _m$tmpNodeInfo.path.length < Infinity) {
	          for (_m$key in _m$tmpNodeInfo.node) {
	            _m$newNode = _m$tmpNodeInfo.node[_m$key];
	            if (_m$tmpNodeInfo.parent.indexOf(_m$newNode) == -1) {
	              _m$buffer.push(_m$tmpNodeInfo.getChild(_m$key));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal;
	    });
	    it('check each nodeInfo.path', function () {
	      var expectVals = ['["c","1","g"]', '["c","3"]', '["c","2"]', '["c","1"]', '["c","0"]', '["b","e"]', '["d"]', '["c"]', '["b"]', '["a"]', '[]'];
	
	      var _m$nodeInfo2 = new _NodeInfo2.default(data);
	
	      var _m$startDepth2 = 0;
	
	      var _breadthFirstTraversal2 = void 0;
	
	      var _m$buffer2 = [_m$nodeInfo2];var _m$tmpNodeInfo2, _m$key2, _m$newNode2;while (_m$buffer2.length) {
	        _m$tmpNodeInfo2 = _m$buffer2.shift();if (_m$startDepth2 <= _m$tmpNodeInfo2.path.length) {
	          var _m$visitor32 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo2.path), expectVals.pop());
	          _m$visitor32;
	        }if (_typeof(_m$tmpNodeInfo2.node) == 'object' && _m$tmpNodeInfo2.path.length < Infinity) {
	          for (_m$key2 in _m$tmpNodeInfo2.node) {
	            _m$newNode2 = _m$tmpNodeInfo2.node[_m$key2];if (_m$tmpNodeInfo2.parent.indexOf(_m$newNode2) == -1) {
	              _m$buffer2.push(_m$tmpNodeInfo2.getChild(_m$key2));
	            }
	          }
	        }
	      }_breadthFirstTraversal2;
	    });
	    it('check each nodeInfo.parent', function () {
	      var expectVals = ['[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[]'];
	
	      var _m$nodeInfo3 = new _NodeInfo2.default(data);
	
	      var _m$startDepth3 = 0;
	
	      var _breadthFirstTraversal3 = void 0;
	
	      var _m$buffer3 = [_m$nodeInfo3];var _m$tmpNodeInfo3, _m$key3, _m$newNode3;while (_m$buffer3.length) {
	        _m$tmpNodeInfo3 = _m$buffer3.shift();if (_m$startDepth3 <= _m$tmpNodeInfo3.path.length) {
	          var _m$visitor33 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo3.parent), expectVals.pop());
	          _m$visitor33;
	        }if (_typeof(_m$tmpNodeInfo3.node) == 'object' && _m$tmpNodeInfo3.path.length < Infinity) {
	          for (_m$key3 in _m$tmpNodeInfo3.node) {
	            _m$newNode3 = _m$tmpNodeInfo3.node[_m$key3];if (_m$tmpNodeInfo3.parent.indexOf(_m$newNode3) == -1) {
	              _m$buffer3.push(_m$tmpNodeInfo3.getChild(_m$key3));
	            }
	          }
	        }
	      }_breadthFirstTraversal3;
	    });
	    it('check each nodeInfo.root', function () {
	      var _m$nodeInfo4 = new _NodeInfo2.default(data);
	
	      var _m$startDepth4 = 0;
	
	      var _breadthFirstTraversal4 = void 0;
	
	      var _m$buffer4 = [_m$nodeInfo4];var _m$tmpNodeInfo4, _m$key4, _m$newNode4;while (_m$buffer4.length) {
	        _m$tmpNodeInfo4 = _m$buffer4.shift();if (_m$startDepth4 <= _m$tmpNodeInfo4.path.length) {
	          var _m$visitor34 = void 0;
	
	          _chai.assert.strictEqual(_m$tmpNodeInfo4.root, data);
	          _m$visitor34;
	        }if (_typeof(_m$tmpNodeInfo4.node) == 'object' && _m$tmpNodeInfo4.path.length < Infinity) {
	          for (_m$key4 in _m$tmpNodeInfo4.node) {
	            _m$newNode4 = _m$tmpNodeInfo4.node[_m$key4];if (_m$tmpNodeInfo4.parent.indexOf(_m$newNode4) == -1) {
	              _m$buffer4.push(_m$tmpNodeInfo4.getChild(_m$key4));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal4;
	    });
	    it('check m$startDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo5 = new _NodeInfo2.default(data);
	
	      var _m$startDepth5 = 2;
	
	      var _breadthFirstTraversal5 = void 0;
	
	      var _m$buffer5 = [_m$nodeInfo5];var _m$tmpNodeInfo5, _m$key5, _m$newNode5;while (_m$buffer5.length) {
	        _m$tmpNodeInfo5 = _m$buffer5.shift();if (_m$startDepth5 <= _m$tmpNodeInfo5.path.length) {
	          var _m$visitor35 = void 0;
	
	          count++;
	          _m$visitor35;
	        }if (_typeof(_m$tmpNodeInfo5.node) == 'object' && _m$tmpNodeInfo5.path.length < Infinity) {
	          for (_m$key5 in _m$tmpNodeInfo5.node) {
	            _m$newNode5 = _m$tmpNodeInfo5.node[_m$key5];if (_m$tmpNodeInfo5.parent.indexOf(_m$newNode5) == -1) {
	              _m$buffer5.push(_m$tmpNodeInfo5.getChild(_m$key5));
	            }
	          }
	        }
	      }_breadthFirstTraversal5;
	      _chai.assert.equal(count, 6);
	    });
	    it('check m$endDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo6 = new _NodeInfo2.default(data);
	
	      var _m$startDepth6 = 2;
	      var _m$endDepth = 2;
	
	      var _breadthFirstTraversal6 = void 0;
	
	      var _m$buffer6 = [_m$nodeInfo6];var _m$tmpNodeInfo6, _m$key6, _m$newNode6;while (_m$buffer6.length) {
	        _m$tmpNodeInfo6 = _m$buffer6.shift();if (_m$startDepth6 <= _m$tmpNodeInfo6.path.length) {
	          var _m$visitor36 = void 0;
	
	          count++;
	          _m$visitor36;
	        }if (_typeof(_m$tmpNodeInfo6.node) == 'object' && _m$tmpNodeInfo6.path.length < _m$endDepth) {
	          for (_m$key6 in _m$tmpNodeInfo6.node) {
	            _m$newNode6 = _m$tmpNodeInfo6.node[_m$key6];if (_m$tmpNodeInfo6.parent.indexOf(_m$newNode6) == -1) {
	              _m$buffer6.push(_m$tmpNodeInfo6.getChild(_m$key6));
	            }
	          }
	        }
	      }_breadthFirstTraversal6;
	      _chai.assert.equal(count, 5);
	    });
	    it('break circle', function () {
	      var _m$nodeInfo7 = new _NodeInfo2.default(JSON.parse(JSON.stringify(data)));
	
	      var _m$startDepth7 = 0;
	
	      var _breadthFirstTraversal7 = void 0;
	
	      var _m$buffer7 = [_m$nodeInfo7];var _m$tmpNodeInfo7, _m$key7, _m$newNode7;while (_m$buffer7.length) {
	        _m$tmpNodeInfo7 = _m$buffer7.shift();if (_m$startDepth7 <= _m$tmpNodeInfo7.path.length) {
	          var _m$visitor37 = void 0;
	
	          _m$visitor37;
	        }if (_typeof(_m$tmpNodeInfo7.node) == 'object' && _m$tmpNodeInfo7.path.length < Infinity) {
	          for (_m$key7 in _m$tmpNodeInfo7.node) {
	            _m$newNode7 = _m$tmpNodeInfo7.node[_m$key7];if (_m$tmpNodeInfo7.parent.indexOf(_m$newNode7) == -1) {
	              _m$buffer7.push(_m$tmpNodeInfo7.getChild(_m$key7));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal7;
	      (0, _chai.assert)(true);
	    });
	  });
	  describe('BREADTH_FIRST_SEARCH', function () {
	    it('check each nodeInfo.node', function () {
	      var expectVals = ['"g"', 'null', '[]', '{"g":"g"}', '"f"', '"e"', 'null', '["f",{"g":"g"},[],null]', '{"e":"e"}', '"a"', '{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}'];
	
	      var _m$nodeInfo8 = new _NodeInfo2.default(data);
	
	      var _m$startDepth8 = 0;
	
	      var _breadthFirstSearch = void 0;
	
	      var _m$result;
	      var _m$buffer8 = [_m$nodeInfo8];
	      var _m$tmpNodeInfo8, _m$key8, _m$newNode8;
	      while (_m$buffer8.length) {
	        _m$tmpNodeInfo8 = _m$buffer8.shift();
	        if (_m$startDepth8 <= _m$tmpNodeInfo8.path.length) {
	          var _m$visitor38 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo8.node), expectVals.pop());
	
	          if (_m$visitor38) {
	            _m$result = _m$tmpNodeInfo8;
	            break;
	          }
	        }
	
	        if (_typeof(_m$tmpNodeInfo8.node) == 'object' && _m$tmpNodeInfo8.path.length < Infinity) {
	          for (_m$key8 in _m$tmpNodeInfo8.node) {
	            _m$newNode8 = _m$tmpNodeInfo8.node[_m$key8];
	            if (_m$tmpNodeInfo8.parent.indexOf(_m$newNode8) == -1) {
	              _m$buffer8.push(_m$tmpNodeInfo8.getChild(_m$key8));
	            }
	          }
	        }
	      }
	
	      _breadthFirstSearch = _m$result;
	      _breadthFirstSearch;
	    });
	    it('check each nodeInfo.path', function () {
	      var expectVals = ['["c","1","g"]', '["c","3"]', '["c","2"]', '["c","1"]', '["c","0"]', '["b","e"]', '["d"]', '["c"]', '["b"]', '["a"]', '[]'];
	
	      var _m$nodeInfo9 = new _NodeInfo2.default(data);
	
	      var _m$startDepth9 = 0;
	
	      var _breadthFirstSearch2 = void 0;
	
	      var _m$result2;var _m$buffer9 = [_m$nodeInfo9];var _m$tmpNodeInfo9, _m$key9, _m$newNode9;while (_m$buffer9.length) {
	        _m$tmpNodeInfo9 = _m$buffer9.shift();if (_m$startDepth9 <= _m$tmpNodeInfo9.path.length) {
	          var _m$visitor39 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo9.path), expectVals.pop());
	          if (_m$visitor39) {
	            _m$result2 = _m$tmpNodeInfo9;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo9.node) == 'object' && _m$tmpNodeInfo9.path.length < Infinity) {
	          for (_m$key9 in _m$tmpNodeInfo9.node) {
	            _m$newNode9 = _m$tmpNodeInfo9.node[_m$key9];if (_m$tmpNodeInfo9.parent.indexOf(_m$newNode9) == -1) {
	              _m$buffer9.push(_m$tmpNodeInfo9.getChild(_m$key9));
	            }
	          }
	        }
	      }_breadthFirstSearch2 = _m$result2;
	      _breadthFirstSearch2;
	    });
	    it('check each nodeInfo.parent', function () {
	      var expectVals = ['[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[]'];
	
	      var _m$nodeInfo10 = new _NodeInfo2.default(data);
	
	      var _m$startDepth10 = 0;
	
	      var _breadthFirstSearch3 = void 0;
	
	      var _m$result3;var _m$buffer10 = [_m$nodeInfo10];var _m$tmpNodeInfo10, _m$key10, _m$newNode10;while (_m$buffer10.length) {
	        _m$tmpNodeInfo10 = _m$buffer10.shift();if (_m$startDepth10 <= _m$tmpNodeInfo10.path.length) {
	          var _m$visitor40 = void 0;
	
	          _chai.assert.equal(JSON.stringify(_m$tmpNodeInfo10.parent), expectVals.pop());
	          if (_m$visitor40) {
	            _m$result3 = _m$tmpNodeInfo10;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo10.node) == 'object' && _m$tmpNodeInfo10.path.length < Infinity) {
	          for (_m$key10 in _m$tmpNodeInfo10.node) {
	            _m$newNode10 = _m$tmpNodeInfo10.node[_m$key10];if (_m$tmpNodeInfo10.parent.indexOf(_m$newNode10) == -1) {
	              _m$buffer10.push(_m$tmpNodeInfo10.getChild(_m$key10));
	            }
	          }
	        }
	      }_breadthFirstSearch3 = _m$result3;
	      _breadthFirstSearch3;
	    });
	    it('check each nodeInfo.root', function () {
	      var _m$nodeInfo11 = new _NodeInfo2.default(data);
	
	      var _m$startDepth11 = 0;
	
	      var _breadthFirstSearch4 = void 0;
	
	      var _m$result4;var _m$buffer11 = [_m$nodeInfo11];var _m$tmpNodeInfo11, _m$key11, _m$newNode11;while (_m$buffer11.length) {
	        _m$tmpNodeInfo11 = _m$buffer11.shift();if (_m$startDepth11 <= _m$tmpNodeInfo11.path.length) {
	          var _m$visitor41 = void 0;
	
	          _chai.assert.strictEqual(_m$tmpNodeInfo11.root, data);
	          if (_m$visitor41) {
	            _m$result4 = _m$tmpNodeInfo11;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo11.node) == 'object' && _m$tmpNodeInfo11.path.length < Infinity) {
	          for (_m$key11 in _m$tmpNodeInfo11.node) {
	            _m$newNode11 = _m$tmpNodeInfo11.node[_m$key11];if (_m$tmpNodeInfo11.parent.indexOf(_m$newNode11) == -1) {
	              _m$buffer11.push(_m$tmpNodeInfo11.getChild(_m$key11));
	            }
	          }
	        }
	      }_breadthFirstSearch4 = _m$result4;
	
	      _breadthFirstSearch4;
	    });
	    it('check m$startDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo12 = new _NodeInfo2.default(data);
	
	      var _m$startDepth12 = 2;
	
	      var _breadthFirstSearch5 = void 0;
	
	      var _m$result5;var _m$buffer12 = [_m$nodeInfo12];var _m$tmpNodeInfo12, _m$key12, _m$newNode12;while (_m$buffer12.length) {
	        _m$tmpNodeInfo12 = _m$buffer12.shift();if (_m$startDepth12 <= _m$tmpNodeInfo12.path.length) {
	          var _m$visitor42 = void 0;
	
	          count++;
	          if (_m$visitor42) {
	            _m$result5 = _m$tmpNodeInfo12;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo12.node) == 'object' && _m$tmpNodeInfo12.path.length < Infinity) {
	          for (_m$key12 in _m$tmpNodeInfo12.node) {
	            _m$newNode12 = _m$tmpNodeInfo12.node[_m$key12];if (_m$tmpNodeInfo12.parent.indexOf(_m$newNode12) == -1) {
	              _m$buffer12.push(_m$tmpNodeInfo12.getChild(_m$key12));
	            }
	          }
	        }
	      }_breadthFirstSearch5 = _m$result5;
	      _breadthFirstSearch5;
	      _chai.assert.equal(count, 6);
	    });
	    it('check m$endDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo13 = new _NodeInfo2.default(data);
	
	      var _m$startDepth13 = 2;
	      var _m$endDepth2 = 2;
	
	      var _breadthFirstSearch6 = void 0;
	
	      var _m$result6;var _m$buffer13 = [_m$nodeInfo13];var _m$tmpNodeInfo13, _m$key13, _m$newNode13;while (_m$buffer13.length) {
	        _m$tmpNodeInfo13 = _m$buffer13.shift();if (_m$startDepth13 <= _m$tmpNodeInfo13.path.length) {
	          var _m$visitor43 = void 0;
	
	          count++;
	          if (_m$visitor43) {
	            _m$result6 = _m$tmpNodeInfo13;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo13.node) == 'object' && _m$tmpNodeInfo13.path.length < _m$endDepth2) {
	          for (_m$key13 in _m$tmpNodeInfo13.node) {
	            _m$newNode13 = _m$tmpNodeInfo13.node[_m$key13];if (_m$tmpNodeInfo13.parent.indexOf(_m$newNode13) == -1) {
	              _m$buffer13.push(_m$tmpNodeInfo13.getChild(_m$key13));
	            }
	          }
	        }
	      }_breadthFirstSearch6 = _m$result6;
	      _breadthFirstSearch6;
	      _chai.assert.equal(count, 5);
	    });
	    it('check return', function () {
	      var count = 0;
	
	      var _m$nodeInfo14 = new _NodeInfo2.default(data);
	
	      var _m$startDepth14 = 2;
	      var _m$endDepth3 = 2;
	
	      var _breadthFirstSearch7 = void 0;
	
	      var _m$result7;var _m$buffer14 = [_m$nodeInfo14];var _m$tmpNodeInfo14, _m$key14, _m$newNode14;while (_m$buffer14.length) {
	        _m$tmpNodeInfo14 = _m$buffer14.shift();if (_m$startDepth14 <= _m$tmpNodeInfo14.path.length) {
	          var _m$visitor44 = void 0;
	
	          count++;
	          _m$visitor44 = count == 3;
	          if (_m$visitor44) {
	            _m$result7 = _m$tmpNodeInfo14;break;
	          }
	        }if (_typeof(_m$tmpNodeInfo14.node) == 'object' && _m$tmpNodeInfo14.path.length < _m$endDepth3) {
	          for (_m$key14 in _m$tmpNodeInfo14.node) {
	            _m$newNode14 = _m$tmpNodeInfo14.node[_m$key14];if (_m$tmpNodeInfo14.parent.indexOf(_m$newNode14) == -1) {
	              _m$buffer14.push(_m$tmpNodeInfo14.getChild(_m$key14));
	            }
	          }
	        }
	      }_breadthFirstSearch7 = _m$result7;
	      var result = _breadthFirstSearch7;
	      _chai.assert.equal(JSON.stringify(result.node), '{"g":"g"}');
	      _chai.assert.equal(JSON.stringify(result.path), '["c","1"]');
	      _chai.assert.equal(JSON.stringify(result.parent), '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]');
	      _chai.assert.strictEqual(result.root, data);
	    });
	    it('break circle', function () {
	      var _m$nodeInfo15 = new _NodeInfo2.default(JSON.parse(JSON.stringify(data)));
	
	      var _m$startDepth15 = 0;
	
	      var _breadthFirstTraversal8 = void 0;
	
	      var _m$buffer15 = [_m$nodeInfo15];var _m$tmpNodeInfo15, _m$key15, _m$newNode15;while (_m$buffer15.length) {
	        _m$tmpNodeInfo15 = _m$buffer15.shift();if (_m$startDepth15 <= _m$tmpNodeInfo15.path.length) {
	          var _m$visitor45 = void 0;
	
	          _m$visitor45;
	        }if (_typeof(_m$tmpNodeInfo15.node) == 'object' && _m$tmpNodeInfo15.path.length < Infinity) {
	          for (_m$key15 in _m$tmpNodeInfo15.node) {
	            _m$newNode15 = _m$tmpNodeInfo15.node[_m$key15];if (_m$tmpNodeInfo15.parent.indexOf(_m$newNode15) == -1) {
	              _m$buffer15.push(_m$tmpNodeInfo15.getChild(_m$key15));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal8;
	      (0, _chai.assert)(true);
	    });
	  });
	  describe('DEPTH_FIRST_TRAVERSAL', function () {
	    it('check each nodeInfo.node', function () {
	      var expectVals = ['null', 'null', '[]', '"g"', '{"g":"g"}', '"f"', '["f",{"g":"g"},[],null]', '"e"', '{"e":"e"}', '"a"', '{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}'];
	
	      var _m$nodeInfo16 = new _NodeInfo2.default(data);
	
	      var _m$startDepth16 = 0;
	
	      var _depthFirstTraversal = void 0;
	
	      var _m$traverse = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor46 = void 0;
	
	          _chai.assert.equal(JSON.stringify(m$_nodeInfo.node), expectVals.pop());
	
	          _m$visitor46;
	        }
	
	        if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;
	          for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];
	            if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };
	
	      _m$traverse(_m$nodeInfo16, _m$startDepth16, Infinity);
	      _depthFirstTraversal;
	    });
	    it('check each nodeInfo.path', function () {
	      var expectVals = ['["d"]', '["c","3"]', '["c","2"]', '["c","1","g"]', '["c","1"]', '["c","0"]', '["c"]', '["b","e"]', '["b"]', '["a"]', '[]'];
	
	      var _m$nodeInfo17 = new _NodeInfo2.default(data);
	
	      var _m$startDepth17 = 0;
	
	      var _depthFirstTraversal2 = void 0;
	
	      var _m$traverse2 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor47 = void 0;
	
	          _chai.assert.equal(JSON.stringify(m$_nodeInfo.path), expectVals.pop());
	          _m$visitor47;
	        }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };_m$traverse2(_m$nodeInfo17, _m$startDepth17, Infinity);_depthFirstTraversal2;
	    });
	    it('check each nodeInfo.parent', function () {
	      var expectVals = ['[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[]'];
	
	      var _m$nodeInfo18 = new _NodeInfo2.default(data);
	
	      var _m$startDepth18 = 0;
	
	      var _depthFirstTraversal3 = void 0;
	
	      var _m$traverse3 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor48 = void 0;
	
	          _chai.assert.equal(JSON.stringify(m$_nodeInfo.parent), expectVals.pop());
	          _m$visitor48;
	        }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };_m$traverse3(_m$nodeInfo18, _m$startDepth18, Infinity);_depthFirstTraversal3;
	    });
	    it('check each nodeInfo.root', function () {
	      var _m$nodeInfo19 = new _NodeInfo2.default(data);
	
	      var _m$startDepth19 = 0;
	
	      var _depthFirstTraversal4 = void 0;
	
	      var _m$traverse4 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor49 = void 0;
	
	          _chai.assert.strictEqual(m$_nodeInfo.root, data);
	          _m$visitor49;
	        }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };_m$traverse4(_m$nodeInfo19, _m$startDepth19, Infinity);
	      _depthFirstTraversal4;
	    });
	    it('check m$startDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo20 = new _NodeInfo2.default(data);
	
	      var _m$startDepth20 = 2;
	
	      var _depthFirstTraversal5 = void 0;
	
	      var _m$traverse5 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor50 = void 0;
	
	          count++;
	          _m$visitor50;
	        }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };_m$traverse5(_m$nodeInfo20, _m$startDepth20, Infinity);_depthFirstTraversal5;
	      _chai.assert.equal(count, 6);
	    });
	    it('check m$endDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo21 = new _NodeInfo2.default(data);
	
	      var _m$startDepth21 = 2;
	      var _m$endDepth4 = 2;
	
	      var _depthFirstTraversal6 = void 0;
	
	      var _m$traverse6 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor51 = void 0;
	
	          count++;
	          _m$visitor51;
	        }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode;for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	            }
	          }
	        }
	      };_m$traverse6(_m$nodeInfo21, _m$startDepth21, _m$endDepth4);_depthFirstTraversal6;
	      _chai.assert.equal(count, 5);
	    });
	    it('break circle', function () {
	      var _m$nodeInfo22 = new _NodeInfo2.default(JSON.parse(JSON.stringify(data)));
	
	      var _m$startDepth22 = 0;
	
	      var _breadthFirstTraversal9 = void 0;
	
	      var _m$buffer16 = [_m$nodeInfo22];var _m$tmpNodeInfo16, _m$key16, _m$newNode16;while (_m$buffer16.length) {
	        _m$tmpNodeInfo16 = _m$buffer16.shift();if (_m$startDepth22 <= _m$tmpNodeInfo16.path.length) {
	          var _m$visitor52 = void 0;
	
	          _m$visitor52;
	        }if (_typeof(_m$tmpNodeInfo16.node) == 'object' && _m$tmpNodeInfo16.path.length < Infinity) {
	          for (_m$key16 in _m$tmpNodeInfo16.node) {
	            _m$newNode16 = _m$tmpNodeInfo16.node[_m$key16];if (_m$tmpNodeInfo16.parent.indexOf(_m$newNode16) == -1) {
	              _m$buffer16.push(_m$tmpNodeInfo16.getChild(_m$key16));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal9;
	      (0, _chai.assert)(true);
	    });
	  });
	  describe('DEPTH_FIRST_SEARCH', function () {
	    it('check each nodeInfo.node', function () {
	      var expectVals = ['null', 'null', '[]', '"g"', '{"g":"g"}', '"f"', '["f",{"g":"g"},[],null]', '"e"', '{"e":"e"}', '"a"', '{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}'];
	
	      var _m$nodeInfo23 = new _NodeInfo2.default(data);
	
	      var _m$startDepth23 = 0;
	
	      var _depthFirstSearch = void 0;
	
	      _DEPTH_FIRST_SEARCH: {
	        var _m$traverse7 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor53 = void 0;
	
	            _chai.assert.equal(JSON.stringify(m$_nodeInfo.node), expectVals.pop());
	
	            if (_m$visitor53) {
	              return m$_nodeInfo;
	            }
	          }
	
	          if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;
	            for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];
	              if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };
	
	        _depthFirstSearch = _m$traverse7(_m$nodeInfo23, _m$startDepth23, Infinity);
	      }
	
	      _depthFirstSearch;
	    });
	    it('check each nodeInfo.path', function () {
	      var expectVals = ['["d"]', '["c","3"]', '["c","2"]', '["c","1","g"]', '["c","1"]', '["c","0"]', '["c"]', '["b","e"]', '["b"]', '["a"]', '[]'];
	
	      var _m$nodeInfo24 = new _NodeInfo2.default(data);
	
	      var _m$startDepth24 = 0;
	
	      var _depthFirstSearch2 = void 0;
	
	      _DEPTH_FIRST_SEARCH2: {
	        var _m$traverse8 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor54 = void 0;
	
	            _chai.assert.equal(JSON.stringify(m$_nodeInfo.path), expectVals.pop());
	            if (_m$visitor54) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch2 = _m$traverse8(_m$nodeInfo24, _m$startDepth24, Infinity);
	      }
	
	      _depthFirstSearch2;
	    });
	    it('check each nodeInfo.parent', function () {
	      var expectVals = ['[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]', '[]'];
	
	      var _m$nodeInfo25 = new _NodeInfo2.default(data);
	
	      var _m$startDepth25 = 0;
	
	      var _depthFirstSearch3 = void 0;
	
	      _DEPTH_FIRST_SEARCH3: {
	        var _m$traverse9 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor55 = void 0;
	
	            _chai.assert.equal(JSON.stringify(m$_nodeInfo.parent), expectVals.pop());
	            if (_m$visitor55) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch3 = _m$traverse9(_m$nodeInfo25, _m$startDepth25, Infinity);
	      }
	
	      _depthFirstSearch3;
	    });
	    it('check each nodeInfo.root', function () {
	      var _m$nodeInfo26 = new _NodeInfo2.default(data);
	
	      var _m$startDepth26 = 0;
	
	      var _depthFirstSearch4 = void 0;
	
	      _DEPTH_FIRST_SEARCH4: {
	        var _m$traverse10 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor56 = void 0;
	
	            _chai.assert.strictEqual(m$_nodeInfo.root, data);
	            if (_m$visitor56) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch4 = _m$traverse10(_m$nodeInfo26, _m$startDepth26, Infinity);
	      }
	
	      _depthFirstSearch4;
	    });
	    it('check m$startDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo27 = new _NodeInfo2.default(data);
	
	      var _m$startDepth27 = 2;
	
	      var _depthFirstSearch5 = void 0;
	
	      _DEPTH_FIRST_SEARCH5: {
	        var _m$traverse11 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor57 = void 0;
	
	            count++;
	            if (_m$visitor57) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch5 = _m$traverse11(_m$nodeInfo27, _m$startDepth27, Infinity);
	      }
	
	      _depthFirstSearch5;
	      _chai.assert.equal(count, 6);
	    });
	    it('check m$endDepth', function () {
	      var count = 0;
	
	      var _m$nodeInfo28 = new _NodeInfo2.default(data);
	
	      var _m$startDepth28 = 2;
	      var _m$endDepth5 = 2;
	
	      var _depthFirstSearch6 = void 0;
	
	      _DEPTH_FIRST_SEARCH6: {
	        var _m$traverse12 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor58 = void 0;
	
	            count++;
	            if (_m$visitor58) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch6 = _m$traverse12(_m$nodeInfo28, _m$startDepth28, _m$endDepth5);
	      }
	
	      _depthFirstSearch6;
	      _chai.assert.equal(count, 5);
	    });
	    it('check return', function () {
	      var count = 0;
	
	      var _m$nodeInfo29 = new _NodeInfo2.default(data);
	
	      var _m$startDepth29 = 2;
	
	      var _depthFirstSearch7 = void 0;
	
	      _DEPTH_FIRST_SEARCH7: {
	        var _m$traverse13 = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	          if (m$_startDepth <= m$_nodeInfo.path.length) {
	            var _m$visitor59 = void 0;
	
	            count++;
	            _m$visitor59 = count == 4;
	            if (_m$visitor59) {
	              return m$_nodeInfo;
	            }
	          }if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	            var m$key, m$newNode, m$tmp;for (m$key in m$_nodeInfo.node) {
	              m$newNode = m$_nodeInfo.node[m$key];if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	                if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                  return m$tmp;
	                }
	              }
	            }
	          }
	        };_depthFirstSearch7 = _m$traverse13(_m$nodeInfo29, _m$startDepth29, Infinity);
	      }
	
	      var result = _depthFirstSearch7;
	      _chai.assert.equal(JSON.stringify(result.node), '"g"');
	      _chai.assert.equal(JSON.stringify(result.path), '["c","1","g"]');
	      _chai.assert.equal(JSON.stringify(result.parent), '[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]');
	      _chai.assert.strictEqual(result.root, data);
	    });
	    it('break circle', function () {
	      var _m$nodeInfo30 = new _NodeInfo2.default(JSON.parse(JSON.stringify(data)));
	
	      var _m$startDepth30 = 0;
	
	      var _breadthFirstTraversal10 = void 0;
	
	      var _m$buffer17 = [_m$nodeInfo30];var _m$tmpNodeInfo17, _m$key17, _m$newNode17;while (_m$buffer17.length) {
	        _m$tmpNodeInfo17 = _m$buffer17.shift();if (_m$startDepth30 <= _m$tmpNodeInfo17.path.length) {
	          var _m$visitor60 = void 0;
	
	          _m$visitor60;
	        }if (_typeof(_m$tmpNodeInfo17.node) == 'object' && _m$tmpNodeInfo17.path.length < Infinity) {
	          for (_m$key17 in _m$tmpNodeInfo17.node) {
	            _m$newNode17 = _m$tmpNodeInfo17.node[_m$key17];if (_m$tmpNodeInfo17.parent.indexOf(_m$newNode17) == -1) {
	              _m$buffer17.push(_m$tmpNodeInfo17.getChild(_m$key17));
	            }
	          }
	        }
	      }
	      _breadthFirstTraversal10;
	      (0, _chai.assert)(true);
	    });
	  });
	});

/***/ },
/* 42 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var NodeInfo = function () {
	  function NodeInfo(node, path, parent, root) {
	    _classCallCheck(this, NodeInfo);
	
	    this.node = node;
	    this.path = path || [];
	    this.parent = parent || [];
	    this.root = root || node;
	    this._parent = this.parent.slice();
	    this._parent.push(this.node);
	  }
	
	  _createClass(NodeInfo, [{
	    key: "getChild",
	    value: function getChild(key) {
	      return new NodeInfo(this.node[key], this.path.concat(key), this._parent, this.root);
	    }
	  }, {
	    key: "moveToChild",
	    value: function moveToChild(key) {
	      this.parent.push(this.node);
	      this.path.push(key);
	      this.node = this.node[key];
	      this._parent.push(this.node);
	      return this;
	    }
	  }, {
	    key: "getParent",
	    value: function getParent() {
	      return new NodeInfo(this.parent[this.parent.length - 1], this.path.slice(0, this.path.length - 1), this.parent.slice(0, this.path.length - 1), this.root);
	    }
	  }]);
	
	  return NodeInfo;
	}();
	
	exports.default = NodeInfo;

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = {
		"a": "a",
		"b": {
			"e": "e"
		},
		"c": [
			"f",
			{
				"g": "g"
			},
			[],
			null
		],
		"d": null
	};

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _util = __webpack_require__(45);
	
	var _chai = __webpack_require__(4);
	
	describe('traversal', function () {
	  var data = __webpack_require__(46);
	  describe('getFromPath', function () {
	    [{
	      input: '/menu/id',
	      expect: 'file'
	    }, {
	      input: 'menu/popup/menuitem/1/value',
	      expect: 'Open'
	    }, {
	      input: '/menu/popup/menuitem/3',
	      expect: undefined
	    }, {
	      input: '/menu/test',
	      expect: null
	    }].forEach(function (testCase) {
	      it('should return ' + testCase.expect + ' when the path is ' + testCase.input, function () {
	        var result = (0, _util.getFromPath)(data, testCase.input);
	        _chai.assert.strictEqual(result, testCase.expect);
	      });
	    });
	  });
	  describe('getFromPathArray', function () {
	    [{
	      input: ['menu', 'id'],
	      expect: 'file'
	    }, {
	      input: ['menu', 'popup', 'menuitem', '1', 'value'],
	      expect: 'Open'
	    }, {
	      input: ['menu', 'popup', 'menuitem', '3'],
	      expect: undefined
	    }, {
	      input: ['menu', 'test'],
	      expect: null
	    }].forEach(function (testCase) {
	      it('should return ' + testCase.expect + ' when the path is ' + JSON.stringify(testCase.input), function () {
	        var result = (0, _util.getFromPathArray)(data, testCase.input);
	        _chai.assert.strictEqual(result, testCase.expect);
	      });
	    });
	  });
	  describe('listStruct', function () {
	    [{
	      input: {
	        name: 'data',
	        args: [data]
	      },
	      expect: 47
	    }, {
	      input: {
	        name: 'data',
	        args: [data, 'bfs']
	      },
	      expect: 47
	    }, {
	      input: {
	        name: 'data',
	        args: [data, 'dfs']
	      },
	      expect: 47
	    }, {
	      input: {
	        name: 'undefined',
	        args: [undefined]
	      },
	      expect: 1
	    }].forEach(function (testCase) {
	      it('should return ' + testCase.expect + ' when the path is ' + testCase.input.name, function () {
	        var result = _util.listStruct.apply(this, testCase.input.args);
	        _chai.assert.equal(result.length, testCase.expect);
	      });
	    });
	  });
	});

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	exports.getFromPath = getFromPath;
	exports.getFromPathArray = getFromPathArray;
	exports.listStruct = listStruct;
	
	var _NodeInfo = __webpack_require__(42);
	
	var _NodeInfo2 = _interopRequireDefault(_NodeInfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getFromPath(root, path) {
	  var delimiter = arguments.length <= 2 || arguments[2] === undefined ? '/' : arguments[2];
	
	  if (path.charAt(0) == delimiter) {
	    path = path.substr(1);
	  }
	
	  return getFromPathArray(root, path.split(delimiter));
	}
	
	function getFromPathArray(root, path) {
	  var result = root;
	
	  var _every = void 0;
	
	  var _m$result = true;
	
	  var _m$i = 0,
	      _m$I = path.length;
	  while (_m$i < _m$I) {
	    var _val2 = path[_m$i];
	
	    var _m$visitor4 = void 0;
	
	    result = result[_val2];
	    _m$visitor4 = result != null;
	
	    if (!_m$visitor4) {
	      _m$result = false;
	      break;
	    }
	
	    _m$i++;
	  }
	
	  _every = _m$result;
	  _every;
	  return result;
	}
	
	function listStruct(target) {
	  var type = arguments.length <= 1 || arguments[1] === undefined ? 'bfs' : arguments[1];
	
	  var result = [];
	  type = type.toLowerCase();
	  if (type == 'bfs') {
	    var _m$nodeInfo3 = new _NodeInfo2.default(target);
	
	    var _m$startDepth3 = 0;
	
	    var _breadthFirstTraversal2 = void 0;
	
	    var _m$buffer = [_m$nodeInfo3];
	    var _m$tmpNodeInfo, _m$key, _m$newNode;
	    while (_m$buffer.length) {
	      _m$tmpNodeInfo = _m$buffer.shift();
	      if (_m$startDepth3 <= _m$tmpNodeInfo.path.length) {
	        var _m$visitor5 = void 0;
	
	        result.push(_m$tmpNodeInfo);
	
	        _m$visitor5;
	      }
	
	      if (_typeof(_m$tmpNodeInfo.node) == 'object' && _m$tmpNodeInfo.path.length < Infinity) {
	        for (_m$key in _m$tmpNodeInfo.node) {
	          _m$newNode = _m$tmpNodeInfo.node[_m$key];
	          if (_m$tmpNodeInfo.parent.indexOf(_m$newNode) == -1) {
	            _m$buffer.push(_m$tmpNodeInfo.getChild(_m$key));
	          }
	        }
	      }
	    }
	
	    _breadthFirstTraversal2;
	  } else if (type == 'dfs') {
	    var _m$nodeInfo4 = new _NodeInfo2.default(target);
	
	    var _m$startDepth4 = 0;
	
	    var _depthFirstTraversal2 = void 0;
	
	    var _m$traverse = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	      if (m$_startDepth <= m$_nodeInfo.path.length) {
	        var _m$visitor6 = void 0;
	
	        result.push(m$_nodeInfo);
	
	        _m$visitor6;
	      }
	
	      if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	        var m$key, m$newNode;
	        for (m$key in m$_nodeInfo.node) {
	          m$newNode = m$_nodeInfo.node[m$key];
	          if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	            m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth);
	          }
	        }
	      }
	    };
	
	    _m$traverse(_m$nodeInfo4, _m$startDepth4, Infinity);
	
	    _depthFirstTraversal2;
	  }
	
	  return result;
	}

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = {
		"menu": {
			"id": "file",
			"value": "File",
			"test": null,
			"popup": {
				"menuitem": [
					{
						"value": "New",
						"onclick": "CreateNewDoc()",
						"id": 300,
						"menuitem2": [
							{
								"value": "New2_1",
								"onclick": "CreateNewDoc2_1()"
							},
							{
								"value": "Open2_1",
								"onclick": "OpenDoc2_1()"
							},
							{
								"value": "Close2_1",
								"onclick": "CloseDoc2_1()"
							}
						]
					},
					{
						"value": "Open",
						"onclick": "OpenDoc()",
						"menuitem2": [
							{
								"value": "New2_2",
								"onclick": "CreateNewDoc2_2()"
							},
							{
								"value": "Open2_2",
								"onclick": "OpenDoc2_2()"
							},
							{
								"value": "Close2_2",
								"onclick": "CloseDoc2_2()"
							}
						]
					},
					{
						"value": "Close",
						"onclick": "CloseDoc()",
						"menuitem2": [
							{
								"value": "New2_3",
								"onclick": "CreateNewDoc2_3()"
							},
							{
								"value": "Open2_3",
								"onclick": "OpenDoc2_3()"
							},
							{
								"value": "Close2_3",
								"onclick": "CloseDoc2_3()"
							}
						]
					}
				]
			}
		}
	};

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Selector = __webpack_require__(48);
	
	var _Selector2 = _interopRequireDefault(_Selector);
	
	var _chai = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	describe('Selector', function () {
	  var data1 = __webpack_require__(46);
	  var data4 = __webpack_require__(50);
	  describe('public method', function () {
	    it('constructor', function () {
	      var option = {};
	      var result = new _Selector2.default(data1, option);
	      _chai.assert.equal(result.root, data1);
	      _chai.assert.equal(result.option, option);
	      _chai.assert.isObject(result.option.pseudoClasses);
	    });
	    it('selectOne', function () {
	      var result = new _Selector2.default(data1).selectOne('.undefined.rule, [value="New"]');
	      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
	    });
	    it('selectAll', function () {
	      var result = new _Selector2.default(data1).selectAll('[value="New"], [onclick="CreateNewDoc()"], [value="New2_3"]');
	      _chai.assert.equal(result.length, 2);
	      checkNodeInfo(result[0], data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
	      checkNodeInfo(result[1], data1.menu.popup.menuitem[2].menuitem2[0], data1, 'menu,popup,menuitem,2,menuitem2,0');
	    });
	    it('getByPath', function () {
	      it('should return value from "menu/popup/menuitem/0/menuitem2/0"', function () {
	        var result = c3s(data1).getByPath('menu/popup/menuitem/0/menuitem2/0');
	        _chai.assert.equal(result.node, data1.menu.popup.menuitem[0].menuitem2[0]);
	        _chai.assert.equal(result.path.join('/'), 'menu/popup/menuitem/0/menuitem2/0');
	      });
	      it('should return undefined from "menu/aaa/ddd"', function () {
	        var result = c3s(data1).getByPath('menu/aaa/ddd');
	        _chai.assert.equal(result.node, undefined);
	        _chai.assert.equal(result.path.join('/'), 'menu/aaa');
	      });
	    });
	  });
	  describe('IS_MATCH_PROP_SELECTOR', function () {
	    it('element is undefined', function () {
	      var result = new _Selector2.default(data1).selectOne('[value="New"]');
	      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
	    });
	    it('element is *', function () {
	      var result = new _Selector2.default(data1).selectOne('*');
	      isData1Menu(result);
	    });
	    it('element is prop', function () {
	      var result = new _Selector2.default(data1).selectOne('value');
	      checkNodeInfo(result, data1.menu.value, data1, 'menu,value');
	    });
	  });
	  describe('IS_MATCH_ATTR_SELECTOR', function () {
	    describe('init', function () {
	      it('attributes is undefined', function () {
	        var result = new _Selector2.default(data1).selectOne('*');
	        isData1Menu(result);
	      });
	      it('node is null', function () {
	        var result = new _Selector2.default(data1).selectOne('>menu>test[attr]');
	        _chai.assert.isUndefined(result);
	      });
	      it('node is undefined', function () {
	        data1['_undefined'] = undefined;
	        var result = new _Selector2.default(data1).selectOne('_undefined[attr]');
	        _chai.assert.isUndefined(result);
	      });
	      it('multi attribute', function () {
	        var result = new _Selector2.default(data1).selectOne('[value][test]');
	        isData1Menu(result);
	      });
	    });
	    describe('id selector', function () {
	      it('ID', function () {
	        var result = new _Selector2.default(data4).selectOne('#1');
	        checkNodeInfo(result, data4[0], data4, '0');
	      });
	      it('Id', function () {
	        var result = new _Selector2.default(data4).selectOne('#2');
	        checkNodeInfo(result, data4[1], data4, '1');
	      });
	      it('id', function () {
	        var result = new _Selector2.default(data4).selectOne('#3');
	        checkNodeInfo(result, data4[2], data4, '2');
	      });
	    });
	    describe('class selector', function () {
	      it('Number', function () {
	        var result = new _Selector2.default(data4).selectOne('#1 .Number');
	        checkNodeInfo(result, 1, data4, '0,ID');
	      });
	    });
	    describe('attribute selector', function () {
	      it('no value', function () {
	        var result = new _Selector2.default(data1).selectOne('[value]');
	        isData1Menu(result);
	      });
	      it('equal', function () {
	        var result = new _Selector2.default(data1).selectOne('[value="File"]');
	        isData1Menu(result);
	      });
	      it('begin', function () {
	        var result = new _Selector2.default(data1).selectOne('[value^="F"]');
	        isData1Menu(result);
	      });
	      it('end', function () {
	        var result = new _Selector2.default(data1).selectOne('[value$="e"]');
	        isData1Menu(result);
	      });
	      it('contain', function () {
	        var result = new _Selector2.default(data1).selectOne('[value*="il"]');
	        isData1Menu(result);
	      });
	      it('case-insensitive', function () {
	        var result = new _Selector2.default(data1).selectOne('[value^="f" i]');
	        isData1Menu(result);
	      });
	    });
	  });
	  describe('IS_MATCH_PSEUDO_CLASS', function () {
	    it('pseudoClasses is undefined', function () {
	      var result = new _Selector2.default(data1).selectOne('[value]');
	      isData1Menu(result);
	    });
	    it('use default method', function () {
	      var result = new _Selector2.default(data1).selectOne(':equal("file")');
	      checkNodeInfo(result, data1.menu.id, data1, 'menu,id');
	    });
	    it('use default method', function () {
	      var result = new _Selector2.default(data4, {
	        pseudoClasses: {
	          lt: function lt(nodeInfo, v2) {
	            return nodeInfo.node < v2;
	          }
	        }
	      }).selectOne('#1>ID:lt(2)');
	      checkNodeInfo(result, 1, data4, '0,ID');
	    });
	  });
	  describe('findFirstMatchNode', function () {
	    it('FETCH_NEXT_SELECTOR', function () {
	      var result = new _Selector2.default(data1).selectOne('#file #300 ~ "1"');
	      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
	    });
	    it('" " combinator', function () {
	      var result = new _Selector2.default(data1).selectOne('#file #300');
	      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
	    });
	    it('">" combinator', function () {
	      var result = new _Selector2.default(data1).selectOne('#file>popup');
	      checkNodeInfo(result, data1.menu.popup, data1, 'menu,popup');
	    });
	    it('"~" combinator', function () {
	      var result = new _Selector2.default(data1).selectOne('#file #300 ~ "1"');
	      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
	    });
	  });
	  describe('findMatchNode', function () {
	    it('FETCH_NEXT_SELECTOR', function () {
	      var result = new _Selector2.default(data1).selectAll('#file #300 ~ "1"')[0];
	      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
	    });
	    it('" " combinator', function () {
	      var result = new _Selector2.default(data1).selectAll('#file #300')[0];
	      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
	    });
	    it('">" combinator', function () {
	      var result = new _Selector2.default(data1).selectAll('#file>popup')[0];
	      checkNodeInfo(result, data1.menu.popup, data1, 'menu,popup');
	    });
	    it('"~" combinator', function () {
	      var result = new _Selector2.default(data1).selectAll('#file #300 ~ "1"')[0];
	      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
	    });
	  });
	
	  var getbranch = function getbranch(root, path) {
	    var currentNode = root;
	    var path = path ? path.split(',') : [];
	    return [root].concat(path.map(function (key) {
	      return currentNode = currentNode[key];
	    }));
	  };
	  var isData1Menu = function isData1Menu(result) {
	    checkNodeInfo(result, data1.menu, data1, 'menu');
	  };
	  var checkNodeInfo = function checkNodeInfo(nodeInfo, node, root, path) {
	    _chai.assert.strictEqual(nodeInfo.node, node);
	    _chai.assert.equal(nodeInfo.path.join(), path);
	    _chai.assert.deepEqual(nodeInfo.parent, getbranch(root, path.replace(/,?[^,]+?$/g, '')));
	  };
	});

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _cssParser = __webpack_require__(3);
	
	var _cssParser2 = _interopRequireDefault(_cssParser);
	
	var _PseudoClass = __webpack_require__(49);
	
	var _PseudoClass2 = _interopRequireDefault(_PseudoClass);
	
	var _NodeInfo = __webpack_require__(42);
	
	var _NodeInfo2 = _interopRequireDefault(_NodeInfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function findFirstMatchNode(combinator, nodeInfo, option) {
	
	  var result;
	  var compound = combinator.next;
	  var lay = nodeInfo.path.length + 1;
	  if (combinator.operator == ' ') {
	    var _depthFirstSearch2 = void 0;
	
	    _DEPTH_FIRST_SEARCH: {
	      var _m$traverse = function m$traverse(m$_nodeInfo, m$_startDepth, m$_endDepth) {
	        if (m$_startDepth <= m$_nodeInfo.path.length) {
	          var _m$visitor39 = void 0;
	
	          var _isMatchAllSelector13 = void 0;
	
	          var _m$element14 = compound.element;
	          var _m$path14 = m$_nodeInfo.path;
	
	          var _isMatchPropSelector14 = void 0;
	
	          _isMatchPropSelector14 = _m$element14 === undefined || _m$element14.ident === '*' || _m$path14[_m$path14.length - 1] === _m$element14.ident;
	          var _m$attributes14 = compound.attributes;
	          var _m$node14 = m$_nodeInfo.node;
	
	          var _isMatchAttrSelector14 = void 0;
	
	          _IS_MATCH_ATTR_SELECTOR: {
	            if (_m$attributes14) {
	              if (_m$node14 !== undefined && _m$node14 !== null) {
	                var _every30 = void 0;
	
	                var _m$result36 = true;
	
	                var _m$i35 = 0,
	                    _m$I35 = _m$attributes14.length;
	                while (_m$i35 < _m$I35) {
	                  var _attrSelector15 = _m$attributes14[_m$i35];
	
	                  var _m$visitor40 = void 0;
	
	                  _M$VISITOR: {
	                    if (_attrSelector15.type == 'Id') {
	                      _m$visitor40 = _m$node14.ID === _attrSelector15.ident || _m$node14.Id === _attrSelector15.ident || _m$node14.id === _attrSelector15.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector15.type == 'Class') {
	                      _m$visitor40 = _m$node14.constructor && _m$node14.constructor.name === _attrSelector15.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector15.type == 'Attribute') {
	                      var _m$attrValue4 = '' + _m$node14[_attrSelector15.ident];
	                      var _selectValue4 = _attrSelector15.value;
	
	                      if (_attrSelector15.flag && _attrSelector15.flag.indexOf('i') != -1) {
	                        _m$attrValue4 = _m$attrValue4.toLowerCase();
	                        _selectValue4 = _selectValue4.toLowerCase();
	                      }
	
	                      if (_attrSelector15.operator == '=') {
	                        _m$visitor40 = _m$attrValue4 == _selectValue4;
	                        break _M$VISITOR;
	                      } else if (_attrSelector15.operator == '^=') {
	                        _m$visitor40 = _m$attrValue4.indexOf(_selectValue4) == 0;
	                        break _M$VISITOR;
	                      } else if (_attrSelector15.operator == '$=') {
	                        _m$visitor40 = _m$attrValue4.indexOf(_selectValue4) == _m$attrValue4.length - _selectValue4.length;
	                        break _M$VISITOR;
	                      } else if (_attrSelector15.operator == '*=') {
	                        _m$visitor40 = _m$attrValue4.indexOf(_selectValue4) != -1;
	                        break _M$VISITOR;
	                      } else {
	                        _m$visitor40 = _m$attrValue4 != undefined || _m$node14.hasOwnProperty(_attrSelector15.ident);
	                        break _M$VISITOR;
	                      }
	                    }
	
	                    _m$visitor40 = false;
	                  }
	
	                  if (!_m$visitor40) {
	                    _m$result36 = false;
	                    break;
	                  }
	
	                  _m$i35++;
	                }
	
	                _every30 = _m$result36;
	                _isMatchAttrSelector14 = _every30;
	                break _IS_MATCH_ATTR_SELECTOR;
	              } else {
	                _isMatchAttrSelector14 = false;
	                break _IS_MATCH_ATTR_SELECTOR;
	              }
	            }
	
	            _isMatchAttrSelector14 = true;
	          }
	
	          var _m$pseudoClasses14 = compound.pseudoClasses;
	
	          var _isMatchPseudoClass14 = void 0;
	
	          _IS_MATCH_PSEUDO_CLASS: {
	            var _pseudoClassMethod3, _pseudoClassArgs3;
	            if (_m$pseudoClasses14) {
	              var _every31 = void 0;
	
	              var _m$result37 = true;var _m$i36 = 0,
	                  _m$I36 = _m$pseudoClasses14.length;while (_m$i36 < _m$I36) {
	                var _pseudoClass15 = _m$pseudoClasses14[_m$i36];
	
	                var _m$visitor41 = void 0;
	
	                _pseudoClassMethod3 = _PseudoClass2.default[_pseudoClass15.ident] || option.pseudoClasses[_pseudoClass15.ident];
	                _pseudoClassArgs3 = [m$_nodeInfo];
	                if (_pseudoClass15.args) _pseudoClassArgs3 = _pseudoClassArgs3.concat(_pseudoClass15.args);
	                _m$visitor41 = _pseudoClassMethod3.apply(undefined, _pseudoClassArgs3);
	                if (!_m$visitor41) {
	                  _m$result37 = false;break;
	                }_m$i36++;
	              }_every31 = _m$result37;
	              _isMatchPseudoClass14 = _every31;
	              break _IS_MATCH_PSEUDO_CLASS;
	            }
	
	            _isMatchPseudoClass14 = true;
	          }
	
	          _isMatchAllSelector13 = _isMatchPropSelector14 && _isMatchAttrSelector14 && _isMatchPseudoClass14;
	
	          if (_isMatchAllSelector13) {
	            var _m$combinator13 = compound.next;
	
	            var _fetchNextSelector13 = void 0;
	
	            _FETCH_NEXT_SELECTOR: {
	              if (_m$combinator13) {
	                if (_typeof(m$_nodeInfo.node) === 'object' || _m$combinator13.operator == '~') {
	                  _fetchNextSelector13 = findFirstMatchNode(_m$combinator13, m$_nodeInfo, option);
	                  break _FETCH_NEXT_SELECTOR;
	                }
	              } else {
	                _fetchNextSelector13 = m$_nodeInfo;
	                break _FETCH_NEXT_SELECTOR;
	              }
	            }
	
	            _m$visitor39 = result = _fetchNextSelector13;
	          }
	
	          if (_m$visitor39) {
	            return m$_nodeInfo;
	          }
	        }
	
	        if (_typeof(m$_nodeInfo.node) == 'object' && m$_nodeInfo.path.length < m$_endDepth) {
	          var m$key, m$newNode, m$tmp;
	          for (m$key in m$_nodeInfo.node) {
	            m$newNode = m$_nodeInfo.node[m$key];
	            if (m$_nodeInfo.parent.indexOf(m$newNode) == -1) {
	              if (m$tmp = m$traverse(m$_nodeInfo.getChild(m$key), m$_startDepth, m$_endDepth)) {
	                return m$tmp;
	              }
	            }
	          }
	        }
	      };
	
	      _depthFirstSearch2 = _m$traverse(nodeInfo, lay, Infinity);
	    }
	
	    _depthFirstSearch2;
	  } else if (combinator.operator == '>') {
	    var _breadthFirstSearch3 = void 0;
	
	    var _m$result13;
	    var _m$buffer = [nodeInfo];
	    var _m$tmpNodeInfo, _m$key, _m$newNode;
	    while (_m$buffer.length) {
	      _m$tmpNodeInfo = _m$buffer.shift();
	      if (lay <= _m$tmpNodeInfo.path.length) {
	        var _m$visitor42 = void 0;
	
	        var _isMatchAllSelector14 = void 0;
	
	        var _m$element15 = compound.element;
	        var _m$path15 = _m$tmpNodeInfo.path;
	
	        var _isMatchPropSelector15 = void 0;
	
	        _isMatchPropSelector15 = _m$element15 === undefined || _m$element15.ident === '*' || _m$path15[_m$path15.length - 1] === _m$element15.ident;
	        var _m$attributes15 = compound.attributes;
	        var _m$node15 = _m$tmpNodeInfo.node;
	
	        var _isMatchAttrSelector15 = void 0;
	
	        _IS_MATCH_ATTR_SELECTOR: {
	          if (_m$attributes15) {
	            if (_m$node15 !== undefined && _m$node15 !== null) {
	              var _every32 = void 0;
	
	              var _m$result38 = true;var _m$i37 = 0,
	                  _m$I37 = _m$attributes15.length;while (_m$i37 < _m$I37) {
	                var _attrSelector16 = _m$attributes15[_m$i37];
	
	                var _m$visitor43 = void 0;
	
	                _M$VISITOR: {
	                  if (_attrSelector16.type == 'Id') {
	                    _m$visitor43 = _m$node15.ID === _attrSelector16.ident || _m$node15.Id === _attrSelector16.ident || _m$node15.id === _attrSelector16.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector16.type == 'Class') {
	                    _m$visitor43 = _m$node15.constructor && _m$node15.constructor.name === _attrSelector16.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector16.type == 'Attribute') {
	                    var _m$attrValue6 = '' + _m$node15[_attrSelector16.ident];var _selectValue6 = _attrSelector16.value;if (_attrSelector16.flag && _attrSelector16.flag.indexOf('i') != -1) {
	                      _m$attrValue6 = _m$attrValue6.toLowerCase();_selectValue6 = _selectValue6.toLowerCase();
	                    }if (_attrSelector16.operator == '=') {
	                      _m$visitor43 = _m$attrValue6 == _selectValue6;
	                      break _M$VISITOR;
	                    } else if (_attrSelector16.operator == '^=') {
	                      _m$visitor43 = _m$attrValue6.indexOf(_selectValue6) == 0;
	                      break _M$VISITOR;
	                    } else if (_attrSelector16.operator == '$=') {
	                      _m$visitor43 = _m$attrValue6.indexOf(_selectValue6) == _m$attrValue6.length - _selectValue6.length;
	                      break _M$VISITOR;
	                    } else if (_attrSelector16.operator == '*=') {
	                      _m$visitor43 = _m$attrValue6.indexOf(_selectValue6) != -1;
	                      break _M$VISITOR;
	                    } else {
	                      _m$visitor43 = _m$attrValue6 != undefined || _m$node15.hasOwnProperty(_attrSelector16.ident);
	                      break _M$VISITOR;
	                    }
	                  }_m$visitor43 = false;
	                }
	
	                if (!_m$visitor43) {
	                  _m$result38 = false;break;
	                }_m$i37++;
	              }_every32 = _m$result38;
	              _isMatchAttrSelector15 = _every32;
	              break _IS_MATCH_ATTR_SELECTOR;
	            } else {
	              _isMatchAttrSelector15 = false;
	              break _IS_MATCH_ATTR_SELECTOR;
	            }
	          }_isMatchAttrSelector15 = true;
	        }
	
	        var _m$pseudoClasses15 = compound.pseudoClasses;
	
	        var _isMatchPseudoClass15 = void 0;
	
	        _IS_MATCH_PSEUDO_CLASS: {
	          var _pseudoClassMethod5, _pseudoClassArgs5;if (_m$pseudoClasses15) {
	            var _every33 = void 0;
	
	            var _m$result39 = true;var _m$i38 = 0,
	                _m$I38 = _m$pseudoClasses15.length;while (_m$i38 < _m$I38) {
	              var _pseudoClass16 = _m$pseudoClasses15[_m$i38];
	
	              var _m$visitor44 = void 0;
	
	              _pseudoClassMethod5 = _PseudoClass2.default[_pseudoClass16.ident] || option.pseudoClasses[_pseudoClass16.ident];_pseudoClassArgs5 = [_m$tmpNodeInfo];if (_pseudoClass16.args) _pseudoClassArgs5 = _pseudoClassArgs5.concat(_pseudoClass16.args);_m$visitor44 = _pseudoClassMethod5.apply(undefined, _pseudoClassArgs5);
	              if (!_m$visitor44) {
	                _m$result39 = false;break;
	              }_m$i38++;
	            }_every33 = _m$result39;
	            _isMatchPseudoClass15 = _every33;
	            break _IS_MATCH_PSEUDO_CLASS;
	          }_isMatchPseudoClass15 = true;
	        }
	
	        _isMatchAllSelector14 = _isMatchPropSelector15 && _isMatchAttrSelector15 && _isMatchPseudoClass15;
	
	        if (_isMatchAllSelector14) {
	          var _m$combinator14 = compound.next;
	
	          var _fetchNextSelector14 = void 0;
	
	          _FETCH_NEXT_SELECTOR2: {
	            if (_m$combinator14) {
	              if (_typeof(_m$tmpNodeInfo.node) === 'object' || _m$combinator14.operator == '~') {
	                _fetchNextSelector14 = findFirstMatchNode(_m$combinator14, _m$tmpNodeInfo, option);
	                break _FETCH_NEXT_SELECTOR2;
	              }
	            } else {
	              _fetchNextSelector14 = _m$tmpNodeInfo;
	              break _FETCH_NEXT_SELECTOR2;
	            }
	          }
	
	          _m$visitor42 = result = _fetchNextSelector14;
	        }
	
	        if (_m$visitor42) {
	          _m$result13 = _m$tmpNodeInfo;
	          break;
	        }
	      }
	
	      if (_typeof(_m$tmpNodeInfo.node) == 'object' && _m$tmpNodeInfo.path.length < lay) {
	        for (_m$key in _m$tmpNodeInfo.node) {
	          _m$newNode = _m$tmpNodeInfo.node[_m$key];
	          if (_m$tmpNodeInfo.parent.indexOf(_m$newNode) == -1) {
	            _m$buffer.push(_m$tmpNodeInfo.getChild(_m$key));
	          }
	        }
	      }
	    }
	
	    _breadthFirstSearch3 = _m$result13;
	
	    _breadthFirstSearch3;
	  } else if (combinator.operator == '~') {
	    var currentProp = nodeInfo.path[nodeInfo.path.length - 1];
	
	    var _m$nodeInfo3 = nodeInfo.getParent();
	
	    var _m$startDepth3 = lay - 1;
	
	    var _m$endDepth3 = lay - 1;
	
	    var _breadthFirstSearch4 = void 0;
	
	    var _m$result18;var _m$buffer2 = [_m$nodeInfo3];var _m$tmpNodeInfo2, _m$key2, _m$newNode2;while (_m$buffer2.length) {
	      _m$tmpNodeInfo2 = _m$buffer2.shift();if (_m$startDepth3 <= _m$tmpNodeInfo2.path.length) {
	        var _m$visitor45 = void 0;
	
	        if (_m$tmpNodeInfo2.path[_m$tmpNodeInfo2.path.length - 1] != currentProp) {
	          var _isMatchAllSelector15 = void 0;
	
	          var _m$element16 = compound.element;
	          var _m$path16 = _m$tmpNodeInfo2.path;
	
	          var _isMatchPropSelector16 = void 0;
	
	          _isMatchPropSelector16 = _m$element16 === undefined || _m$element16.ident === '*' || _m$path16[_m$path16.length - 1] === _m$element16.ident;
	          var _m$attributes16 = compound.attributes;
	          var _m$node16 = _m$tmpNodeInfo2.node;
	
	          var _isMatchAttrSelector16 = void 0;
	
	          _IS_MATCH_ATTR_SELECTOR: {
	            if (_m$attributes16) {
	              if (_m$node16 !== undefined && _m$node16 !== null) {
	                var _every34 = void 0;
	
	                var _m$result40 = true;var _m$i39 = 0,
	                    _m$I39 = _m$attributes16.length;while (_m$i39 < _m$I39) {
	                  var _attrSelector17 = _m$attributes16[_m$i39];
	
	                  var _m$visitor46 = void 0;
	
	                  _M$VISITOR: {
	                    if (_attrSelector17.type == 'Id') {
	                      _m$visitor46 = _m$node16.ID === _attrSelector17.ident || _m$node16.Id === _attrSelector17.ident || _m$node16.id === _attrSelector17.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector17.type == 'Class') {
	                      _m$visitor46 = _m$node16.constructor && _m$node16.constructor.name === _attrSelector17.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector17.type == 'Attribute') {
	                      var _m$attrValue8 = '' + _m$node16[_attrSelector17.ident];var _selectValue8 = _attrSelector17.value;if (_attrSelector17.flag && _attrSelector17.flag.indexOf('i') != -1) {
	                        _m$attrValue8 = _m$attrValue8.toLowerCase();_selectValue8 = _selectValue8.toLowerCase();
	                      }if (_attrSelector17.operator == '=') {
	                        _m$visitor46 = _m$attrValue8 == _selectValue8;
	                        break _M$VISITOR;
	                      } else if (_attrSelector17.operator == '^=') {
	                        _m$visitor46 = _m$attrValue8.indexOf(_selectValue8) == 0;
	                        break _M$VISITOR;
	                      } else if (_attrSelector17.operator == '$=') {
	                        _m$visitor46 = _m$attrValue8.indexOf(_selectValue8) == _m$attrValue8.length - _selectValue8.length;
	                        break _M$VISITOR;
	                      } else if (_attrSelector17.operator == '*=') {
	                        _m$visitor46 = _m$attrValue8.indexOf(_selectValue8) != -1;
	                        break _M$VISITOR;
	                      } else {
	                        _m$visitor46 = _m$attrValue8 != undefined || _m$node16.hasOwnProperty(_attrSelector17.ident);
	                        break _M$VISITOR;
	                      }
	                    }_m$visitor46 = false;
	                  }
	
	                  if (!_m$visitor46) {
	                    _m$result40 = false;break;
	                  }_m$i39++;
	                }_every34 = _m$result40;
	                _isMatchAttrSelector16 = _every34;
	                break _IS_MATCH_ATTR_SELECTOR;
	              } else {
	                _isMatchAttrSelector16 = false;
	                break _IS_MATCH_ATTR_SELECTOR;
	              }
	            }_isMatchAttrSelector16 = true;
	          }
	
	          var _m$pseudoClasses16 = compound.pseudoClasses;
	
	          var _isMatchPseudoClass16 = void 0;
	
	          _IS_MATCH_PSEUDO_CLASS: {
	            var _pseudoClassMethod7, _pseudoClassArgs7;if (_m$pseudoClasses16) {
	              var _every35 = void 0;
	
	              var _m$result41 = true;var _m$i40 = 0,
	                  _m$I40 = _m$pseudoClasses16.length;while (_m$i40 < _m$I40) {
	                var _pseudoClass17 = _m$pseudoClasses16[_m$i40];
	
	                var _m$visitor47 = void 0;
	
	                _pseudoClassMethod7 = _PseudoClass2.default[_pseudoClass17.ident] || option.pseudoClasses[_pseudoClass17.ident];_pseudoClassArgs7 = [_m$tmpNodeInfo2];if (_pseudoClass17.args) _pseudoClassArgs7 = _pseudoClassArgs7.concat(_pseudoClass17.args);_m$visitor47 = _pseudoClassMethod7.apply(undefined, _pseudoClassArgs7);
	                if (!_m$visitor47) {
	                  _m$result41 = false;break;
	                }_m$i40++;
	              }_every35 = _m$result41;
	              _isMatchPseudoClass16 = _every35;
	              break _IS_MATCH_PSEUDO_CLASS;
	            }_isMatchPseudoClass16 = true;
	          }
	
	          _isMatchAllSelector15 = _isMatchPropSelector16 && _isMatchAttrSelector16 && _isMatchPseudoClass16;
	
	          if (_isMatchAllSelector15) {
	            var _m$combinator15 = compound.next;
	
	            var _fetchNextSelector15 = void 0;
	
	            _FETCH_NEXT_SELECTOR3: {
	              if (_m$combinator15) {
	                if (_typeof(_m$tmpNodeInfo2.node) === 'object' || _m$combinator15.operator == '~') {
	                  _fetchNextSelector15 = findFirstMatchNode(_m$combinator15, _m$tmpNodeInfo2, option);
	                  break _FETCH_NEXT_SELECTOR3;
	                }
	              } else {
	                _fetchNextSelector15 = _m$tmpNodeInfo2;
	                break _FETCH_NEXT_SELECTOR3;
	              }
	            }
	
	            _m$visitor45 = result = _fetchNextSelector15;
	          }
	        }
	        if (_m$visitor45) {
	          _m$result18 = _m$tmpNodeInfo2;break;
	        }
	      }if (_typeof(_m$tmpNodeInfo2.node) == 'object' && _m$tmpNodeInfo2.path.length < _m$endDepth3) {
	        for (_m$key2 in _m$tmpNodeInfo2.node) {
	          _m$newNode2 = _m$tmpNodeInfo2.node[_m$key2];if (_m$tmpNodeInfo2.parent.indexOf(_m$newNode2) == -1) {
	            _m$buffer2.push(_m$tmpNodeInfo2.getChild(_m$key2));
	          }
	        }
	      }
	    }_breadthFirstSearch4 = _m$result18;
	    _breadthFirstSearch4;
	  }
	
	  return result;
	}
	function findMatchNode(combinator, nodeInfo, option) {
	
	  var result = [];
	  var compound = combinator.next,
	      tmp;
	  var lay = nodeInfo.path.length + 1;
	  if (combinator.operator == ' ') {
	    var _breadthFirstTraversal4 = void 0;
	
	    var _m$buffer3 = [nodeInfo];
	    var _m$tmpNodeInfo3, _m$key3, _m$newNode3;
	    while (_m$buffer3.length) {
	      _m$tmpNodeInfo3 = _m$buffer3.shift();
	      if (lay <= _m$tmpNodeInfo3.path.length) {
	        var _m$visitor48 = void 0;
	
	        var _isMatchAllSelector16 = void 0;
	
	        var _m$element17 = compound.element;
	        var _m$path17 = _m$tmpNodeInfo3.path;
	
	        var _isMatchPropSelector17 = void 0;
	
	        _isMatchPropSelector17 = _m$element17 === undefined || _m$element17.ident === '*' || _m$path17[_m$path17.length - 1] === _m$element17.ident;
	        var _m$attributes17 = compound.attributes;
	        var _m$node17 = _m$tmpNodeInfo3.node;
	
	        var _isMatchAttrSelector17 = void 0;
	
	        _IS_MATCH_ATTR_SELECTOR: {
	          if (_m$attributes17) {
	            if (_m$node17 !== undefined && _m$node17 !== null) {
	              var _every36 = void 0;
	
	              var _m$result42 = true;var _m$i41 = 0,
	                  _m$I41 = _m$attributes17.length;while (_m$i41 < _m$I41) {
	                var _attrSelector18 = _m$attributes17[_m$i41];
	
	                var _m$visitor49 = void 0;
	
	                _M$VISITOR: {
	                  if (_attrSelector18.type == 'Id') {
	                    _m$visitor49 = _m$node17.ID === _attrSelector18.ident || _m$node17.Id === _attrSelector18.ident || _m$node17.id === _attrSelector18.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector18.type == 'Class') {
	                    _m$visitor49 = _m$node17.constructor && _m$node17.constructor.name === _attrSelector18.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector18.type == 'Attribute') {
	                    var _m$attrValue10 = '' + _m$node17[_attrSelector18.ident];var _selectValue10 = _attrSelector18.value;if (_attrSelector18.flag && _attrSelector18.flag.indexOf('i') != -1) {
	                      _m$attrValue10 = _m$attrValue10.toLowerCase();_selectValue10 = _selectValue10.toLowerCase();
	                    }if (_attrSelector18.operator == '=') {
	                      _m$visitor49 = _m$attrValue10 == _selectValue10;
	                      break _M$VISITOR;
	                    } else if (_attrSelector18.operator == '^=') {
	                      _m$visitor49 = _m$attrValue10.indexOf(_selectValue10) == 0;
	                      break _M$VISITOR;
	                    } else if (_attrSelector18.operator == '$=') {
	                      _m$visitor49 = _m$attrValue10.indexOf(_selectValue10) == _m$attrValue10.length - _selectValue10.length;
	                      break _M$VISITOR;
	                    } else if (_attrSelector18.operator == '*=') {
	                      _m$visitor49 = _m$attrValue10.indexOf(_selectValue10) != -1;
	                      break _M$VISITOR;
	                    } else {
	                      _m$visitor49 = _m$attrValue10 != undefined || _m$node17.hasOwnProperty(_attrSelector18.ident);
	                      break _M$VISITOR;
	                    }
	                  }_m$visitor49 = false;
	                }
	
	                if (!_m$visitor49) {
	                  _m$result42 = false;break;
	                }_m$i41++;
	              }_every36 = _m$result42;
	              _isMatchAttrSelector17 = _every36;
	              break _IS_MATCH_ATTR_SELECTOR;
	            } else {
	              _isMatchAttrSelector17 = false;
	              break _IS_MATCH_ATTR_SELECTOR;
	            }
	          }_isMatchAttrSelector17 = true;
	        }
	
	        var _m$pseudoClasses17 = compound.pseudoClasses;
	
	        var _isMatchPseudoClass17 = void 0;
	
	        _IS_MATCH_PSEUDO_CLASS: {
	          var _pseudoClassMethod9, _pseudoClassArgs9;if (_m$pseudoClasses17) {
	            var _every37 = void 0;
	
	            var _m$result43 = true;var _m$i42 = 0,
	                _m$I42 = _m$pseudoClasses17.length;while (_m$i42 < _m$I42) {
	              var _pseudoClass18 = _m$pseudoClasses17[_m$i42];
	
	              var _m$visitor50 = void 0;
	
	              _pseudoClassMethod9 = _PseudoClass2.default[_pseudoClass18.ident] || option.pseudoClasses[_pseudoClass18.ident];_pseudoClassArgs9 = [_m$tmpNodeInfo3];if (_pseudoClass18.args) _pseudoClassArgs9 = _pseudoClassArgs9.concat(_pseudoClass18.args);_m$visitor50 = _pseudoClassMethod9.apply(undefined, _pseudoClassArgs9);
	              if (!_m$visitor50) {
	                _m$result43 = false;break;
	              }_m$i42++;
	            }_every37 = _m$result43;
	            _isMatchPseudoClass17 = _every37;
	            break _IS_MATCH_PSEUDO_CLASS;
	          }_isMatchPseudoClass17 = true;
	        }
	
	        _isMatchAllSelector16 = _isMatchPropSelector17 && _isMatchAttrSelector17 && _isMatchPseudoClass17;
	
	        if (_isMatchAllSelector16) {
	          var _m$combinator16 = compound.next;
	
	          var _fetchNextSelector16 = void 0;
	
	          _FETCH_NEXT_SELECTOR4: {
	            if (_m$combinator16) {
	              if (_typeof(_m$tmpNodeInfo3.node) === 'object' || _m$combinator16.operator == '~') {
	                _fetchNextSelector16 = findMatchNode(_m$combinator16, _m$tmpNodeInfo3, option);
	                break _FETCH_NEXT_SELECTOR4;
	              }
	            } else {
	              _fetchNextSelector16 = [_m$tmpNodeInfo3];
	              break _FETCH_NEXT_SELECTOR4;
	            }
	          }
	
	          Array.prototype.push.apply(result, _fetchNextSelector16);
	        }
	
	        _m$visitor48;
	      }
	
	      if (_typeof(_m$tmpNodeInfo3.node) == 'object' && _m$tmpNodeInfo3.path.length < Infinity) {
	        for (_m$key3 in _m$tmpNodeInfo3.node) {
	          _m$newNode3 = _m$tmpNodeInfo3.node[_m$key3];
	          if (_m$tmpNodeInfo3.parent.indexOf(_m$newNode3) == -1) {
	            _m$buffer3.push(_m$tmpNodeInfo3.getChild(_m$key3));
	          }
	        }
	      }
	    }
	
	    _breadthFirstTraversal4;
	  } else if (combinator.operator == '>') {
	    var _breadthFirstTraversal5 = void 0;
	
	    var _m$buffer4 = [nodeInfo];var _m$tmpNodeInfo4, _m$key4, _m$newNode4;while (_m$buffer4.length) {
	      _m$tmpNodeInfo4 = _m$buffer4.shift();if (lay <= _m$tmpNodeInfo4.path.length) {
	        var _m$visitor51 = void 0;
	
	        var _isMatchAllSelector17 = void 0;
	
	        var _m$element18 = compound.element;
	        var _m$path18 = _m$tmpNodeInfo4.path;
	
	        var _isMatchPropSelector18 = void 0;
	
	        _isMatchPropSelector18 = _m$element18 === undefined || _m$element18.ident === '*' || _m$path18[_m$path18.length - 1] === _m$element18.ident;
	        var _m$attributes18 = compound.attributes;
	        var _m$node18 = _m$tmpNodeInfo4.node;
	
	        var _isMatchAttrSelector18 = void 0;
	
	        _IS_MATCH_ATTR_SELECTOR: {
	          if (_m$attributes18) {
	            if (_m$node18 !== undefined && _m$node18 !== null) {
	              var _every38 = void 0;
	
	              var _m$result44 = true;var _m$i43 = 0,
	                  _m$I43 = _m$attributes18.length;while (_m$i43 < _m$I43) {
	                var _attrSelector19 = _m$attributes18[_m$i43];
	
	                var _m$visitor52 = void 0;
	
	                _M$VISITOR: {
	                  if (_attrSelector19.type == 'Id') {
	                    _m$visitor52 = _m$node18.ID === _attrSelector19.ident || _m$node18.Id === _attrSelector19.ident || _m$node18.id === _attrSelector19.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector19.type == 'Class') {
	                    _m$visitor52 = _m$node18.constructor && _m$node18.constructor.name === _attrSelector19.ident;
	                    break _M$VISITOR;
	                  } else if (_attrSelector19.type == 'Attribute') {
	                    var _m$attrValue12 = '' + _m$node18[_attrSelector19.ident];var _selectValue12 = _attrSelector19.value;if (_attrSelector19.flag && _attrSelector19.flag.indexOf('i') != -1) {
	                      _m$attrValue12 = _m$attrValue12.toLowerCase();_selectValue12 = _selectValue12.toLowerCase();
	                    }if (_attrSelector19.operator == '=') {
	                      _m$visitor52 = _m$attrValue12 == _selectValue12;
	                      break _M$VISITOR;
	                    } else if (_attrSelector19.operator == '^=') {
	                      _m$visitor52 = _m$attrValue12.indexOf(_selectValue12) == 0;
	                      break _M$VISITOR;
	                    } else if (_attrSelector19.operator == '$=') {
	                      _m$visitor52 = _m$attrValue12.indexOf(_selectValue12) == _m$attrValue12.length - _selectValue12.length;
	                      break _M$VISITOR;
	                    } else if (_attrSelector19.operator == '*=') {
	                      _m$visitor52 = _m$attrValue12.indexOf(_selectValue12) != -1;
	                      break _M$VISITOR;
	                    } else {
	                      _m$visitor52 = _m$attrValue12 != undefined || _m$node18.hasOwnProperty(_attrSelector19.ident);
	                      break _M$VISITOR;
	                    }
	                  }_m$visitor52 = false;
	                }
	
	                if (!_m$visitor52) {
	                  _m$result44 = false;break;
	                }_m$i43++;
	              }_every38 = _m$result44;
	              _isMatchAttrSelector18 = _every38;
	              break _IS_MATCH_ATTR_SELECTOR;
	            } else {
	              _isMatchAttrSelector18 = false;
	              break _IS_MATCH_ATTR_SELECTOR;
	            }
	          }_isMatchAttrSelector18 = true;
	        }
	
	        var _m$pseudoClasses18 = compound.pseudoClasses;
	
	        var _isMatchPseudoClass18 = void 0;
	
	        _IS_MATCH_PSEUDO_CLASS: {
	          var _pseudoClassMethod11, _pseudoClassArgs11;if (_m$pseudoClasses18) {
	            var _every39 = void 0;
	
	            var _m$result45 = true;var _m$i44 = 0,
	                _m$I44 = _m$pseudoClasses18.length;while (_m$i44 < _m$I44) {
	              var _pseudoClass19 = _m$pseudoClasses18[_m$i44];
	
	              var _m$visitor53 = void 0;
	
	              _pseudoClassMethod11 = _PseudoClass2.default[_pseudoClass19.ident] || option.pseudoClasses[_pseudoClass19.ident];_pseudoClassArgs11 = [_m$tmpNodeInfo4];if (_pseudoClass19.args) _pseudoClassArgs11 = _pseudoClassArgs11.concat(_pseudoClass19.args);_m$visitor53 = _pseudoClassMethod11.apply(undefined, _pseudoClassArgs11);
	              if (!_m$visitor53) {
	                _m$result45 = false;break;
	              }_m$i44++;
	            }_every39 = _m$result45;
	            _isMatchPseudoClass18 = _every39;
	            break _IS_MATCH_PSEUDO_CLASS;
	          }_isMatchPseudoClass18 = true;
	        }
	
	        _isMatchAllSelector17 = _isMatchPropSelector18 && _isMatchAttrSelector18 && _isMatchPseudoClass18;
	
	        if (_isMatchAllSelector17) {
	          var _m$combinator17 = compound.next;
	
	          var _fetchNextSelector17 = void 0;
	
	          _FETCH_NEXT_SELECTOR5: {
	            if (_m$combinator17) {
	              if (_typeof(_m$tmpNodeInfo4.node) === 'object' || _m$combinator17.operator == '~') {
	                _fetchNextSelector17 = findMatchNode(_m$combinator17, _m$tmpNodeInfo4, option);
	                break _FETCH_NEXT_SELECTOR5;
	              }
	            } else {
	              _fetchNextSelector17 = [_m$tmpNodeInfo4];
	              break _FETCH_NEXT_SELECTOR5;
	            }
	          }
	
	          Array.prototype.push.apply(result, _fetchNextSelector17);
	        }
	        _m$visitor51;
	      }if (_typeof(_m$tmpNodeInfo4.node) == 'object' && _m$tmpNodeInfo4.path.length < lay) {
	        for (_m$key4 in _m$tmpNodeInfo4.node) {
	          _m$newNode4 = _m$tmpNodeInfo4.node[_m$key4];if (_m$tmpNodeInfo4.parent.indexOf(_m$newNode4) == -1) {
	            _m$buffer4.push(_m$tmpNodeInfo4.getChild(_m$key4));
	          }
	        }
	      }
	    }
	    _breadthFirstTraversal5;
	  } else if (combinator.operator == '~') {
	    var currentProp = nodeInfo.path[nodeInfo.path.length - 1];
	
	    var _m$nodeInfo4 = nodeInfo.getParent();
	
	    var _m$startDepth4 = lay - 1;
	
	    var _m$endDepth4 = lay - 1;
	
	    var _breadthFirstTraversal6 = void 0;
	
	    var _m$buffer5 = [_m$nodeInfo4];var _m$tmpNodeInfo5, _m$key5, _m$newNode5;while (_m$buffer5.length) {
	      _m$tmpNodeInfo5 = _m$buffer5.shift();if (_m$startDepth4 <= _m$tmpNodeInfo5.path.length) {
	        var _m$visitor54 = void 0;
	
	        if (_m$tmpNodeInfo5.path[_m$tmpNodeInfo5.path.length - 1] != currentProp) {
	          var _isMatchAllSelector18 = void 0;
	
	          var _m$element19 = compound.element;
	          var _m$path19 = _m$tmpNodeInfo5.path;
	
	          var _isMatchPropSelector19 = void 0;
	
	          _isMatchPropSelector19 = _m$element19 === undefined || _m$element19.ident === '*' || _m$path19[_m$path19.length - 1] === _m$element19.ident;
	          var _m$attributes19 = compound.attributes;
	          var _m$node19 = _m$tmpNodeInfo5.node;
	
	          var _isMatchAttrSelector19 = void 0;
	
	          _IS_MATCH_ATTR_SELECTOR: {
	            if (_m$attributes19) {
	              if (_m$node19 !== undefined && _m$node19 !== null) {
	                var _every40 = void 0;
	
	                var _m$result46 = true;var _m$i45 = 0,
	                    _m$I45 = _m$attributes19.length;while (_m$i45 < _m$I45) {
	                  var _attrSelector20 = _m$attributes19[_m$i45];
	
	                  var _m$visitor55 = void 0;
	
	                  _M$VISITOR: {
	                    if (_attrSelector20.type == 'Id') {
	                      _m$visitor55 = _m$node19.ID === _attrSelector20.ident || _m$node19.Id === _attrSelector20.ident || _m$node19.id === _attrSelector20.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector20.type == 'Class') {
	                      _m$visitor55 = _m$node19.constructor && _m$node19.constructor.name === _attrSelector20.ident;
	                      break _M$VISITOR;
	                    } else if (_attrSelector20.type == 'Attribute') {
	                      var _m$attrValue14 = '' + _m$node19[_attrSelector20.ident];var _selectValue14 = _attrSelector20.value;if (_attrSelector20.flag && _attrSelector20.flag.indexOf('i') != -1) {
	                        _m$attrValue14 = _m$attrValue14.toLowerCase();_selectValue14 = _selectValue14.toLowerCase();
	                      }if (_attrSelector20.operator == '=') {
	                        _m$visitor55 = _m$attrValue14 == _selectValue14;
	                        break _M$VISITOR;
	                      } else if (_attrSelector20.operator == '^=') {
	                        _m$visitor55 = _m$attrValue14.indexOf(_selectValue14) == 0;
	                        break _M$VISITOR;
	                      } else if (_attrSelector20.operator == '$=') {
	                        _m$visitor55 = _m$attrValue14.indexOf(_selectValue14) == _m$attrValue14.length - _selectValue14.length;
	                        break _M$VISITOR;
	                      } else if (_attrSelector20.operator == '*=') {
	                        _m$visitor55 = _m$attrValue14.indexOf(_selectValue14) != -1;
	                        break _M$VISITOR;
	                      } else {
	                        _m$visitor55 = _m$attrValue14 != undefined || _m$node19.hasOwnProperty(_attrSelector20.ident);
	                        break _M$VISITOR;
	                      }
	                    }_m$visitor55 = false;
	                  }
	
	                  if (!_m$visitor55) {
	                    _m$result46 = false;break;
	                  }_m$i45++;
	                }_every40 = _m$result46;
	                _isMatchAttrSelector19 = _every40;
	                break _IS_MATCH_ATTR_SELECTOR;
	              } else {
	                _isMatchAttrSelector19 = false;
	                break _IS_MATCH_ATTR_SELECTOR;
	              }
	            }_isMatchAttrSelector19 = true;
	          }
	
	          var _m$pseudoClasses19 = compound.pseudoClasses;
	
	          var _isMatchPseudoClass19 = void 0;
	
	          _IS_MATCH_PSEUDO_CLASS: {
	            var _pseudoClassMethod13, _pseudoClassArgs13;if (_m$pseudoClasses19) {
	              var _every41 = void 0;
	
	              var _m$result47 = true;var _m$i46 = 0,
	                  _m$I46 = _m$pseudoClasses19.length;while (_m$i46 < _m$I46) {
	                var _pseudoClass20 = _m$pseudoClasses19[_m$i46];
	
	                var _m$visitor56 = void 0;
	
	                _pseudoClassMethod13 = _PseudoClass2.default[_pseudoClass20.ident] || option.pseudoClasses[_pseudoClass20.ident];_pseudoClassArgs13 = [_m$tmpNodeInfo5];if (_pseudoClass20.args) _pseudoClassArgs13 = _pseudoClassArgs13.concat(_pseudoClass20.args);_m$visitor56 = _pseudoClassMethod13.apply(undefined, _pseudoClassArgs13);
	                if (!_m$visitor56) {
	                  _m$result47 = false;break;
	                }_m$i46++;
	              }_every41 = _m$result47;
	              _isMatchPseudoClass19 = _every41;
	              break _IS_MATCH_PSEUDO_CLASS;
	            }_isMatchPseudoClass19 = true;
	          }
	
	          _isMatchAllSelector18 = _isMatchPropSelector19 && _isMatchAttrSelector19 && _isMatchPseudoClass19;
	
	          if (_isMatchAllSelector18) {
	            var _m$combinator18 = compound.next;
	
	            var _fetchNextSelector18 = void 0;
	
	            _FETCH_NEXT_SELECTOR6: {
	              if (_m$combinator18) {
	                if (_typeof(_m$tmpNodeInfo5.node) === 'object' || _m$combinator18.operator == '~') {
	                  _fetchNextSelector18 = findMatchNode(_m$combinator18, _m$tmpNodeInfo5, option);
	                  break _FETCH_NEXT_SELECTOR6;
	                }
	              } else {
	                _fetchNextSelector18 = [_m$tmpNodeInfo5];
	                break _FETCH_NEXT_SELECTOR6;
	              }
	            }
	
	            Array.prototype.push.apply(result, _fetchNextSelector18);
	          }
	        }
	        _m$visitor54;
	      }if (_typeof(_m$tmpNodeInfo5.node) == 'object' && _m$tmpNodeInfo5.path.length < _m$endDepth4) {
	        for (_m$key5 in _m$tmpNodeInfo5.node) {
	          _m$newNode5 = _m$tmpNodeInfo5.node[_m$key5];if (_m$tmpNodeInfo5.parent.indexOf(_m$newNode5) == -1) {
	            _m$buffer5.push(_m$tmpNodeInfo5.getChild(_m$key5));
	          }
	        }
	      }
	    }_breadthFirstTraversal6;
	  }
	
	  return result;
	}
	
	var Selector = function () {
	  function Selector(root, option) {
	    _classCallCheck(this, Selector);
	
	    this.root = root;
	    this.option = option;
	    if (_typeof(this.option) !== 'object') {
	      this.option = { pseudoClasses: {} };
	    } else if (_typeof(this.option.pseudoClasses) !== 'object') {
	      this.option.pseudoClasses = {};
	    }
	  }
	
	  _createClass(Selector, [{
	    key: 'selectOne',
	    value: function selectOne(input) {
	      var self = this;
	      var result;
	      var cssRules = _cssParser2.default.parse(input);
	
	      var _some = void 0;
	
	      var _m$result31 = false;
	
	      var _m$i29 = 0,
	          _m$I29 = cssRules.length;
	      while (_m$i29 < _m$I29) {
	        var _m$visitor57 = void 0;
	
	        _m$visitor57 = result = findFirstMatchNode(cssRules[_m$i29].start, new _NodeInfo2.default(self.root), self.option);
	
	        if (_m$visitor57) {
	          _m$result31 = true;
	          break;
	        }
	
	        _m$i29++;
	      }
	
	      _some = _m$result31;
	      _some;
	      return result;
	    }
	  }, {
	    key: 'selectAll',
	    value: function selectAll(input) {
	      var self = this;
	      var result;
	      var cssRules = _cssParser2.default.parse(input);
	      var rootNodeInfo = new _NodeInfo2.default(self.root);
	      var _m$initialValue = [];
	
	      var _reduceByInitval = void 0;
	
	      var _m$result34 = _m$initialValue;
	
	      var _m$i33 = 0,
	          _m$I33 = cssRules.length;
	      while (_m$i33 < _m$I33) {
	        var _m$visitor58 = void 0;
	
	        _m$visitor58 = _m$result34.concat(findMatchNode(cssRules[_m$i33].start, rootNodeInfo, self.option));
	
	        _m$result34 = _m$visitor58;
	        _m$i33++;
	      }
	
	      _reduceByInitval = _m$result34;
	      var _m$input = _reduceByInitval;
	
	      var _filter = void 0;
	
	      var _m$filtered = [];
	
	      var _m$i32 = 0,
	          _m$I32 = _m$input.length,
	          _m$val = void 0;
	      while (_m$i32 < _m$I32) {
	        _m$val = _m$input[_m$i32];
	
	        var _m$visitor59 = void 0;
	
	        _M$VISITOR10: {
	          for (var _i2 = 0, _testNodeInfo2; _i2 < _m$i32; _i2++) {
	            _testNodeInfo2 = _m$input[_i2];
	            if (_m$val.node === _testNodeInfo2.node) {
	              var _m$array5 = _m$val.path;
	              var _m$array6 = _testNodeInfo2.path;
	
	              var _compareTwoArray3 = void 0;
	
	              var _m$result48 = true;
	
	              if (_m$array5.length == _m$array6.length) {
	                var _m$i31 = 0,
	                    _m$I31 = _m$array5.length;
	                while (_m$i31 < _m$I31) {
	                  if (_m$array5[_m$i31] !== _m$array6[_m$i31]) {
	                    _m$result48 = false;
	                    break;
	                  }
	
	                  _m$i31++;
	                }
	              } else {
	                _m$result48 = false;
	              }
	
	              _compareTwoArray3 = _m$result48;
	
	              if (_compareTwoArray3) {
	                _m$visitor59 = false;
	                break _M$VISITOR10;
	              }
	            }
	          }
	
	          _m$visitor59 = true;
	        }
	
	        if (_m$visitor59) {
	          _m$filtered.push(_m$val);
	        }
	
	        _m$i32++;
	      }
	
	      _filter = _m$filtered;
	      return _filter;
	    }
	  }, {
	    key: 'getByPath',
	    value: function getByPath(path) {
	      var delimiter = arguments.length <= 1 || arguments[1] === undefined ? '/' : arguments[1];
	
	      if (path.charAt(0) == delimiter) {
	        path = path.substr(1);
	      }
	
	      var result = new _NodeInfo2.default(this.root);
	      var path = path.split(delimiter);
	
	      var _every29 = void 0;
	
	      var _m$result35 = true;var _m$i34 = 0,
	          _m$I34 = path.length;while (_m$i34 < _m$I34) {
	        if (!(result.moveToChild(path[_m$i34]).node != null)) {
	          _m$result35 = false;break;
	        }_m$i34++;
	      }_every29 = _m$result35;
	      _every29;
	      return result;
	    }
	  }]);
	
	  return Selector;
	}();
	
	exports.default = Selector;
	;

/***/ },
/* 49 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var PseudoClass = function () {
	  function PseudoClass() {
	    _classCallCheck(this, PseudoClass);
	  }
	
	  _createClass(PseudoClass, null, [{
	    key: "regexpTest",
	    value: function regexpTest(nodeInfo, val) {
	      return val.test(nodeInfo.node);
	    }
	  }, {
	    key: "equal",
	    value: function equal(nodeInfo, val) {
	      return nodeInfo.node === val;
	    }
	  }, {
	    key: "typeof",
	    value: function _typeof(nodeInfo, val) {
	      return _typeof2(nodeInfo.node) === val;
	    }
	  }]);
	
	  return PseudoClass;
	}();
	
	exports.default = PseudoClass;

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = [
		{
			"ID": 1
		},
		{
			"Id": 2
		},
		{
			"id": 3
		}
	];

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Selector = __webpack_require__(48);
	
	var _Selector2 = _interopRequireDefault(_Selector);
	
	var _util = __webpack_require__(45);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function c3s(root, option) {
	  return new _Selector2.default(root, option);
	};
	
	c3s.getFromPath = _util.getFromPath;
	
	exports.default = c3s;

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = [
		[
			[
				1,
				2,
				3
			],
			[
				4,
				5,
				6
			],
			[
				7,
				8,
				9
			],
			[
				[
					1,
					22,
					3
				],
				[
					4,
					5,
					6
				],
				[
					7,
					8,
					9
				],
				[
					[
						[
							1,
							2,
							3
						],
						[
							4,
							5,
							6
						],
						[
							7,
							8,
							9
						]
					]
				],
				{
					"value": "New",
					"onclick": "CreateNewDoc()",
					"menuitem2": [
						{
							"value": "New2_1",
							"onclick": "CreateNewDoc2_1()"
						},
						{
							"value": "Open2_1",
							"onclick": "OpenDoc2_1()"
						},
						{
							"value": "Close2_1",
							"onclick": "CloseDoc2_1()"
						}
					]
				}
			],
			[
				1,
				2,
				[
					3,
					4,
					5
				],
				6
			]
		],
		[
			[],
			[
				null,
				null
			],
			[],
			[
				null,
				false
			],
			[
				0,
				0,
				0,
				0,
				0,
				101
			],
			0
		],
		[
			[
				1,
				2,
				3
			],
			[
				4,
				5,
				6
			],
			[
				7,
				8,
				9
			],
			[
				[
					1,
					2,
					3
				],
				[
					4,
					5,
					6
				],
				[
					7,
					8,
					9
				],
				[
					[
						[
							1,
							2,
							3
						],
						[
							4,
							5555,
							6
						],
						[
							7,
							8,
							9
						]
					]
				]
			],
			[
				1,
				2,
				[
					3,
					433,
					5
				],
				6
			]
		],
		[
			[
				1,
				2,
				3
			],
			0,
			[
				7,
				8,
				9
			],
			[
				1,
				2,
				[
					3,
					4,
					5555
				],
				6
			],
			[
				[
					1,
					2,
					3
				],
				[
					4,
					5,
					6
				],
				[
					4,
					5,
					6
				],
				[
					7,
					8,
					9
				],
				[
					[
						1,
						2,
						3
					],
					[
						4,
						5,
						6,
						{
							"value": "Close2_3",
							"onclick": "CloseDoc2_3()"
						}
					],
					[
						7,
						8,
						9
					],
					[
						[
							1,
							2,
							3
						],
						[
							4,
							5,
							6
						],
						[
							4,
							5,
							6666
						],
						[
							7,
							8,
							9
						]
					]
				]
			]
		],
		[
			[
				[
					1,
					2,
					3,
					{
						"value": "Close2_3",
						"onclick": "CloseDoc2_3()"
					}
				],
				[
					4,
					5,
					6
				],
				[
					7,
					8,
					9,
					{
						"value": "Close2_3",
						"onclick": "CloseDoc2_3()"
					}
				]
			],
			[
				1,
				2,
				3
			],
			[
				4,
				5,
				6000
			],
			[
				7,
				8,
				9
			],
			[
				1,
				2,
				[
					3,
					4,
					5,
					{
						"value": "Open",
						"onclick": "OpenDoc()",
						"menuitem2": [
							{
								"value": "New2_2",
								"onclick": "CreateNewDoc2_2()"
							},
							{
								"value": "Open2_2",
								"onclick": "OpenDoc2_2()"
							},
							{
								"value": "Close2_2",
								"onclick": "CloseDoc2_2()"
							}
						]
					}
				],
				6,
				[
					[
						[
							1,
							2,
							3
						],
						[
							4,
							5,
							6
						],
						[
							7,
							8,
							9000
						]
					],
					{
						"menu": {
							"id": "file",
							"value": "File",
							"popup": {
								"menuitem": [
									{
										"value": "New",
										"onclick": "CreateNewDoc()",
										"menuitem2": [
											{
												"value": "New2_1",
												"onclick": "CreateNewDoc2_1()"
											},
											{
												"value": "Open2_1",
												"onclick": "OpenDoc2_1()"
											},
											{
												"value": "Close2_1",
												"onclick": "CloseDoc2_1()"
											}
										]
									},
									{
										"value": "Open",
										"onclick": "OpenDoc()",
										"menuitem2": [
											{
												"value": "New2_2",
												"onclick": "CreateNewDoc2_2()"
											},
											{
												"value": "Open2_2",
												"onclick": "OpenDoc2_2()"
											},
											{
												"value": "Close2_2",
												"onclick": "CloseDoc2_2()"
											}
										]
									},
									{
										"value": "Close",
										"onclick": "CloseDoc()",
										"menuitem2": [
											{
												"value": "New2_3",
												"onclick": "CreateNewDoc2_3()"
											},
											{
												"value": "Open2_3",
												"onclick": "OpenDoc2_3()"
											},
											{
												"value": "Close2_3",
												"onclick": "CloseDoc2_3()"
											}
										]
									}
								]
							}
						}
					}
				]
			]
		],
		5,
		1000
	];

/***/ }
/******/ ]);
//# sourceMappingURL=c3s-parser.test.js.map