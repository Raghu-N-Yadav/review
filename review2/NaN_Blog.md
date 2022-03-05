# NaN
 It is a variable in global scope representing *Not-A-Number*. It is a member of a numeric data type that can be interpreted as a value that is undefined or unrepresentable

##### Origin of NaN values

NaN values are generated when arithmetic operations result in undefined or unrepresentable values.


##### Code Example

```javaScript
function checkNaN(arg) {
  if (isNaN(arg)) {
    return NaN;
  }
  return arg;
}

console.log(checkNaN('1'));
// expected output: "1"

console.log(checkNaN('NotANumber'));
// expected output: NaN
```

Different types of operations that return NaN:

- Number cannot be parsed (e.g. ```parseInt("hi")``` or ```Number(undefined))```
- Math operation where the result is not a real number (e.g. ```Math.sqrt(-1)```)
- Operand of an argument is NaN (e.g. ```7 ** NaN```)
- Indeterminate form (e.g. ```0 * Infinity```, or ```undefined + undefined```)
- Any operation that involves a string and is not an addition operation (e.g. ```"foo" / 3```)

##### Testing against NaN

__NaN__ compares unequal (via ```==```, ```!=```, ```===```, and ```!==```) and output result will be ```false```.

```javaScript
NaN === NaN;        // false
NaN !== NaN         //false
isNaN(NaN);         // true
```

**NOTE**

Some array methods cannot find NaN, while others can.

```javascript
let arr = [2, 4, NaN, 12];
arr.indexOf(NaN);                      // -1 (false)
arr.includes(NaN);                     // true
arr.findIndex(n => Number.isNaN(n));   // 2

```