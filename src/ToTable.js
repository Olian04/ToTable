function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function extractKeys(data) {
  return  data.length === 0 ? [] : Object.keys(data[0]);
}

function generateColumnMap(keys)  {
  return keys.reduce((res, k) => {
    res[k] = capitalize(k);
    return res;
  }, {});
}

function ToTable(...args) {
  // Type check
  switch (args.length) {
    case 1: 
      if (!Array.isArray(args[0])) throw ('Expected first argument to be of type "array" but got "' + typeof data + '"'); 
      break;
    case 2: 
      if (typeof args[0] !== 'object') throw ('Expected first argument to be of type "array" or of type "object" but got "' + typeof keys + '"'); 
      if (!Array.isArray(args[1])) throw ('Expected second argument to be of type "array" but got "' + typeof data + '"'); 
      break;
  }

  // Prepare data
  let columnMap, data;
	if (args.length === 1) { 
    data = args[0];
    columnMap = generateColumnMap(extractKeys(data));
  }	
  else if (args.length === 2 && Array.isArray(args[0])) {
    data = args[1];
    columnMap = generateColumnMap(args[0]);
  }
  else if (args.length === 2) {
    [columnMap, data] = args;
  }

  return ToTable_(columnMap, data); 
}

function appendMany(parent, children) {
  children.forEach(v => {
    parent.appendChild(v);
  });
  return parent;
}

function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

const wrap = type => data => {
  const elem = document.createElement('' + type);
  elem.innerHTML = data;
  return elem;
};

function ToTable_(columnMap, data) {
	const columnNames = Object.values(columnMap);	
  const columnKeys = Object.keys(columnMap);

  return appendMany(document.createElement('table'), 
    [
      append(document.createElement('tbody'),
        appendMany(document.createElement('tr'), 
          columnNames
            .map(wrap('th'))
        )
      ),
      appendMany(document.createElement('tbody'),
        data.map(d => 
          appendMany(document.createElement('tr'),
            Object.keys(d)
              .filter(k => columnKeys.indexOf(k) >= 0)
              .map(k => d[k])
              .map(wrap('td'))
          )
        )
      )
    ]
  );

}

if (module) {
  module.exports = ToTable;
  module.exports.ToTable = ToTable;
} 
if (global) {
  global.ToTable = ToTable;
}