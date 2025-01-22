const path = require('path');

console.log(path.sep);
console.log(__dirname);
console.log(path.resolve(__dirname, 'content', 'subfolder','text.txt'));
const filePath = path.join('content', 'subfolder','text.txt');
console.log(filePath);
console.log(path.basename(filePath));
