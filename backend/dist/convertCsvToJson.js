"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const csvFilePath = path_1.default.join(__dirname, '../data/tableData.csv');
const jsonFilePath = path_1.default.join(__dirname, '../data/tableData.json');
const results = [];
fs_1.default.createReadStream(csvFilePath)
    .pipe((0, csv_parser_1.default)())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    fs_1.default.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        }
        else {
            console.log('JSON file has been saved.');
        }
    });
});
