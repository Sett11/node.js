const http = require('http')
const fs = require('fs')
const hostname = '127.0.0.1'
const port = 3011

fs.open('./index.js', 'w+', (err)=>{
    err?console.error(err):null
    return
})
const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('content-Type', 'text/plain')
    res.end('Hello World')
})
server.listen(port, hostname, ()=>{
    console.log(`Server running at http:\\${hostname}:${port}`)
})


