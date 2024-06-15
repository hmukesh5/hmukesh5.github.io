const express = require('express');
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.post('/run', (req, res) => {
    req.body;
    res.json(req.body)
    // const command = `./your_cpp_program ${args}`;

    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         res.send(`<h2>Error:</h2><pre>${stderr}</pre>`);
    //     } else {
    //         res.send(`<h2>Output:</h2><pre>${stdout}</pre>`);
    //     }
    // });
});

app.listen(5000, () => {console.log("server started on port 5000")})