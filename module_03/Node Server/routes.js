const fs = require('fs')


const requestHandler = (req, res) => {


    const url = req.url
    const method = req.method


    if (url === '/') {
        res.setHeader('content-value', 'text/html')
        res.write('<html>')
        res.write('<head><title>This is my FOrm page</title></head>')
        res.write('<body><form  action="/message" method="POST"><input name="message" type="text"></input><button>submit</form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {

        const body = []
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })

        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody)
            const message = parseBody.split('=')[1];
            fs.writeFile('message.txt', message, () => {
                req.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })

        })


    }
    res.setHeader('content-value', 'text/html')
    res.write('<html>')
    res.write('<head><title>This is my First page</title></head>')
    res.write('<body><h1>Hello, This is my NodeJs Learning File!</h1></body>')
    res.write('</html>')
    res.end();
};


module.exports = requestHandler