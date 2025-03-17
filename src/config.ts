import path from "node:path"
import { ServerConfig } from "./types"

export enum METHODS {
    GET = 'GET',
    POST = 'POST'
}

export const ServerConfiguration:ServerConfig = {
    databasePath(filename:string):string{
        return path.join(process.cwd(), 'db', filename)
    }   
}