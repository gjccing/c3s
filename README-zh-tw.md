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
  找出物件擁有class屬性(stirng or array)且包含指定字串；或著是其類別的名稱（obj.constructor.name）。
  
### id

  ex: `#id` `#"id"` `#'id'`<br>
  找出物件擁有id屬性且等於指定的字串。
  
### persuade class，ex: `:method(args)`
  
  ex: `:value(123)`<br>
  找出所有符合persuade class定義的值。使用者可以自訂persuade class。
  目前預設有以下persuade class：
  
  * `:value(value)`
  
    選擇目前的值與value相等的

  * `:regexpTest(regexp)`
    
    選擇目前的值符合regexp

## API Reference

## Tests

Describe and show how to run the tests with code examples.

## License

A short snippet describing the license (MIT, Apache, etc.)
