const fs = require('fs/promises');

const readFile = fileName => fs.readFile(fileName, 'utf-8').then(JSON.parse);
const writeFile = (fileName, data) =>
  fs.writeFile(fileName, JSON.stringify(data), 'utf-8');

exports.readCategory = () => readFile('src/dbs/category.json');
exports.writeCategory = data => writeFile('src/dbs/category.json', data);
exports.readTransaction = () => readFile('src/dbs/transaction.json');
exports.writeTransaction = data => writeFile('src/dbs/transaction.json', data);
