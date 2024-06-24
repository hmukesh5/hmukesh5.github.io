const fs = require('fs');
const https = require('https');
const options = {
    key: fs.readFileSync('certs/privkey.pem'),
    cert: fs.readFileSync('certs/fullchain.pem')
}

const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const { exec } = require('node:child_process');

app.use(express.json())
app.use(cors());

app.get('/', (req, res) => {
    console.log('GET request at /, sending Hello World');
    res.send('Hello World');
});

app.post('/dns_app', (req, res) => {
    console.log('running /dns_app...');

    if (!req.body.query) {
        res.send('Invalid domain/IP - no input');
        console.log('exiting, no input');
    }
    else {

        // sanitize against space and ampersand
        if (/\s|&/.test(req.body.query)) {
            res.send('Invalid domain/IP - please do not use spaces or ampersands');
            console.log('exiting, invalid characters');
            return;
        }

        const command = `DNSLookup.exe ${req.body.query} 8.8.8.8`;
        console.log("  " + command);
        child = exec(command, (error, stdout, stderr) => {
            if (error != null) {
                console.log("  error caught");
                if (stderr == '') {
                    res.send(`${stdout}`);
                    console.log("  no stderr");
                } else {
                    res.send(`Internal Server Error`);
                    console.log("  oh we in trouble - server error");
                }
            } else {
                console.log("  no error");
                res.send(`${stdout}`);
            }
        }).then(() => {
            console.log('done w /dns_app');
            child.kill();
        });
    }    
});

app.post('/http_app', (req, res) => {
    console.log('running /http_app...');

    if (!req.body.query) {
        res.send('Invalid URL - no input');
        console.log('exiting, no input');
    }
    else {

        // sanitize against space and ampersand
        if (/\s|&/.test(req.body.query)) {
            res.send('Invalid URL - please do not use spaces or ampersands');
            console.log('exiting, invalid characters');
            return;
        }

        const command = `HTTPApp.exe ${req.body.query}`;
        console.log("  " + command);
        child = exec(command, (error, stdout, stderr) => {
            if (error != null) {
                console.log("  error caught");
                if (stderr == '') {
                    res.send(`${stdout}`);
                    console.log("  no stderr");
                } else {
                    res.send(`Internal Server Error`);
                    console.log("  oh we in trouble - server error");
                }
            } else {
                console.log("  no error");
                res.send(`${stdout}`);
            }
        }).then(() => {
            console.log('done w /http_app');
            child.kill();
        });
    }    
});

https.createServer(options, app).listen(443, () => {
    console.log('HTTPS Server running on port 443');
});