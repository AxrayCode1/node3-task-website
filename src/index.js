const app = require('./app');

const port = process.env.PORT;

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

// const Task = require('./models/task')
// const User = require('./models/user');

// const main = async () => {
//     // const task = await Task.findById('5e80ae598224a653a40ebfa1');
//     // await task.populate('owner').execPopulate();
//     // console.log(task.owner);

//     const user = await User.findById('5e80ad94ab6e1253305c1cce');
//     await user.populate('tasks').execPopulate();
//     console.log(user.tasks);
// }

// main();

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function () {
//     return {};
// }

// console.log(JSON.stringify(pet));