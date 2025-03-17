import { IncomingMessage, ServerResponse } from "node:http";
import fs from "node:fs/promises"
import { Error } from "../types";
import { globalError } from "../utils/error";
import { ServerConfiguration } from "../config";
import { databasePath } = ServerConfiguration;

class UserController {
    GET_USERS:(req:IncomingMessage, res: ServerResponse<IncomingMessage>) => Promise <void>;
    constructor(){
        this.GET_USERS = async function (req, res):Promise <void>{
            try {
                const users:string = await fs.readFile(databasePath("users.json"), "utf-8")
            } catch (error) {
                let err:Error = {
                    message: (error as Error).message,
                    status: (error as Error).status
                }
                globalError(res, err)

            }
        }
    }
}
 
export default new UserController()