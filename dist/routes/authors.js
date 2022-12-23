"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/authors', (req, res) => {
    const { authors } = req.body;
    res.render('authors', { title: 'Authors', authorsList: authors, active: 'authors' });
});
