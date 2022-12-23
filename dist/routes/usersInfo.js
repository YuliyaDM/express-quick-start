"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const colors_1 = __importDefault(require("colors"));
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/users/:id/:name', (req, res) => {
    const id = req.params.id;
    const name = req.params.name;
    res.render('user', { title: `User-${id} "${name}"`, id, name, active: 'users' });
    console.log(colors_1.default.bgGreen.dim.italic(` ${req.params.id} `));
});
