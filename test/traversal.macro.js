import macro from '../src/traversal.macro.js';
import {assert} from 'chai';

describe('traversal', function() {

  describe('BREADTH_FIRST_TRAVERSAL', function () {
    var data = require('./data/testData3.json');
    data.a = data;
    data.menu.popup.menuitem.a = data.menu;
    [
      { 
        input: {
          target: data,
          depth: undefined
        },
        expect: 46
      },
      { 
        input: {
          target: data.menu.id,
          depth: undefined
        },
        expect: 1
      },
      { 
        input: {
          target: data.menu.popup.menuitem[0],
          depth: undefined
        },
        expect: 13
      },
      { 
        input: {
          target: data.menu.popup.menuitem[0],
          depth: 1
        },
        expect: 3
      }
    ].forEach(function (testCase) {
      it(`should traverse over ${testCase.expect} node`, function () {
        var result = 0;

        BREADTH_FIRST_TRAVERSAL(testCase.input.target, testCase.input.depth, testCase.input.depth, (val, path, parent)=>{
          result++;
        });

        assert.strictEqual(result, testCase.expect);
      });
    });
  });

  describe('BREADTH_FIRST_SEARCH', function () {
    var data = require('./data/testData3.json');
    data.a = data;
    data.menu.popup.menuitem.a = data.menu;
    [
      { 
        input: {
          target: data,
          depth: undefined
        },
        targetVal: 'CreateNewDoc()',
        expect: 1
      },
      { 
        input: {
          target: data.menu.id,
          depth: undefined
        },
        targetVal: 'CreateNewDoc',
        expect: 1
      },
      { 
        input: {
          target: data.menu.popup.menuitem[0],
          depth: undefined
        },
        targetVal: 'New2_1',
        expect: 1
      },
      { 
        input: {
          target: data,
          depth: 1
        },
        targetVal: 'CreateNewDoc()',
        expect: 1
      }
    ].forEach(function (testCase) {
      it(`should traverse over ${testCase.expect} node`, function () {
        var result = 0;

        var returnval = BREADTH_FIRST_SEARCH(testCase.input.target, testCase.input.depth, testCase.input.depth, (val, path, parent) => {
          result++;
          return val==testCase.targetVal;
        });

        assert.strictEqual(result, testCase.expect);
      });
    });
  });

  describe('DEPTH_FIRST_TRAVERSAL', function () {
    var data = require('./data/testData3.json');
    data.a = data;
    data.menu.popup.menuitem.a = data.menu;
    [
      { 
        input: data,
        expect: 46
      },
      { 
        input: data.menu.popup.menuitem,
        expect: 45
      },
      { 
        input: data.menu.id,
        expect: 1
      },
      { 
        input: data.menu.popup.menuitem[0],
        expect: 13
      }
    ].forEach(function (testCase) {
      it(`should traverse over ${testCase.expect} node`, function () {
        var result = 0;

        DEPTH_FIRST_TRAVERSAL(testCase.input, undefined, undefined, (val, path, parent)=>{
          result++;
        });

        assert.strictEqual(result, testCase.expect);
      });
    });
  });

  describe('DEPTH_FIRST_SEARCH', function () {
    var data = require('./data/testData3.json');
    data.a = data;
    data.menu.popup.menuitem.a = data.menu;
    [
      { 
        input: data,
        targetVal: 'CreateNewDoc()',
        expect: 10
      },
      { 
        input: data.menu.popup.menuitem,
        targetVal: 'OpenDoc()',
        expect: 17
      },
      { 
        input: data.menu.id,
        targetVal: 'CreateNewDoc',
        expect: 1
      },
      { 
        input: data.menu.popup.menuitem[0],
        targetVal: 'New2_1',
        expect: 6
      }
    ].forEach(function (testCase) {
      it(`should traverse over ${testCase.expect} node`, function () {
        var result = 0;

        var returnval = DEPTH_FIRST_SEARCH(testCase.input, undefined, undefined, (val, path, parent) => {
          result++;
          return val==testCase.targetVal;
        });
        
        assert.strictEqual(result, testCase.expect);
      });
    });
  });

});
