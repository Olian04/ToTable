# [ToTable](https://www.npmjs.com/package/totable)
A tiny library that generates html tables from arrays of objects.

No funny businesses, no dependencies, no transpilation, just ~50 lines of vanilla js.

## NPM
```
npm i --save totable
```

## CDN

```html
<script src="https://cdn.rawgit.com/Olian04/ToTable/d126873e/src/ToTable.js"></script>

```

## `ToTable(arrayOfObjects)`
```js
const ToTable = require('totable');

const html = ToTable([
  { firstname: 'Oliver', lastname: 'Twist', age: 14 },
  { firstname: 'Charles', lastname: 'Darwin', age: 78 },
  { firstname: 'Steven', lastname: 'Hawken', age: 50 }
]);
```
<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Oliver</td>
    <td>Twist</td> 
    <td>14</td>
  </tr>
  <tr>
    <td>Charles</td>
    <td>Darwin</td> 
    <td>78</td>
  </tr>
  <tr>
    <td>Steven</td>
    <td>Hawkins</td> 
    <td>50</td>
  </tr>
</table>

## `ToTable(arrayOfColumnNames, arrayOfObjects)`
```js
const ToTable = require('totable');

const html = ToTable(['lastname', 'age'], [
  { firstname: 'Oliver', lastname: 'Twist', age: 14 },
  { firstname: 'Charles', lastname: 'Darwin', age: 78 },
  { firstname: 'Steven', lastname: 'Hawken', age: 50 }
]);
```
<table>
  <tr>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Twist</td> 
    <td>14</td>
  </tr>
  <tr>
    <td>Darwin</td> 
    <td>78</td>
  </tr>
  <tr>
    <td>Hawkins</td> 
    <td>50</td>
  </tr>
</table>


## `ToTable(objectOfColumnNameMappings, arrayOfObjects)`
```js
const ToTable = require('totable');

const html = ToTable({
  firstname: 'name',
  age: 'age'
}, [
  { firstname: 'Oliver', lastname: 'Twist', age: 14 },
  { firstname: 'Charles', lastname: 'Darwin', age: 78 },
  { firstname: 'Steven', lastname: 'Hawken', age: 50 }
]);
```
<table>
  <tr>
    <th>name</th> 
    <th>age</th>
  </tr>
  <tr>
    <td>Oliver</td>
    <td>14</td>
  </tr>
  <tr>
    <td>Charles</td>
    <td>78</td>
  </tr>
  <tr>
    <td>Steven</td>
    <td>50</td>
  </tr>
</table>
