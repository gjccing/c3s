import './css-parser.pegjs.test.js';
import './traversal.macro.js';
import './util.js';
import './Selector.js';
import c3s from '../src/main.js';
import {assert} from 'chai';

// 隨便寫的 刪掉有點可惜 並非完全沒用
describe('c3s', function() {
  var data1 = require('./data/testData1.json');
  var data2 = require('./data/testData2.json');
  [
    {
      input: '[value="New"]',
      expect: {
        path: 'menu,popup,menuitem,0',
        value:data1.menu.popup.menuitem[0],
        desc: 'menu Object'
      }
    },
    {
      input: 'value',
      expect: {
        path: 'menu,value', 
        value:'File'
      }
    },
    {
      input: 'value abc',
      expect: {
        value:undefined
      }
    },
    {
      input: 'popup value',
      expect: {
        path: 'menu,popup,menuitem,0,value', 
        value:'New'
      }
    },
    {
      input: 'popup>value',
      expect: {
        value:undefined
      }
    },
    {
      input: 'menuitem>value',
      expect: {
        value:undefined
      }
    },
    {
      input: '#file',
      expect: {
        path: 'menu',
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: '#"file"',
      expect: {
        path: 'menu',
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: '#300',
      expect: {
        path: 'menu,popup,menuitem,0',
        value:data1.menu.popup.menuitem[0],
        desc: 'menu Object'
      }
    },
    {
      input: '.Object',
      expect: {
        path: 'menu',
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: '.Array',
      expect: {
        path: 'menu,popup,menuitem',
        value:data1.menu.popup.menuitem,
        desc: 'menu Object'
      }
    },
    {
      input: '>menu',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'popup>value, >menu',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'popup>menuitem menuitem2 value',
      expect: {
        path: 'menu,popup,menuitem,0,menuitem2,0,value', 
        value:'New2_1'
      }
    },
    {
      input: '>menu>popup>menuitem>value',
      expect: {
        value:undefined
      }
    },
    {
      input: ':equal("CreateNewDoc()")',
      expect: {
        path: 'menu,popup,menuitem,0,onclick', 
        value:'CreateNewDoc()'
      }
    },
    {
      input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
      expect: {
        path: 'menu,popup,menuitem,2,menuitem2,2,onclick', 
        value:'CloseDoc2_3()'
      }
    },
    {
      input: 'menu[value]',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'menu[value="File"]',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'menu[value^="Fi"]',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'menu[value$="le"]',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'menu[value*="il"]',
      expect: {
        path: 'menu', 
        value:data1.menu,
        desc: 'menu Object'
      }
    },
    {
      input: 'id ~ value',
      expect: {
        path: 'menu,value', 
        value:data1.menu.value
      }
    }
  ].forEach(function (testCase) {
    it(`should return ${testCase.expect.desc||testCase.expect.value} when the select is ${testCase.input}`, function () {
      var result = c3s(data1, {}).selectOne(testCase.input);
      if (result) {
        assert.equal(result.node, testCase.expect.value);
        assert.equal(result.path.toString(), testCase.expect.path);
      } else {
        assert.equal(result, testCase.expect.value);
      }
    });
  });

  [
    { 
      input: '>"0">"0">"0"',
      expect: '0,0,0'
    },
    { 
      input: '>"4">"4">"4">"1">"menu">"popup">"menuitem">"0">"menuitem2">"0">"value"',
      expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
    },
    { 
      input: '>"4">"4">"4">"1" "popup">"menuitem">"0" "0">"value"',
      expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
    },
    { 
      input: '"4">"4">"4">"1">"menu" "menuitem">"0">"menuitem2" "value"',
      expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
    },
    { 
      input: ':equal(5555)',
      expect: '2,3,3,0,1,1'
    },
    { 
      input: ':equal(6666)',
      expect: '3,4,4,3,2,2'
    },
    { 
      input: ':equal(9000)',
      expect: '4,4,4,0,2,2'
    },
    { 
      input: ':equal(22)',
      expect: '0,3,0,1'
    },
    { 
      input: '>:equal(1000)',
      expect: '6'
    },
    { 
      input: 'popup value',
      expect: '4,4,4,1,menu,popup,menuitem,0,value'
    },
    { 
      input: 'popup>value',
      expect: undefined
    },
    { 
      input: ':equal("CreateNewDoc()")',
      expect: '0,3,4,onclick'
    },
    { 
      input: ':equal("CreateNewDoc2_1()")',
      expect: '0,3,4,menuitem2,0,onclick'
    },
    { 
      input: 'popup>menuitem menuitem2 value',
      expect: '4,4,4,1,menu,popup,menuitem,0,menuitem2,0,value'
    },
    { 
      input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
      expect: '4,4,4,1,menu,popup,menuitem,2,menuitem2,2,onclick'
    },
  ].forEach(function (testCase) {
    it(`should return ${testCase.expect} when the select is ${testCase.input}`, function () {
      var result = c3s(data2, {}).selectOne(testCase.input);
      if (result) {
        assert.equal(result.path.toString(), testCase.expect);
      } else {
        assert.equal(result, testCase.expect);
      }
    });
  });
  [
    { 
      input: 'value',
      expect: 13
    },
    { 
      input: 'popup value',
      expect: 12
    },
    { 
      input: 'popup>value',
      expect: 0
    },
    { 
      input: 'menuitem2 value',
      expect: 9
    },
    { 
      input: '#file',
      expect: 1
    },
    { 
      input: 'menu',
      expect: 1
    },
    { 
      input: '>menu',
      expect: 1
    },
    { 
      input: 'popup value, >menu',
      expect: 13
    },
    { 
      input: ':equal("CreateNewDoc()")',
      expect: 1
    },
    { 
      input: ':equal("CreateNewDoc2_1()")',
      expect: 1
    },
    { 
      input: 'popup>menuitem menuitem2 value',
      expect: 9
    },
    { 
      input: 'popup>menuitem menuitem2 onclick:equal("CloseDoc2_3()")',
      expect: 1
    },
    { 
      input: ':regexpTest(/2_/)',
      expect: 18
    },
    { 
      input: ':regexpTest(/2_/), :regexpTest(/2_/)',
      expect: 18
    },
    { 
      input: '"0", "1"',
      expect: 8
    },
    {
      input: 'menuitem > "0" ~ *',
      expect: 2
    }
  ].forEach(function (testCase) {
    it(`should return ${testCase.expectStr||JSON.stringify(testCase.expect)} when the select is ${JSON.stringify(testCase.input)}`, function () {
      var result = c3s(data1).selectAll(testCase.input);
      assert.equal(result.length, testCase.expect);
    });
  });
  [
    { 
      input: '>"0">"0">"0"',
      expect: 1
    },
    { 
      input: '"4">"4">"4">"1">"menu">"popup">"menuitem">"0">"menuitem2">"0">"value"',
      expect: 1
    },
    { 
      input: '"4">"4">"4">"1">"menu" "menuitem">"0">"menuitem2" "value"',
      expect: 3
    },
    { 
      input: ':equal(5555)',
      expect: 2
    },
    { 
      input: ':equal(22)',
      expect: 1
    },
    { 
      input: ':equal(1), :equal(5)',
      expect: 34
    },
    { 
      input: 'popup value',
      expect: 12
    },
    { 
      input: 'popup>value',
      expect: 0
    },
    { 
      input: ':equal("CreateNewDoc()")',
      expect: 2
    },
    { 
      input: ':equal("CreateNewDoc2_1()")',
      expect: 2
    },
    { 
      input: 'popup>menuitem menuitem2 value',
      expect: 9
    },
    { 
      input: ':regexpTest(/2_/)',
      expect: 36
    },
  ].forEach(function (testCase) {
    it(`should return ${testCase.expectStr||JSON.stringify(testCase.expect)} when the select is ${JSON.stringify(testCase.input)}`, function () {
      var result = c3s(data2).selectAll(testCase.input);
      assert.equal(result.length, testCase.expect);
    });
  });
  [
    {
      input: {
        select: ':gt(2000)',
        option : {
          pseudoClasses: {
            gt: function (nodeInfo, v2) {
              return nodeInfo.node > v2;
            }
          }
        }
      },
      expect: 5
    },
    {
      input: {
        select: ':lt(1)',
        option : {
          pseudoClasses: {
            lt: function (nodeInfo, v2) {
              return nodeInfo.node < v2;
            }
          }
        }
      },
      expect: 13
    }
  ].forEach(function (testCase) {
    it(`should return ${testCase.expect} when the select is ${JSON.stringify(testCase.input.select)}`, function () {
      var result = c3s(data2, testCase.input.option)
        .selectAll(testCase.input.select);
      assert.equal(result.length, testCase.expect);
    });
  });
});
