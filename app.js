const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get('*', (req, res) => {
    console.log(req.path)
    res.redirect(302, `https://www.hodlbot.io${req.path}`)
});


app.listen(port, function() {
    console.log(`Rolling on port ${port}`);
});