const axios = require('axios');

async function postData() {
  try {
    const response = await axios.post('http://13.48.136.54:8000/api/api-code/', {
      // Add your POST data here
    }, {
      headers: {
        'Authorization': 'Bearer 40d3b9d0-30f0-4fc8-b661-75805e3e32a8',
        'Content-Type': 'application/json'
      }
    });

    console.log('Response:', response.data);
    // Handle successful response here
  } catch (error) {
    console.error('Error:', error.message);
    // Handle errors here
  }
}

// Call the postData function to execute the POST request
postData();
