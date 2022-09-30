const express = require('express')
const app = express()
app.all('/asd', (req, res) => {
    res.status(200).send(process.env.TEST);
})
app.listen(process.env.PORT || 3000)