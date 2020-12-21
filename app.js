const http = require('http');
const express = require('express')

const app = express()

app.use((req, res, next) => {
    console.log("middleware")
    next()
})

app.use((req, res, next) => {
    console.log("one more middleware")
})

const server = http.createServer(app)

server.listen(3000)