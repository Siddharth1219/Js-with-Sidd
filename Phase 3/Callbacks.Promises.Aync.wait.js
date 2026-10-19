// Synchronous vs Asynchronous JS 
// Callback pattern and Callback Hell
// Promises: resolve, reject, then, catch
// async/await syntax, error handling with try- catch
// Chaining async operations 




// Sync code --->> it executes line by line, blocking the execution of the next line until the current line is completed.
// Async code --->> it executes line by line, but it does not block the execution of the next line. It allows other operations to run while waiting for an operation to complete.



// -----------------------Callback pattern and Callback Hell-----------------------



// Callback pattern is a way to handle asynchronous operations in JavaScript. It involves passing a function (callback) as an argument to another function, which will be executed once the asynchronous operation is complete.

// Example of Callback pattern:
function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'John', age: 30 };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log('Data received:', data);
});






// Callback Hell occurs when multiple nested callbacks are used, making the code difficult to read and maintain.

// Example of Callback Hell:
function fetchUser(userId, callback) {
    setTimeout(() => {
        const user = { id: userId, name: 'John' };
        callback(user);
    }, 1000);
}

function fetchPosts(userId, callback) {
    setTimeout(() => {
        const posts = [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }];
        callback(posts);
    }, 1000);
}

fetchUser(1, (user) => {
    console.log('User:', user);
    fetchPosts(user.id, (posts) => {
        console.log('Posts:', posts);
    });
});




