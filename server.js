const express = require('express');
const app = express();
const ejs = require('ejs')

const port = process.env.PORT || 8000;


// Set the template engine
app.listen(port, () => {
    console.log(`Server is running on the port ${port}`);
})

