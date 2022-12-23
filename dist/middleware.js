"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeRequest = exports.Authors = void 0;
function Authors(req, res, next) {
    const authors = ['Julia', 'Zahar', 'Ksusha'];
    req.body.authors = authors;
    next();
}
exports.Authors = Authors;
function TimeRequest(req, res, next) {
    const date = new Date();
    req.body.date = date;
    next();
}
exports.TimeRequest = TimeRequest;
