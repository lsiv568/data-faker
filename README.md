## data-faker
This is a node server used to handle RESTful requests and serve JSON data.
It uses Faker.js (https://github.com/marak/Faker.js/) to handle "fake" data creation.  

### Currently Limitations
* Only supports predefined routes
* Only supports predefined data structures
* Only supports limit query param

### Future Enhancements
* User defined support for routes (config file?)
* User defined support for returned JSON data structure
* User defined support for query params

### Example usage
* Retrieve user data via GET request: http://localhost:3000/users
* Retrieve post data, limited to 10, via GET request: http://localhost:3000/posts?limit=10



