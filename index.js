const express = require('express');
const app = express();

const port = 3000;

app.get('/login', (req, res) => {

    let requestData = req;
    console.log(requestData);
    res.json({
        sucess: true,
        message: 'Authentication successfully',
        // token: token
    })
    // res.send('Hello world')
})

app.post('/', (req, res) => {

    let requestData = req;
    console.log(requestData);
    res.send("Got a post request")
})

app.put('/user', (req, res) => {
    res.send('Got a put request at user')
})

app.delete('/user', (req, res) => {
    res.send('Got a delete request at user');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));