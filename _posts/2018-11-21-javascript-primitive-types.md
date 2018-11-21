---
published: false
---
## Javascript Primitive Types

Javascript gives us flexibility to pass assign variables, parameters, and properties to whatever type we desire which is nice, but that same feature also allows us to shoot ourselves in the foot. You can use supersets of javascript like typescript or flow which will type check your parameters, but if you're like me and happy using plain old javascript then it is helpful to test your functions with different types of inputs other than the types they are expecting. Here is a list of the primitive types:

Javascript Primitive types
```javascript

[
  true, // Boolean
  null, // Null
  undefined, // Undefined
  1234, // Number
  'string', // String
  function() {}, // Function
  {}, // Object
  [], // Array
  Symbol() // Symbol
]
```

Sometimes it is helpful to test your code with different JSON data than what you are expecting and write tests accordingly. Here are the json promitive types:

JSON primitive types
```javascript
[
  true, // Boolean
  1234, // Number
  'string', // String
  {}, // Object
  [], Array
  null, // Null
]
```
