const http = require('http')
const express = require('express')

const app = express()

app.use('/login', (req, res, next) => {
	console.log("middleware")
})

app.use('/signup', (req, res, next) => {
	console.log("second middleware")
})

app.use('/', (req, res, next) => {
	console.log("middleware")
})

const server = http.createServer(app)

server.listen(3000)