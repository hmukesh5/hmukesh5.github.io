const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const { exec } = require('node:child_process');

app.use(express.json())

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.get('/test', (req, res) => {
    console.log('testing...');

    const command = 'Homework2.exe hmukesh.me  8.8.8.8';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.send(`<h2>Error:</h2><pre>${stderr}</pre>`);
        } else {
            res.send(`<h2>Output:</h2><pre>${stdout}</pre>`);
        }
    });
});

app.post('/run', (req, res) => {
    console.log("processing /run post request...")
    req.body;
    res.json(req.body)
    console.log("processed")
    const command = `./helloworld.exe`;

    // exec(command, (error, stdout, stderr) => {
    //     if (error) {
    //         res.send(`<h2>Error:</h2><pre>${stderr}</pre>`);
    //     } else {
    //         res.send(`<h2>Output:</h2><pre>${stdout}</pre>`);
    //     }
    // });
});

app.listen(port, () => {console.log(`server started on port ${port}`)})