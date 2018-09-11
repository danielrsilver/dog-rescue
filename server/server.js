const envConfigs  = require('dotenv');
envConfigs.config({ path: `${__dirname}/.env` });
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3300;

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

function defaultResponseHandler(res, json, err) {
    if (err) {
        res.send({'error': err.message || 'An error has occurred while fetching'});
    } else {
        if (json) {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify((json)));
        }
    }
};

app.use(bodyParser.json());
app.use(allowCrossDomain);
app.listen(PORT, () => console.log(`application is running on port ${PORT}`));

const API_URL = 'http://api.petfinder.com';

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/breeds', function (req, res) {
    fetch(`${API_URL}/breed.list?key=${process.env.PETFINDER_API_KEY}&animal=dog&format=json&callback=?`)
        .then(function (response) {
            if (response.status < 400) {
                return response.text();
            }else{
                throw new Error(response.statusText);
            }
        })
        .then(function (respText) {
            if (respText) {
                respText = respText.replace("?(",'').replace(');','');
                defaultResponseHandler(res, JSON.parse(respText));
            }
        })
        .catch(function (err) {
            defaultResponseHandler(res, null, err);
        });
});

app.get('/find', function (req, res) {
    fetch(`${API_URL}/pet.find?key=${process.env.PETFINDER_API_KEY}&format=json&animal=dog${getQueryParams(req.query)}`)
        .then(function (response) {
            if (response.status < 400) {
                return response.json();
            }
        })
        .then(function (respJson) {
            if (respJson) {
                defaultResponseHandler(res, respJson);
            }
        })
        .catch(function (err) {
            defaultResponseHandler(res, null, err);
        });
});

function getQueryParams(query){
    let queryUrl = '';
    for(let key in query){
        if(query[key])
            queryUrl += `&${key}=${query[key]}`
    }
    return queryUrl;
}
