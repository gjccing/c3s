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

`npm install c3s`

#### Tests

`npm run test`

#### debug

`npm run debug`

## Support Syntax

#### Space
  
  ex: `div a`<br>
  遍歷節點的屬性及包含的所有物件。
  預設若語法一開始未加任何連接符號(Space or Arrow)則會插入Space。
  
  
#### Arrow

  ex: `div>a`<br>
  遍歷節點的屬性。
  
  
#### Element

  ex: `div` `"div"` `'div'`<br>
  選取節點上屬性名稱等於**Element**字串的屬性的值。

#### Class
  
  ex: `.Class` `."Class"` `.'Class'`<br>
  選取擁有`class`屬性(stirng or array)且屬性值包含**Class**字串的節點；
  或著選取**Class**等於其類別的名稱（`obj.constructor.name`）的節點。
  
#### Id

  ex: `#Id` `#"Id"` `#'Id'`<br>
  選取擁有`id`屬性且屬性值等於**Id**字串的節點。
  
#### persuade class
  
  ex: `:value(123)`<br>
  選取符合persuade class定義的節點。目前預設有以下persuade class:
  
  * `:value(val)`
  
    節點如果與**val**相等的話就選取。

  * `:regexpTest(regexp)`
    
    如果`regexp.test(節點)`回傳true的話就選取。

  可以自訂或改寫現有的persuade class，ex:
  ```javascript
  c3s(['example'], {
    pseudoClass: {
      metho1: function ( 
          element/* c3s將會傳入目前要判斷的element */, 
          arg1, arg2 /* 任意數量參數 */
        ) {
        return true /* 選取該element or false 不選取 */
      }
    }
  } ).selectAll(':metho1("arg1", "arg2")');
  ```

## API Reference

#### c3s
  
  ex: `c3s(root, option)`<br>
  依照設定回傳c3Selector類別實俐。

  * root: 想要搜尋的物件。
  * option: 設定物件，目前只有pseudoClass的設定。

#### c3s.getByPath
  
  ex: `c3s.getByPath(root, path)`<br>
  依照path取出root中內涵的值。

  * root: 想要搜尋的物件。
  * path，array:查找路徑。

#### c3Selector.selectOne
  
  ex: `c3s(root, option).selectOne(input)`<br>
  依照輸入的css語句選取第一筆符合規則的節點。

  回傳值為Array的子類別並且結果會以`{value, path, root}`這種形式放置。

  ```javascript
  var root = ['example'];
  c3s(root)
    .selectOne(':value("example")')
    .forEach(function(rec) {
      console.log(rec);
      // {value:'example', path: ["0"],  root: root}
    })
  ```

  * input css語句。

#### c3Selector.selectAll
  
  ex: `c3s(root, option).selectOne(input)`<br>
  依照輸入的css語句選取所有符合規則的節點。

  回傳值如`c3Selector.selectOne`。

  * input css語句。
