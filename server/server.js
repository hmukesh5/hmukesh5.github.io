const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { exec } = require('node:child_process');

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
});

app.post('/test', (req, res) => {
    console.log('testing...');

    if (!req.body.query) {
        res.send('Invalid domain/IP');
        console.log('tested');
    }
    else {

        // sanitize against space and ampersand
        if (/\s|&/.test(req.body.query)) {
            res.send('Invalid domain/IP. Please do not use spaces or special characters.');
            return;
        }

        const command = `DNSLookup.exe ${req.body.query} 8.8.8.8`;
        console.log(command);
        child = exec(command, (error, stdout, stderr) => {
            if (error != null) {
                console.log("error caught");
                if (stderr == '') {
                    res.send(`${stdout}`);    
                } else {
                    res.send(`Internal Server Error`);
                }
            } else {
                console.log("no error")
                res.send(`${stdout}`);
            }
        });

        console.log('tested');
    }

    
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