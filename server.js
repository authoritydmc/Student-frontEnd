const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/out-tsc'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/out-tsc/' }
    );
});


app.listen(process.env.PORT || 8000);