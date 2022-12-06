// importando modulos
const http = require('http')
const URL = require('url')
const fs = require('fs')
const path = require('path')
// importando docuemtnos do urls.json
const data = require('./urls.json')

// colocando o servidor para rodar na porta 3000
http.createServer((req, res) => {
    const { name, url, del } = URL.parse(req.url, true).query
    if (!name || !url) 
        return res.end('show')
    if (del)
        return res.end('delete')
    
    return res.end('delete')
    // res.end(JSON.stringify(data))
}).listen(3500, () => console.log("API is Running..."))