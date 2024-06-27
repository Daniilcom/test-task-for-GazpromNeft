"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const table_1 = __importDefault(require("./routes/table"));
const app = (0, express_1.default)();
const port = 8085;
app.use((0, cors_1.default)());
app.use('/api/articles', table_1.default);
app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});
