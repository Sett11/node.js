const fs = require('fs')
fs.open('./mainOs.js', 'ax', (err)=>{
    err? console.error(err):null
})