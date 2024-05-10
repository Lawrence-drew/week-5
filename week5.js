/*
Questions:
Explain the steps involved in setting up a Node.js server from scratch:
1. Download and install node.js from the official website. This will also install npm.(https://nodejs.org)
2. Create a new project directory.
3. Navigate to the project directory in the terminal and run 'npm init' to create a 'package.json' file.
4. Use npm to install any required modules for the project.(npm install express) 
5. Create a new js file in your project directory. This file will contain the code for your node.js server.
6. In new js file, import the required modules, create an instance of the express application, define routes, and start the server.(node server.js)

*
The purpose of using express in setting up a server is to handle HTTP requests and responses, making it easier to create server-side logic and define routes.

*
Nodemon aids in the development process by automatically restarting the node.js application when file changes are detected.
It is significant in a node.js project for faster development, error detection, customization, improved workflow.

*/

//Write a basic Node.js endpoint that handles a GET request to fetch an array of product details (random products).
const express = require ('express')
const bodyParser = require ('body-parser')
const app = express()
const PORT = process.env.PORT || 5000

const products = [
    {id: 1, name: 'Product 1', price: 18.99},
    {id: 2, name: 'Product 2', price: 19.99},
    {id: 3, name: 'Product 3', price: 20.99}
]

app.use(bodyParser.json())

app.get('/products', (req, res)=>{
    res.json(products)
})

//Create a Node.js endpoint to handle a POST request for adding a new product to an existing array of products (random product).
app.post('/products', (req, res) => {
    const { name, price } = req.body;
    const id = products.length + 1; // Generate a unique ID
    const newProduct = { id, name, price }; // Create a single product object
    products.push(newProduct); // Add the new product to the array of products
    res.json(products); // Respond with the updated array of products
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})