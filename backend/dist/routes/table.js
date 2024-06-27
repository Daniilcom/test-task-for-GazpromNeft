"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const jsonFilePath = path_1.default.resolve(__dirname, '../../data/tableData.json');
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    fs_1.default.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading JSON file');
            return;
        }
        const articles = JSON.parse(data);
        const paginatedArticles = articles.slice(startIndex, endIndex);
        const totalItems = articles.length;
        const totalPages = Math.ceil(totalItems / limit);
        res.json({
            page,
            limit,
            totalPages,
            totalItems,
            articles: paginatedArticles,
        });
    });
});
exports.default = router;
