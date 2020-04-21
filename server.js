const express = require('express');
const app = express();
const port = 8080;
const request = require('request');

// Setting up the public directory
app.use('/', express.static('frontend-html'));

app.listen(port, () => console.log(`listening on port ${port}!`));

app.get('/', (req, res) => {
    res.sendFile('./frontend-html/index.html', { root: __dirname });
});

app.get('/add-customer', (req, res) => {
    res.sendFile('./frontend-html/add-customer.html', { root: __dirname });
});

app.get('/passvendor', (req, res) => {
    res.sendFile('./frontend-html/passvendor.html', { root: __dirname });
});

app.get('/my-passes', (req, res) => {
    res.sendFile('./frontend-html/my-passes.html', { root: __dirname });
});

app.use('/v1', (req, res) => {
    console.log(req.url);
    let url = "http://backend-vendor.backend.svc.cluster.local:8080" + "/v1" + req.url;
    console.log(url);
    req.pipe(request(url)).pipe(res);
})

app.use('/v2', (req, res) => {
    console.log(req.url);
    let url = "http://backend-customer.backend.svc.cluster.local:8080" + "/v2" + req.url;
    req.pipe(request(url)).pipe(res);
})
