"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("node:fs/promises"));
const error_1 = require("../utils/error");
const module_1 = require();
class UserController {
    constructor() {
        this.GET_USERS = function (req, res) {
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    const users = yield promises_1.default.readFile((0, module_1.databasePath)("users.json"), "utf-8");
                }
                catch (error) {
                    let err = {
                        message: error.message,
                        status: error.status
                    };
                    (0, error_1.globalError)(res, err);
                }
            });
        };
    }
}
exports.default = new UserController();
