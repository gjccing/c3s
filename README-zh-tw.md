# c3s

CSS Selector，讓使用者以css selector語法操作、查詢javascript物件和陣列的工具。

## Code Example

```javascript
var a = {
  b: {
    c: {
      d:'d'
    },
    e: {
      d:'d'
    }
  }
}

c3s(a).selectOne('e>d');
// get "d"
```

## Installation

Provide code examples and explanations of how to get the project.

## Support Syntax

### space
  
  ex: `div a`<br>
  遍歷物件的屬性及它包含的所有物件。
  
  
### arrow

  ex: `div>a`<br>
  遍歷物件的屬性。
  
  
### element

  ex: `div` `"div"` `'div'`<br>
  找出屬性名稱等於指定字串的屬性的值。

### class
  
  ex: `.class` `."class"` `.'class'`<br>
  找出元素擁有class屬性(stirng or array)且class屬性包含指定字串；或著等於其類別的名稱（obj.constructor.name）。
  
### id

  ex: `#id` `#"id"` `#'id'`<br>
  找出元素擁有id屬性且等於指定的字串。
  
### persuade class
  
  ex: `:value(123)`<br>
  找出所有符合persuade class定義的元素。目前預設有以下persuade class：
  
  * `:value(val)`
  
    若元素如果與**val**相等的話就選取。

  * `:regexpTest(regexp)`
    
    將元素使用regexp.test判斷若回傳true的話就選取。

  可以自訂或改寫現有的persuade class，ex：
  ```javascript
  c3s(['example'], {
    pseudoClass: {
      metho1: function ( element/* c3s將會傳入目前要判斷的element */, arg1, arg2 /* 任意數量參數 */ ) {
        return true /* 選取該element or false 不選取 */
      }
    }
  } ).selectAll(':metho1("arg1", "arg2")');
  ```

## API Reference

## Tests

Describe and show how to run the tests with code examples.

## License

A short snippet describing the license (MIT, Apache, etc.)
