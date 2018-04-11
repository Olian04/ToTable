document.querySelector('#table1').appendChild( 
  ToTable([
      { firstname: 'Oliver', lastname: 'Twist', age: 14 },
      { firstname: 'Charles', lastname: 'Darwin', age: 78 },
      { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ])
);

document.querySelector('#table2').appendChild( 
  ToTable(['lastname', 'age'], [
      { firstname: 'Oliver', lastname: 'Twist', age: 14 },
      { firstname: 'Charles', lastname: 'Darwin', age: 78 },
      { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ])
);

document.querySelector('#table3').appendChild( 
  ToTable({
      firstname: 'name',
      age: 'age'
  }, [
      { firstname: 'Oliver', lastname: 'Twist', age: 14 },
      { firstname: 'Charles', lastname: 'Darwin', age: 78 },
      { firstname: 'Steven', lastname: 'Hawken', age: 50 }
  ])
);