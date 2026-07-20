import axios from "axios"; // ES6 modules

// Simple GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    // Success - response.data contains the actual data
    console.log('Data:', response.data);
    console.log('Status:', response.status);
    console.log('Headers:', response.headers);
  })
  .catch(function (error) {
    // Error handling
    console.error('Error:', error);
  });