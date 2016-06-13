# c3s

CSS Selector, use css selector to select js object content.

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

[more demo]https://tonicdev.com/gjccing/c3s)


## Installation

`npm install c3s`

## Support Syntax
### Elemental selectors
`prop`
select property value which name is `prop`

### Attribute selectors
* `#idVal`
select object which contain id、Id or ID property and this property value is `idVal`

* `.classVal`
select object which `constructor.name` is `classVal`

* `[att]`
select contain `att` property object

* `[att=val]`
select object which contain `att` property and this property value(`toString()`) is `val`

* `[att^=val]`
select object which contain `att` property and this property value(`toString()`) begins with `val`

* `[att$=val]`
select object which contain `att` property and this property value(`toString()`) ends with `val`

* `[att*=val]`
select object which contain `att` property and this property value(`toString()`) contains `val`

### Pseudo-classes

* `:regexpTest(arg)`
select match regexp's `arg` value

* `:equal(arg)`
select equal `arg` value

You can define new pseudo-class in c3s option.pseudoClasses, ex:
```javascript
c3s(root, {
  pseudoClasses: {
    newClass: function (
      node, // current search results
      path, // property path from root to node
      parent, // all parents from root to node
      arg, // arguments in selector statement
      /* arg2, ... */
    ) {
      /* 
      return 
        Truthy, select this node
        Falsy, don't select this node
        Array, contain [node, path, parent] new node info, select the new node
    */
    }
  }
})
.selectOne(':newClass, :newClass(arg), :newClass("arg1", 3.14)');
```

### Combinators

* `prop1 prop2`
search prop1 property and contain object property, if statement start isn't `Combinator`, prepend <code>&nbsp;</code>, ex: `prop1` = <code>&nbsp;prop1</code>

* `prop1>prop2`
search prop1 property


## API Reference

### c3s
create and return Selector instance by paramters
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root, {});
```
#### Returns
Selector instance by paramters
#### Parameters
* root: object, search target
* option: object
  * pseudoClasses: object, declare new pseudo-class

### c3s.getByPath  
get value on `path` form `root`, if `path` is not found, return `undefined`
```javascript
var root = { a : { b: { c: 'target' } } };
c3s.getByPath(root, 'a/b/c'); 
// 'target'
```
#### Returns
return search result
#### Parameters
* root:  object, search object
* path: string, property path
* delimiter: string, default = '/'

### SelectorInstance.selectOne
get first match seach statement value and detail in `root`
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root).selectOne('c');
// NodeInfos by 'target'
```
#### Returns
NodeInfo instance, contains the following parameters:

* node: search result
* path: property path from root to node
* parent: all parents from root to node
* root: object being queried

#### Parameters
* input: string, search statement

### SelectorInstance.selectAll
get all match seach statement values and detail in `root`
```javascript
var root = { a : { 
  b: { c: 'target1' },
  c: 'target2'
} };
c3s(root).selectAll('c');
// NodeInfos by 'target1' and 'target2'
```
#### Returns
Array, contain match value NodeInfo instance
#### Parameters
* input: string, search statement

### SelectorInstance.getFromPath
get value on `path` form Selector search target, if `path` is not found, return `undefined`
```javascript
var root = { a : { b: { c: 'target' } } };
c3s(root).getByPath('a/b/c');
// 'target'
```
#### Returns
return search result
#### Parameters
* path: string, property path
* delimiter: string, default = '/'

## Tests

`npm run test`

## debug

`npm run debug`
