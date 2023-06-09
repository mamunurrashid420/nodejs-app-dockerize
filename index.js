const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) => {
    res.json({
        "hey": "NodeJs"
    })
})
app.listen(port, () => {
    const newLocal = 'Example app listening on port ${port} '
    console.log(port )
})