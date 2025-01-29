"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const node_http_1 = __importDefault(require("node:http"));
const PORT = process.env.PORT || 5000;
const server = node_http_1.default.createServer((req, res) => {
    var _a, _b;
    let reqUrl = (_a = req.url) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase();
    let reqMethod = (_b = req.method) === null || _b === void 0 ? void 0 : _b.trim().toUpperCase();
});
server.listen(PORT, () => {
    console.log(`Server successfully initialized on port ${PORT} 😊`);
});
