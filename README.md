# ToTable
A tiny library that generates html tables from arrays of objects.

## `ToTable(arrayOfObjects)`
```js
import { ToTable } from 'totable';

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
import { ToTable } from 'totable';

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
import { ToTable } from 'totable';

const html = ToTable({
  name: 'firstname',
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
