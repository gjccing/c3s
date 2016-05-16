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

## API Reference

### Support Syntax

##### space

  ex: `div a`。
  遍歷物件的屬性及它包含的所有物件。
  
##### arrow

  遍歷物件的屬性。
  
  ex: `div>a`。
  
##### element

  找出屬性名稱等於指定字串的屬性的值。
  
  ex: `div` `"div"` `'div'`

##### class
  
  找出物件擁有class屬性(stirng or array)且包含指定字串；或著是其類別的名稱（obj.constructor.name）。
  
  ex: `.class` `."class"` `.'class'`
  
##### id

  找出物件擁有id屬性且等於指定的字串。
  
  ex: `#id` `#"id"` `#'id'` 
  
##### persuade class，ex: `:method(args)`
  
  找出所有符合persuade class定義的值。使用者可以自訂persuade class。
  
  ex: `:value(123)`
  
## Tests

Describe and show how to run the tests with code examples.

## License

A short snippet describing the license (MIT, Apache, etc.)
