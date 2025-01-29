import { config } from 'dotenv';
config();
import http from 'node:http';
const PORT:number | string = process.env.PORT || 5000;

const server = http.createServer((req, res)=>{
    let reqUrl:string = (req.url as string)?.trim().toLowerCase();
    let reqMethod:string = (req.method as string)?.trim().toUpperCase();
});

server.listen(PORT, ()=>{
    console.log(`Server successfully initialized on port ${PORT} 😊`);
})
