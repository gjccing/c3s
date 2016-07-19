import {getFromPath, getFromPathArray, listStruct} from '../src/util.js';
import {assert} from 'chai';

describe('traversal', function() {
  var data = require('./data/testData1.json');
  describe('getFromPath', function () {
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
    [
      { 
        input:{
          name: 'data',
          args: [data]
        },
        expect: 47
      },
      { 
        input:{
          name: 'data',
          args: [data, 'bfs']
        },
        expect: 47
      },
      { 
        input:{
          name: 'data',
          args: [data, 'dfs']
        },
        expect: 47
      },
      { 
        input:{
          name: 'undefined',
          args: [undefined]
        },
        expect: 1
      }
    ].forEach(function (testCase) {
      it(`should return ${testCase.expect} when the path is ${testCase.input.name}`, function () {
        var result = listStruct.apply(this, testCase.input.args);
        assert.equal(result.length, testCase.expect);
      });
    });
  });
});
