document.querySelector('#table1').innerHTML = 
	ToTable([
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ]);

document.querySelector('#table2').innerHTML = 
  ToTable(['lastname', 'age'], [
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ]);

document.querySelector('#table3').innerHTML = 
  ToTable({
    firstname: 'name',
    age: 'age'
  }, [
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ]);
