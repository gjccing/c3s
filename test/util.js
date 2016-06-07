import {getFromPath, getFromPathArray, listStruct} from '../src/util.js';
import {assert} from 'chai';

describe('traversal', function() {

  describe('getFromPath', function () {
    var data = require('./data/testData1.json');
    [
      { 
        input: '/menu/id',
        expect: 'file'
      },
      { 
        input: 'menu/popup/menuitem/1/value',
        expect: 'Open'
      },
      { 
        input: '/menu/popup/menuitem/3',
        expect: undefined
      },
      { 
        input: '/menu/test',
        expect: null
      }
    ].forEach(function (testCase) {
      it(`should return ${testCase.expect} when the path is ${testCase.input}`, function () {
        var result = getFromPath(data, testCase.input);
        assert.strictEqual(result, testCase.expect);
      });
    });
  });

  describe('getFromPathArray', function () {
    var data = require('./data/testData1.json');
    [
      { 
        input: ['menu','id'],
        expect: 'file'
      },
      { 
        input: ['menu','popup','menuitem','1','value'],
        expect: 'Open'
      },
      { 
        input: ['menu','popup','menuitem','3'],
        expect: undefined
      },
      { 
        input: ['menu','test'],
        expect: null
      }
    ].forEach(function (testCase) {
      it(`should return ${testCase.expect} when the path is ${JSON.stringify(testCase.input)}`, function () {
        var result = getFromPathArray(data, testCase.input);
        assert.strictEqual(result, testCase.expect);
      });
    });
  });
  
  describe('listStruct', function () {
    var data = require('./data/testData1.json');
    [
      { 
        input:{
          name: 'data',
          args: [data]
        },
        expect: 46
      },
      { 
        input:{
          name: 'data.menu.popup.menuitem',
          args: [data.menu.popup.menuitem, 'bfs', 1]
        },
        expect: 3
      },
      { 
        input:{
          name: 'data.menu.popup.menuitem',
          args: [data.menu.popup.menuitem, 'dfs']
        },
        expect: 40
      },
      { 
        input:{
          name: 'data.xxxx',
          args: [data.xxxx]
        },
        expect: 1
      }
    ].forEach(function (testCase) {
      it(`should return ${testCase.expect} when the path is ${testCase.input.name}`, function () {
        var result = listStruct.apply(this, testCase.input.args);
        assert.strictEqual(result.length, testCase.expect);
      });
    });
  });

});
