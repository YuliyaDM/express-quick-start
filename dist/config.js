"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const middleware_1 = require("./middleware");
const authors_1 = __importDefault(require("./routes/authors"));
const bio_1 = __importDefault(require("./routes/bio"));
const reqMethods_1 = __importDefault(require("./routes/reqMethods"));
const root_1 = __importDefault(require("./routes/root"));
const servers_1 = __importDefault(require("./routes/servers"));
const usersInfo_1 = __importDefault(require("./routes/usersInfo"));
const BodyParser = require('body-parser');
const RootDir = path_1.default.resolve();
function Init(App) {
    // static folder
    App.use(express_1.default.static(path_1.default.resolve(RootDir, 'ejs')));
    // styles folder settings
    // eslint-disable-next-line n/no-path-concat
    App.use('./styles', express_1.default.static(__dirname + '/styles/style.css'));
    // body parser
    App.use(BodyParser.urlencoded({ extended: false }));
    App.use(BodyParser.json());
    // middleware
    App.use(middleware_1.Authors);
    App.use(middleware_1.TimeRequest);
    // pages
    App.use(root_1.default);
    App.use(bio_1.default);
    App.use(authors_1.default);
    App.use(usersInfo_1.default);
    App.use(reqMethods_1.default);
    App.use(servers_1.default);
}
exports.Init = Init;
