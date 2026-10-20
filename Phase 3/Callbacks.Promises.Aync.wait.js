// // Synchronous vs Asynchronous JS 
// // Callback pattern and Callback Hell
// // Promises: resolve, reject, then, catch
// // async/await syntax, error handling with try- catch
// // Chaining async operations 




// // Sync code --->> it executes line by line, blocking the execution of the next line until the current line is completed.
// // Async code --->> it executes line by line, but it does not block the execution of the next line. It allows other operations to run while waiting for an operation to complete.



// // -----------------------Callback pattern and Callback Hell-----------------------



// // Callback pattern is a way to handle asynchronous operations in JavaScript. It involves passing a function (callback) as an argument to another function, which will be executed once the asynchronous operation is complete.

// // Example of Callback pattern:
// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: 'John', age: 30 };
//         callback(data);
//     }, 2000);
// }

// fetchData((data) => {
//     console.log('Data received:', data);
// });






// // Callback Hell occurs when multiple nested callbacks are used, making the code difficult to read and maintain.

// // Example of Callback Hell:
// function fetchUser(userId, callback) {
//     setTimeout(() => {
//         const user = { id: userId, name: 'John' };
//         callback(user);
//     }, 1000);
// }

// function fetchPosts(userId, callback) {
//     setTimeout(() => {
//         const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
//         callback(posts);
//     }, 1000);
// }

// fetchUser(1, (user) => {
//     console.log('User:', user);
//     fetchPosts(user.id, (posts) => {
//         console.log('Posts:', posts);
//     });
// });



// ------------------------Promises: resolve, reject, then, catch-----------------------


// // Promises are a way to handle asynchronous operations in JavaScript. A promise represents a value that may be available now, or in the future, or never. It can be in one of three states: pending, fulfilled, or rejected.

// // Example of Promises:
function fetchDataPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'John', age: 30 };
            resolve(data);
        }, 2000);
    });
}

fetchDataPromise()
    .then((data) => {
        console.log('Data received:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    }); 









    
 // Chaining async operations with Promises

    function fetchUserPromise(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = { id: userId, name: 'John' };
                resolve(user);
            }, 1000);
        });
    }

    function fetchPostsPromise(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
                resolve(posts);
            }, 1000);
        });
    }

    fetchUserPromise(1)
        .then((user) => {
            console.log('User:', user);
            return fetchPostsPromise(user.id);
        })
        .then((posts) => {
            console.log('Posts:', posts);
        })
        .catch((error) => {
            console.error('Error:', error);
        });








// // ------------------------async/await syntax, error handling with try- catch-----------------------

// // async/await is a syntax that allows you to write asynchronous code in a synchronous manner. It makes the code easier to read and understand. The async keyword is used to declare a function as asynchronous, and the await keyword is used to wait for a promise to resolve or reject.

// // Example of async/await:
async function fetchDataAsync() {
    try {
        const data = await fetchDataPromise();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchDataAsync();










//  // Chaining async operations with async/await
async function fetchUserAndPosts() {
    try {
        const user = await fetchUserPromise(1);
        console.log('User:', user);
        const posts = await fetchPostsPromise(user.id);
        console.log('Posts:', posts);
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchUserAndPosts();






// ------------------------Chaining async operations-----------------------   

// Chaining async operations is the process of executing multiple asynchronous operations in a sequence, where each operation depends on the result of the previous one. This can be done using Promises or async/await syntax.  

// Example of chaining async operations with Promises:
fetchUserPromise(1)
    .then((user) => {
        console.log('User:', user);
        return fetchPostsPromise(user.id);
    })
    .then((posts) => {
        console.log('Posts:', posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });      