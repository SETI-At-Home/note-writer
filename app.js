console.log('Starting app');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

let res = notes.addNote();
console.log(res);

let res2 = notes.add(5, 1);
console.log(res2);
// let user = os.userInfo();

// fs.appendFileSync('greetings.txr', `Hello ${user.username}! You are ${notes.age}.`);