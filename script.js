let ism = prompt('Имя')
let yosh = +prompt('ВОзраст')
let surname = prompt('Фамилия')

const obj = {
    names: ism,
    surname: surname,
    age: yosh,
    gender: null,


}


if (gender === 'ha') {
    obj.gender = true
} else {
    obj.gender = false
}


console.log(obj);
let neObj = Object.keys(obj)
let newobj = Object.values(obj)

