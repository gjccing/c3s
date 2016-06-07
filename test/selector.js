import Selector from '../src/selector.js';
import {assert} from 'chai';

describe('Selector', function() {

  describe('constructor', function () {
    it(`new Selector with testData1`, function () {
      var data1 = require('./data/testData1.json');
      var result = new Selector(data1, {});
      assert.deepEqual(result.__root__, data1);
    });
    it(`new Selector with testData2`, function () {
      var data2 = require('./data/testData2.json');
      var result = new Selector(data2, {});
      assert.deepEqual(result.__root__, data2);
    });
  });

  describe('selectOne', function () {
    describe('Complex Object', function () {
      var data = require('./data/testData1.json');
      [
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
            value:data.menu,
            desc: 'menu Object'
          }
        },
        {
          input: 'menu',
          expect: {
            path: 'menu', 
            value:data.menu,
            desc: 'menu Object'
          }
        },
        {
          input: '>menu',
          expect: {
            path: 'menu', 
            value:data.menu,
            desc: 'menu Object'
          }
        },
        {
          input: 'popup>value, >menu',
          expect: {
            path: 'menu', 
            value:data.menu,
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
        }
      ].forEach(function (testCase) {
        it(`should return ${testCase.expect.desc||testCase.expect.value} when the select is ${testCase.input}`, function () {
          var result = new Selector(data, {}).selectOne(testCase.input);
          if (result[0]) {
            assert.equal(result[0].value, testCase.expect.value);
            assert.equal(result[0].path.toString(), testCase.expect.path);
          } else {
            assert.equal(result[0], testCase.expect.value);
          }
        });
      });
    });
    describe('Multdimensionalz Array', function () {
      var data = require('./data/testData2.json');
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
          var result = new Selector(data, {}).selectOne(testCase.input);
          if (result[0]) {
            assert.equal(result[0].path.toString(), testCase.expect);
          } else {
            assert.equal(result[0], testCase.expect);
          }
        });
      });
    });
  });

  describe('selectAll', function () {
    describe('Complex Object', function () {
      var data = require('./data/testData1.json');
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
        }
      ].forEach(function (testCase) {
        it(`should return ${testCase.expectStr||JSON.stringify(testCase.expect)} when the select is ${JSON.stringify(testCase.input)}`, function () {
          var result = new Selector(data).selectAll(testCase.input);
          assert.equal(result.length, testCase.expect);
        });
      });
    });
    describe('Multdimensional Array', function () {
      var data = require('./data/testData2.json');
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
          var result = new Selector(data).selectAll(testCase.input);
          assert.equal(result.length, testCase.expect);
        });
      });
    });
  });

  describe('pseudoClass', function () {
    describe('defined', function () {
      var data = require('./data/testData2.json');
      [
        {
          input: {
            select: ':gt(2000)',
            option : {
              pseudoClass: {
                gt: function (v1, path, parent, v2) {
                  return v1 > v2;
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
              pseudoClass: {
                lt: function (v1, path, parent, v2) {
                  return v1 < v2;
                }
              }
            }
          },
          expect: 13
        }
      ].forEach(function (testCase) {
        it(`should return ${testCase.expect} when the select is ${JSON.stringify(testCase.input.select)}`, function () {
          var result = new Selector(data, testCase.input.option)
          result = result.selectAll(testCase.input.select);
          assert.equal(result.length, testCase.expect);
        });
      });
    });

    describe('link', function () {
      var data = require('./data/testData2.json');
      [
        {
          input: {
            select: [
                ':gt(2000)',
                ':lt(6000)'
            ],
            option : {
              pseudoClass: {
                gt: function (v1, path, parent, v2) {
                  return v1 > v2;
                },
                lt: function (v1, path, parent, v2) {
                  return v1 < v2;
                }
              }
            }
          },
          expect: 2
        }
      ].forEach(function (testCase) {
        it(`should return ${testCase.expect} when the select is ${JSON.stringify(testCase.input.select)}`, function () {
          var result = new Selector(data, testCase.input.option);
          result = result.selectAll(testCase.input.select[0])
          result = result.selectAll(testCase.input.select[1]);
          assert.equal(result.length, testCase.expect);
        });
      });
    });
  });

  describe('getFromPath', function () {
    var data = require('./data/testData1.json');
    it(`should get 2 node when the select '"0", "1"' and get path 'menuitem2 0'`, function () {
      var result = new Selector(data)
        .selectAll('"0", "1"')
        .getFromPath('/menuitem2/0');
      assert.equal(result.length, 2);
      assert.equal(result[0].path.length, 6);
      assert.equal(result[1].path.length, 6);
    });
  });

  describe('resetRoot', function () {
    var data = require('./data/testData1.json');
    it(`should reset root property`, function () {
      var result = new Selector(data).selectAll('"0", "1"').resetRoot();
      assert.equal(result.__root__, result.__data__);
      assert(result.every((rec)=>rec.path.length == 0 && rec.root == result.__data__));
    });
  });
  
});
