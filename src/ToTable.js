//@ts-check

// Constants
const ARROW_UP = '&#11165;';
const ARROW_DOWN = '&#11167;';


// Helper methods
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


// API
const ToTable = (...args) => ToTable__(args, false);
const ToTableRaw = (...args) => ToTable__(args, true);


// Implementation
function ToTable__(args, isRaw) {
  // Type check
  switch (args.length) {
    case 1: 
      if (!Array.isArray(args[0])) throw ('Expected first argument to be of type "array" but got "' + typeof args[0] + '"'); 
      break;
    case 2: 
      if (typeof args[0] !== 'object') throw ('Expected first argument to be of type "array" or of type "object" but got "' + typeof args[0] + '"'); 
      if (!Array.isArray(args[1])) throw ('Expected second argument to be of type "array" but got "' + typeof args[1] + '"'); 
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

  if (isRaw) {
    return ToTableRaw_(columnMap, data);
  }
  return ToTable_(columnMap, data); 
}

function ToTable_(columnMap, data) {
  //@ts-ignore
	const columnNames = Object.values(columnMap);	
  const columnKeys = Object.keys(columnMap);

  return appendMany(document.createElement('table'), 
    [
      append(document.createElement('thead'),
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

const ToTableRaw_ = (columnMap, data) => 
  appendMany(document.createElement('table'), 
    [
      append(document.createElement('thead'),
        appendMany(document.createElement('tr'), 
          //@ts-ignore
          Object.values(columnMap)
            .map(wrap('th'))
        )
      ),
      appendMany(document.createElement('tbody'),
        data.map(d => 
          appendMany(document.createElement('tr'),
            Object.keys(d)
              .filter(k => Object.keys(columnMap).indexOf(k) >= 0)
              .map(k => d[k])
              .map(wrap('td'))
          )
        )
      )
    ]
  );


// Exports
if (module) {
  //@ts-ignore
  module.exports = ToTable;
  module.exports.ToTable = ToTable;
  module.exports.ToTableRaw = ToTableRaw;
} 
if (global) {
  //@ts-ignore
  global.ToTable = ToTable;
  //@ts-ignore
  global.ToTableRaw = ToTableRaw;
}