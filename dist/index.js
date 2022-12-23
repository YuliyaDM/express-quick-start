"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const colors_1 = __importDefault(require("colors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = require("./config");
const PORT = (_a = process.env.port) !== null && _a !== void 0 ? _a : 3000;
exports.App = (0, express_1.default)();
const RootDir = path_1.default.resolve();
(0, config_1.Init)(exports.App);
exports.App.locals.first_name = 'Julia';
exports.App.locals.last_name = 'Pirogova';
exports.App.set('view engine', 'ejs');
exports.App.set('views', path_1.default.resolve(RootDir, 'ejs/pages'));
exports.App.listen(PORT, () => {
    console.log(colors_1.default.bgRed.blue.bold(`Server has launched on port ${PORT}...`));
});
