const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send(req.headers))

app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
