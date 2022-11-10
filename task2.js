const hasProperty = (str, obj) => str in obj

const worker = {status: 'worker'}
const user = Object.create(worker)
user.name = 'Ivan'
user.age = 35

console.log(hasProperty('status', user))
console.log(hasProperty('name', user))
console.log(hasProperty('surname', user))