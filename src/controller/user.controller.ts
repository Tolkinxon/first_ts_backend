import { IncomingMessage, ServerResponse } from "node:http";
import { Error } from "../utils/types";
import { globalError } from "../utils/error";

class UserController {
    GET_USERS:(req:IncomingMessage, res: ServerResponse<IncomingMessage>) => Promise <void>;
    constructor(){
        this.GET_USERS = async function (req, res){
            try {
                
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