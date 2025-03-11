// const promis1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("done");
//     resolve();
//   }, 2000);
// });
// promis1.then(function () {
//   console.log("promis done");
// });

//  new Promise((resolve, reject) => {
//   setTimeout(function () {
//     console.log("2Nd was done");
//     resolve();
//   }, 5000);
// }).then(function () {
//   console.log('2nd wass done');

// });



// const promis = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log('ha this time out function')
//     resolve({ username: 'Ashish', email: 'Vikas1411111199@gmail.com' })
//   }, 2000)
// })
// promis.then(function (user) {

//   console.log(user);
//   console.log(user.username);
//   console.log(user.email);

// })



// const promis4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('This is promis 4');
//     let error = false
//     if (!error) {
//       resolve({ username: 'Ashish', email: 'Vikas141111199@gmail.com' })
//     }
//     else {
//       reject('ERROR :Somthin went wrong')
//     }
//   }, 1000)
// })

// promis4.then((user) => {
//   console.log(user);
//   return user.username

// }).then((username) => {
//   console.log(username);

// }).catch((err) => {
//   console.log(err);

// }).finally(() => {
//   console.log('the promis is ether resolve or rejected');
// })



// async awate 
// const promis5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('This is promis 4');
//     let error = false
//     if (!error) {
//       resolve({ username: 'Ashish', email: 'Vikas141111199@gmail.com' })
//     }
//     else {
//       reject('ERROR :Somthin went wrong')
//     }
//   }, 1000)
// })

// async function consumePromis() {
//   try{
//     const response = await promis5
//   console.log(response);
//   }
//   catch{
//     console.log('error');
//   }
// }


// consumePromis()


// async function getAllUser() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//   } catch (e) {
//     console.log(e);
//   }

// }
// getAllUser()



// const promis7= new Promise((resolve,reject)=>{
//    const response= fetch('https://jsonplaceholder.typicode.com/users')
//    const data =response.json()
//    console.log(data);
//    resolve(data)
//    reject(()=>{
//     console.log('err');
//    })
// }).then((userdata)=>{
// console.log(userdata);
// }).catch((err)=>{
//   console.log('error is accore' ,err);
// }).finally(()=>{
//   console.log('your promis ither solve or ither reject ');
// })


fetch('https://jsonplaceholder.typicode.com/users')

  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);

  })
  .catch((err) => {
    console.log(err);
  })