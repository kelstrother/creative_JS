const listUsers = ['Leo', 'Nardo', 'Donna', 'Telo'];
console.log(listUsers)

listUsers.push('Michael') //^ adds value to last position
listUsers.push('Angelo')
console.log(listUsers);

listUsers.pop() //^ removes the last value
console.log(listUsers)

listUsers.shift() //^ removes first value
console.log(listUsers);

listUsers.unshift('Angelo') //^ adds value to first position
console.log(listUsers);
