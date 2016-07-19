import Selector from '../src/Selector.js';
import {assert} from 'chai';

describe('Selector', function() {
  var data1 = require('./data/testData1.json');
  var data4 = require('./data/testData4.json');
  describe('public method', function() {
    it('constructor', function () {
      var option = {};
      var result = new Selector(data1, option);
      assert.equal(result.root, data1);
      assert.equal(result.option, option);
      assert.isObject(result.option.pseudoClasses);
    });
    it('selectOne', function () {
      var result = new Selector(data1).selectOne('.undefined.rule, [value="New"]');
      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
    });
    it('selectAll', function () {
      var result = new Selector(data1).selectAll('[value="New"], [onclick="CreateNewDoc()"], [value="New2_3"]');
      assert.equal(result.length, 2);
      checkNodeInfo(result[0], data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
      checkNodeInfo(result[1], data1.menu.popup.menuitem[2].menuitem2[0], data1, 'menu,popup,menuitem,2,menuitem2,0');
    });
    it('getByPath', function () {
      it('should return value from "menu/popup/menuitem/0/menuitem2/0"', function () {
        var result = c3s(data1).getByPath('menu/popup/menuitem/0/menuitem2/0');
        assert.equal(result.node, data1.menu.popup.menuitem[0].menuitem2[0]);
        assert.equal(result.path.join('/'), 'menu/popup/menuitem/0/menuitem2/0');
      });
      it('should return undefined from "menu/aaa/ddd"', function () {
        var result = c3s(data1).getByPath('menu/aaa/ddd');
        assert.equal(result.node, undefined);
        assert.equal(result.path.join('/'), 'menu/aaa');
      });
    });
  });
  describe('IS_MATCH_PROP_SELECTOR', function() {
    it('element is undefined', function () {
      var result = new Selector(data1).selectOne('[value="New"]');
      checkNodeInfo(result,data1.menu.popup.menuitem[0],data1,'menu,popup,menuitem,0');
    });
    it('element is *', function () {
      var result = new Selector(data1).selectOne('*');
      isData1Menu(result);
    });
    it('element is prop', function () {
      var result = new Selector(data1).selectOne('value');
      checkNodeInfo(result,data1.menu.value,data1,'menu,value');
    });
  });
  describe('IS_MATCH_ATTR_SELECTOR', function() {
    describe('init', function () {
      it('attributes is undefined', function () {
        var result = new Selector(data1).selectOne('*');
        isData1Menu(result);
      });
      it('node is null', function () {
        var result = new Selector(data1).selectOne('>menu>test[attr]');
        assert.isUndefined(result);
      });
      it('node is undefined', function () {
        data1['_undefined'] = undefined;
        var result = new Selector(data1).selectOne('_undefined[attr]');
        assert.isUndefined(result);
      });
      it('multi attribute', function () {
        var result = new Selector(data1).selectOne('[value][test]');
        isData1Menu(result);
      });
    });
    describe('id selector', function() {
      it('ID', function () {
        var result = new Selector(data4).selectOne('#1');
        checkNodeInfo(result,data4[0],data4,'0');
      });
      it('Id', function () {
        var result = new Selector(data4).selectOne('#2');
        checkNodeInfo(result,data4[1],data4,'1');
      });
      it('id', function () {
        var result = new Selector(data4).selectOne('#3');
        checkNodeInfo(result,data4[2],data4,'2');
      });
    });
    describe('class selector', function () {
      it('Number', function () {
        var result = new Selector(data4).selectOne('#1 .Number');
        checkNodeInfo(result,1,data4,'0,ID');
      });
    });
    describe('attribute selector', function () {
      it('no value', function () {
        var result = new Selector(data1).selectOne('[value]');
        isData1Menu(result);
      });
      it('equal', function () {
        var result = new Selector(data1).selectOne('[value="File"]');
        isData1Menu(result);
      });
      it('begin', function () {
        var result = new Selector(data1).selectOne('[value^="F"]');
        isData1Menu(result);
      });
      it('end', function () {
        var result = new Selector(data1).selectOne('[value$="e"]');
        isData1Menu(result);
      });
      it('contain', function () {
        var result = new Selector(data1).selectOne('[value*="il"]');
        isData1Menu(result);
      });
      it('case-insensitive', function () {
        var result = new Selector(data1).selectOne('[value^="f" i]');
        isData1Menu(result);
      });
    });
  });
  describe('IS_MATCH_PSEUDO_CLASS', function() {
    it('pseudoClasses is undefined', function () {
      var result = new Selector(data1).selectOne('[value]');
      isData1Menu(result);
    });
    it('use default method', function () {
      var result = new Selector(data1).selectOne(':equal("file")');
      checkNodeInfo(result, data1.menu.id, data1, 'menu,id');
    });
    it('use default method', function () {
      var result = new Selector(data4, {
          pseudoClasses: {
            lt: function (nodeInfo, v2) {
              return nodeInfo.node < v2;
            }
          }
        })
        .selectOne('#1>ID:lt(2)');
      checkNodeInfo(result, 1, data4, '0,ID');
    });
  });
  describe('findFirstMatchNode', function() {
    it('FETCH_NEXT_SELECTOR', function () {
      var result = new Selector(data1).selectOne('#file #300 ~ "1"');
      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
    });
    it('" " combinator', function () {
      var result = new Selector(data1).selectOne('#file #300');
      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
    });
    it('">" combinator', function () {
      var result = new Selector(data1).selectOne('#file>popup');
      checkNodeInfo(result, data1.menu.popup, data1, 'menu,popup');
    });
    it('"~" combinator', function () {
      var result = new Selector(data1).selectOne('#file #300 ~ "1"');
      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
    });
  });
  describe('findMatchNode', function() {
    it('FETCH_NEXT_SELECTOR', function () {
      var result = new Selector(data1).selectAll('#file #300 ~ "1"')[0];
      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
    });
    it('" " combinator', function () {
      var result = new Selector(data1).selectAll('#file #300')[0];
      checkNodeInfo(result, data1.menu.popup.menuitem[0], data1, 'menu,popup,menuitem,0');
    });
    it('">" combinator', function () {
      var result = new Selector(data1).selectAll('#file>popup')[0];
      checkNodeInfo(result, data1.menu.popup, data1, 'menu,popup');
    });
    it('"~" combinator', function () {
      var result = new Selector(data1).selectAll('#file #300 ~ "1"')[0];
      checkNodeInfo(result, data1.menu.popup.menuitem[1], data1, 'menu,popup,menuitem,1');
    });
  });

  var getbranch = function (root, path) {
    var currentNode = root;
    var path = path?path.split(','):[];
    return [root].concat(path.map(function (key) {
      return currentNode = currentNode[key];
    }));
  };
  var isData1Menu = function (result) {
    checkNodeInfo(result, data1.menu, data1, 'menu');
  };
  var checkNodeInfo = function (nodeInfo, node, root, path) {
    assert.strictEqual(nodeInfo.node, node);
    assert.equal(nodeInfo.path.join(), path);
    assert.deepEqual(nodeInfo.parent, getbranch(root, path.replace(/,?[^,]+?$/g, '')));
  };
});
