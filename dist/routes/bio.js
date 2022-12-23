"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const __1 = require("..");
const router = (0, express_1.Router)();
exports.default = router;
router.get(['/bio', '/about', '/biography'], (req, res) => {
    const author = `${__1.App.locals.first_name} ${__1.App.locals.last_name}`;
    res.render('biography', { title: 'Biography', author, usersId: req.params.usersId, active: 'bio' });
});
