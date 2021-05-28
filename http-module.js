const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to our page')
    }
    if(req.url === '/about'){
        res.end('Welcome to about')
    }
    res.end(`
    <h1>Oops !</h1>
    <p>We cant find the page that you are loofing for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000)