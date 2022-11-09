const Stream = require('stream')
const rs = new Stream.Readable()
const ws = new Stream.Writable()

ws._write = (chunc, encodinc, next) =>{
    console.log(chunc.toString())
    next()
}
rs.pipe(ws)
rs.push('hi!')
rs.push('ho!')
rs.push(null)