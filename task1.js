const showObjectInfo = obj => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`ключ: ${key}, значение: ${obj[key]}`)
    }
  }
}
const worker = {status: 'worker'}
const user = Object.create(worker)
user.name = 'Ivan'
user.age = 35
showObjectInfo(user)
const showObjectInfo1 = obj => {
  Object.keys(obj).forEach(key => console.log(`ключ: ${key}, значение: ${obj[key]}`))
}
showObjectInfo1(user)