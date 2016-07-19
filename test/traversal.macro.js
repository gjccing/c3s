import macro from '../src/traversal.macro.js';

import NodeInfo from '../src/NodeInfo.js';
import {assert} from 'chai';

var data = require('./data/testData3.json');
describe('traversal', function() {
  describe('BREADTH_FIRST_TRAVERSAL', function () {
    it(`check each nodeInfo.node`, function () {
      var expectVals = [
        `"g"`,
        `null`,
        `[]`,
        `{"g":"g"}`,
        `"f"`,
        `"e"`,
        `null`,
        `["f",{"g":"g"},[],null]`,
        `{"e":"e"}`,
        `"a"`,
        `{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}`
      ];
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.node), expectVals.pop());
      });
    });
    it(`check each nodeInfo.path`, function () {
      var expectVals = [
        `["c","1","g"]`,
        `["c","3"]`,
        `["c","2"]`,
        `["c","1"]`,
        `["c","0"]`,
        `["b","e"]`,
        `["d"]`,
        `["c"]`,
        `["b"]`,
        `["a"]`,
        `[]`
      ];
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.path), expectVals.pop());
      });
    });
    it(`check each nodeInfo.parent`, function () {
      var expectVals = [
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[]`
      ];
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.parent), expectVals.pop());
      });
    });
    it(`check each nodeInfo.root`, function () {
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.strictEqual(nodeInfo.root, data);
      });
    });
    it(`check m$startDepth`, function () {
      var count = 0;
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 2, Infinity,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 6);
    });
    it(`check m$endDepth`, function () {
      var count = 0;
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(data), 2, 2,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 5);
    });
    it(`break circle`, function () {
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(JSON.parse(JSON.stringify(data))), 0, Infinity, ()=>{});
      assert(true);
    });
  });
  describe('BREADTH_FIRST_SEARCH', function () {
    it(`check each nodeInfo.node`, function () {
      var expectVals = [
        `"g"`,
        `null`,
        `[]`,
        `{"g":"g"}`,
        `"f"`,
        `"e"`,
        `null`,
        `["f",{"g":"g"},[],null]`,
        `{"e":"e"}`,
        `"a"`,
        `{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}`
      ];
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.node), expectVals.pop());
      });
    });
    it(`check each nodeInfo.path`, function () {
      var expectVals = [
        `["c","1","g"]`,
        `["c","3"]`,
        `["c","2"]`,
        `["c","1"]`,
        `["c","0"]`,
        `["b","e"]`,
        `["d"]`,
        `["c"]`,
        `["b"]`,
        `["a"]`,
        `[]`
      ];
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.path), expectVals.pop());
      });
    });
    it(`check each nodeInfo.parent`, function () {
      var expectVals = [
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[]`
      ];
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.parent), expectVals.pop());
      });
    });
    it(`check each nodeInfo.root`, function () {
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.strictEqual(nodeInfo.root, data);
      });
    });
    it(`check m$startDepth`, function () {
      var count = 0;
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 2, Infinity,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 6);
    });
    it(`check m$endDepth`, function () {
      var count = 0;
      BREADTH_FIRST_SEARCH(new NodeInfo(data), 2, 2,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 5);
    });
    it(`check return`, function () {
      var count = 0;
      var result = BREADTH_FIRST_SEARCH(new NodeInfo(data), 2, 2,(nodeInfo)=>{
        count++;
        return count == 3;
      });
      assert.equal(JSON.stringify(result.node), `{"g":"g"}`);
      assert.equal(JSON.stringify(result.path), `["c","1"]`);
      assert.equal(JSON.stringify(result.parent), `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`);
      assert.strictEqual(result.root, data);
    });
    it(`break circle`, function () {
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(JSON.parse(JSON.stringify(data))), 0, Infinity, ()=>{});
      assert(true);
    });
  });
  describe('DEPTH_FIRST_TRAVERSAL', function () {
    it(`check each nodeInfo.node`, function () {
      var expectVals = [
        `null`,
        `null`,
        `[]`,
        `"g"`,
        `{"g":"g"}`,
        `"f"`,
        `["f",{"g":"g"},[],null]`,
        `"e"`,
        `{"e":"e"}`,
        `"a"`,
        `{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}`
      ];
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.node), expectVals.pop());
      });
    });
    it(`check each nodeInfo.path`, function () {
      var expectVals = [
        `["d"]`,
        `["c","3"]`,
        `["c","2"]`,
        `["c","1","g"]`,
        `["c","1"]`,
        `["c","0"]`,
        `["c"]`,
        `["b","e"]`,
        `["b"]`,
        `["a"]`,
        `[]`
      ];
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.path), expectVals.pop());
      });
    });
    it(`check each nodeInfo.parent`, function () {
      var expectVals = [
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[]`
      ];
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.parent), expectVals.pop());
      });
    });
    it(`check each nodeInfo.root`, function () {
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.strictEqual(nodeInfo.root, data);
      });
    });
    it(`check m$startDepth`, function () {
      var count = 0;
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 2, Infinity,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 6);
    });
    it(`check m$endDepth`, function () {
      var count = 0;
      DEPTH_FIRST_TRAVERSAL(new NodeInfo(data), 2, 2,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 5);
    });
    it(`break circle`, function () {
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(JSON.parse(JSON.stringify(data))), 0, Infinity, ()=>{});
      assert(true);
    });
  });
  describe('DEPTH_FIRST_SEARCH', function () {
    it(`check each nodeInfo.node`, function () {
      var expectVals = [
        `null`,
        `null`,
        `[]`,
        `"g"`,
        `{"g":"g"}`,
        `"f"`,
        `["f",{"g":"g"},[],null]`,
        `"e"`,
        `{"e":"e"}`,
        `"a"`,
        `{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}`
      ];
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.node), expectVals.pop());
      });
    });
    it(`check each nodeInfo.path`, function () {
      var expectVals = [
        `["d"]`,
        `["c","3"]`,
        `["c","2"]`,
        `["c","1","g"]`,
        `["c","1"]`,
        `["c","0"]`,
        `["c"]`,
        `["b","e"]`,
        `["b"]`,
        `["a"]`,
        `[]`
      ];
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.path), expectVals.pop());
      });
    });
    it(`check each nodeInfo.parent`, function () {
      var expectVals = [
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null]]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},{"e":"e"}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null}]`,
        `[]`
      ];
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.equal(JSON.stringify(nodeInfo.parent), expectVals.pop());
      });
    });
    it(`check each nodeInfo.root`, function () {
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 0, Infinity,(nodeInfo)=>{
        assert.strictEqual(nodeInfo.root, data);
      });
    });
    it(`check m$startDepth`, function () {
      var count = 0;
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 2, Infinity,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 6);
    });
    it(`check m$endDepth`, function () {
      var count = 0;
      DEPTH_FIRST_SEARCH(new NodeInfo(data), 2, 2,(nodeInfo)=>{
        count++;
      });
      assert.equal(count, 5);
    });
    it(`check return`, function () {
      var count = 0;
      var result = DEPTH_FIRST_SEARCH(new NodeInfo(data), 2, Infinity,(nodeInfo)=>{
        count++;
        return count == 4;
      });
      assert.equal(JSON.stringify(result.node), `"g"`);
      assert.equal(JSON.stringify(result.path), `["c","1","g"]`);
      assert.equal(JSON.stringify(result.parent), `[{"a":"a","b":{"e":"e"},"c":["f",{"g":"g"},[],null],"d":null},["f",{"g":"g"},[],null],{"g":"g"}]`);
      assert.strictEqual(result.root, data);
    });
    it(`break circle`, function () {
      BREADTH_FIRST_TRAVERSAL(new NodeInfo(JSON.parse(JSON.stringify(data))), 0, Infinity, ()=>{});
      assert(true);
    });
  });
});
