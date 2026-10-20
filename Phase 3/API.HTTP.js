// fetch API - GET, POST basics
// Headers, status codes, JSON parsing 
// Form submission via fetch API
// Error handling with response.ok and try-catch
// Basics REST principles - GET, POST, PUT, DELETE



// fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers. It provides a more powerful and flexible feature set than the older XMLHttpRequest.

// Here are some key concepts and examples of using the fetch API:



// 1. Making a GET request:
fetch('https://randomuser.me/api/') // Replace with your API endpoint
  .then(response => {
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });







// 2. Making a POST request:
fetch('https://example.com/api/data', { // Replace with your API endpoint
  method: 'POST', // Specify the HTTP method
  headers: {
    'Content-Type': 'application/json' // Set the content type to JSON
  },
  body: JSON.stringify({ key: 'value' }) // Convert data to JSON string
})
.then(response => {
  if (!response.ok) { // Check if response is not OK (status code outside 200-299)
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse JSON data from the response
})
.then(data => {
  console.log(data); // Handle the data
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
});








// 3. Handling form submission via fetch API:
const form = document.querySelector('form'); // Select the form element

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const formData = new FormData(form); // Create a FormData object from the form

  fetch('https://example.com/api/form-submit', { // Replace with your API endpoint
    method: 'POST',
    body: formData // Send the form data
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse JSON data from the response
  })
  .then(data => {
    console.log(data); // Handle the data
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
});








// 4. Error handling with response.ok and try-catch:
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) { // Check if response is not OK
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data      = await response.json(); // Parse JSON data from the response   

    console.log(data); // Handle the data
  } catch (error) {
    console.error('There has been a problem with your fetch operation:', error);
  }
}









// 5. Basics of REST principles - GET, POST, PUT, DELETE:
// - GET: Retrieve data from the server.
// - POST: Send new data to the server.
// - PUT: Update existing data on the server.
// - DELETE: Remove data from the server.





// Example of a PUT request:
fetch('https://example.com/api/data/1', { // Replace with your API endpoint and resource ID
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'new value' }) // Update data
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  console.log(data); // Handle the updated data
})
.catch(error => {
  console       .error('There has been a problem with your fetch operation:', error);       

});








// Example of a DELETE request:
fetch('https://example.com/api/data/1', { // Replace with your API endpoint and resource ID
  method: 'DELETE'
})
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  console.log('Resource deleted successfully');
})
.catch(error => {
  console.error('There has been a problem with your fetch operation:', error);
}); 



// In summary, the fetch API provides a modern and flexible way to make HTTP requests in JavaScript. It supports various HTTP methods (GET, POST, PUT, DELETE), allows for easy handling of JSON data, and includes built-in error handling mechanisms. By understanding these concepts and examples, you can effectively interact with APIs and build dynamic web applications.

