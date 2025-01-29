import http from 'node:http';

const server = http.createServer((req, res)=>{
    let reqUrl:string = (req.url as string)?.trim().toLowerCase();
    let reqMethod:string = (req.method as string)?.trim().toUpperCase();
})
