"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/', (req, res) => {
    console.log(req.url);
    res.render('index', { title: 'Main Page', active: 'index' });
});
