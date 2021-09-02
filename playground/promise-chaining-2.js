require('../src/db/mongoose')
const { count } = require('../src/models/task')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('612cad820f185786742fd3e1').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount("612d99f2a2657275944358fb").then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})