# c3s

CSS Selector, 以css選擇器選擇js物件的內容

## Code Example

```javascript
var root = {
  a: {
    b: {
      c:'c-val'
    }
  }
}

c3s(root).selectOne('b>c');
// get "c-val"
```

[more demo](https://tonicdev.com/gjccing/c3s)

## Installation

`npm install c3s`

## Support Syntax
### Elemental selectors
* `prop`
選取屬性名稱等於`prop`的值

* `*`
符合任何屬性名稱

### Attribute selectors
* `#idVal` 
選取擁有id、Id、ID屬性且該屬性值等於`idVal`

* `.classVal` 
選取`constructor.name`值等於`classVal`

* `[att]` 
選取擁有`att`屬性的物件

* `[att=val]` 
選取擁有`att`屬性並且該屬性值轉為字串(`toString()`)後等於`val`的物件

* `[att^=val]` 
選取擁有`att`屬性並且該屬性值轉為字串(`toString()`)後以`val`開始的物件

* `[att$=val]` 
選取擁有`att`屬性並且該屬性值轉為字串(`toString()`)後以`val`結尾的物件

* `[att*=val]` 
選取擁有`att`屬性並且該屬性值轉為字串(`toString()`)後包含`val`的物件

* `[att=val i]` 
忽略大小寫

### Pseudo-classes

* `:regexpTest(arg)`
選取符合正規表達式`arg`的值

* `:equal(arg)`
選取等於`arg`的值

* `:type(arg)`
選取類型等於`arg`的值

你可以於c3s的option.pseudoClasses中宣告新的pseudo-class, ex:
```javascript
c3s(root, {
  pseudoClasses: {
    newClass: function (
      node, // 目前搜尋結果
      path, // 從root到node的路徑
      parent, // 從root到node的所有祖先
      arg1, // 於selector語句中出現的參數
      /* arg2, ... */
    ) {
      /* 
      return 
        Truthy 選取
        Falsy 不選取
        Array 包含[node, path, parent]新節點資訊,選取此新節點
    */
    }
  }
})
.selectOne(':newClass, :newClass(arg), :newClass("arg1", 3.14)');
```

### Combinators

* `prop1 prop2`
搜尋prop1的屬性和包含物件所擁有的屬性, 若語句開頭沒有`Combinator`則帶入<code>&nbsp;</code>, ex: `prop1` = <code>&nbsp;prop1</code>

* `prop1>prop2`
搜尋prop1的屬性

* `prop1~prop2`
搜尋prop1同parent的屬性


## API Reference

### c3s  
依照參數創建並回傳Selector實例
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root, {});
```
#### Returns
Selector實例
#### Parameters
* root: object, 搜尋目標
* option: object
  * pseudoClasses: object, 宣告新的pseudo-class

### c3s.getByPath  
取得`root`在`path`的值, 若找不到則回傳`undefined`
```javascript
var root = { a : { b: { c: 'target' } } };
c3s.getByPath(root, 'a/b/c'); 
// 'target'
```
#### Returns
查詢路徑的結果
#### Parameters
* root:  object, 想要搜尋的物件
* path: string, 由屬性組成的路徑
* delimiter: string, default = '/', 分隔符

### SelectorInstance.selectOne
取得第一個匹配查詢語法的值和它的詳細資訊
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root).selectOne('c');
// 'target'的NodeInfo實例
```
#### Returns
NodeInfo實例, 含有以下參數:

* node: 查詢結果
* path: 從root到node的屬性路徑
* parent: 從root到node的所有祖先
* root: 查詢對象

#### Parameters
* input: string, 查詢語句

### SelectorInstance.selectAll
取得所有匹配查詢語法的值並這些值的詳細資訊
```javascript
var root = { a : { 
  b: { c: 'target1' },
  c: 'target2'
} };
c3s(root).selectAll('c');
// 'target1', 'target2'的NodeInfo實例
```
#### Returns
Array, 包含匹配值的NodeInfo實例
#### Parameters
* input: string, 查詢語句

### SelectorInstance.getFromPath
取得Selector搜尋對象內指定屬性路徑的值, 若找不到則回傳`undefined`
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root).getByPath('a/b/c');
// 'target'
```
#### Returns
包含查詢路徑結果的NodeInfo實例
#### Parameters
* path: string, 查找路徑
* delimiter: string, default = '/', 分隔符

## Tests

`npm run test`

## debug

`npm run debug`
