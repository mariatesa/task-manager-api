require('../src/db/mongoose')
const User = require('../src/models/user')

//612cab46064d6a6b78f6115c

// User.findByIdAndUpdate('612cc0ba018bc55d0ca1b57e', { age: 1 }).then((user)=> {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('612d94791d52489200f8d174', 2).then((count) => {
    console.log(count)
}).catch((e) =>{
    console.log(e)
})