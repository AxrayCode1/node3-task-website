require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e772bfc5e85012d4c6a4c2a').then((user) => {
//     console.log(user);
//     return Task.countDocuments({completed:false});
// }).then((result)=>{
//     console.log(result);
// }).catch((e)=>{
//     console.log(e);
// });

const deleteTaskAndCount = async(id, age) => {
    const task = await Task.findByIdAndDelete(id,{age: age});
    const count = await Task.countDocuments({completed:false});
    return count;
}

deleteTaskAndCount('5e772bfc5e85012d4c6a4c2a', 2).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})