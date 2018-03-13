document.write(`
        <h2>ToTable(arrayOfObjects)</h2>
        <pre>ToTable([
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
])</pre>
        ${ToTable([
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ])}`);
        
        document.write(`
        <h2>ToTable(arrayOfColumnNames, arrayOfObjects)</h2>
        <pre>ToTable(['lastname', 'age'], [
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
])</pre>
        ${ToTable(['lastname', 'age'], [
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ])}`);
        document.write(`
        <h2>ToTable(objectOfColumnNameMappings, arrayOfObjects)</h2>
        <pre>ToTable({
    firstname: 'name',
    age: 'age'
}, [
    { firstname: 'Oliver', lastname: 'Twist', age: 14 },
    { firstname: 'Charles', lastname: 'Darwin', age: 78 },
    { firstname: 'Steven', lastname: 'Hawken', age: 50 }
])</pre>
        ${ToTable({
            firstname: 'name',
            age: 'age'
        }, [
            { firstname: 'Oliver', lastname: 'Twist', age: 14 },
            { firstname: 'Charles', lastname: 'Darwin', age: 78 },
            { firstname: 'Steven', lastname: 'Hawken', age: 50 }
        ])}`);
