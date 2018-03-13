function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ToTable(...args) {
	if (args.length === 1) { 
  	const [data] = args;
    const keys = Object.keys(data[0]);
    const columnMap = keys.reduce((res, k) => {
    	res[k] = capitalize(k);
      return res;
    }, {});
  	return ToTable_(columnMap, data); 
  }	
  else if (args.length === 2 && Array.isArray(args[0])) {
  	const [keys, data] = args;
    const columnMap = keys.reduce((res, k) => {
    	res[k] = capitalize(k);
      return res;
    }, {});
  	return ToTable_(columnMap, data);
  }
  else if (args.length === 2) {
  	const [columnMap, data] = args;
  	return ToTable_(columnMap, data);
  }
}

function ToTable_(columnMap, data) {
	const columnNames = Object.values(columnMap);	
  const columnKeys = Object.keys(columnMap);
  return `
  <table>
    <tr>
    	${columnNames.map(v => `<th>${v}</th>`).join('')}
    </tr>
    ${data.map(v => `
      <tr>
        ${Object.keys(v)
           .filter(k => columnKeys.indexOf(k) >= 0)
           .map(k => `<td>${v[k]}</td>`)
           .join('')
        }
      </tr>`).join('')
    }
  </table>
  `;
}

exports = ToTable;
exports.ToTable = ToTable;