"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfiguration = exports.METHODS = void 0;
const node_path_1 = __importDefault(require("node:path"));
var METHODS;
(function (METHODS) {
    METHODS["GET"] = "GET";
    METHODS["POST"] = "POST";
})(METHODS || (exports.METHODS = METHODS = {}));
exports.ServerConfiguration = {
    databasePath(filename) {
        return node_path_1.default.join(process.cwd(), 'db', filename);
    }
};
