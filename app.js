const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

writeFileSync('./content/fileWrite.txt', `This is content to write to file`);

