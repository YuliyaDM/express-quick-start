"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.all('/reqMethodsMain', (req, res) => {
    const url = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    const values = [...url.searchParams.values()];
    if ('GET' === req.method) {
        if (!values.length)
            res.render('reqMethodsMain', { title: 'Request Methods', active: 'reqMethods' });
        else {
            const searchParams = [];
            ([...url.searchParams.keys()]).forEach((el, index) => {
                const value = [...url.searchParams.values()][index];
                if (value)
                    searchParams.push({ [el]: value });
            });
            console.log(searchParams);
            res.render('reqMethodsKeys', { title: 'Req Methods', active: 'reqMethods', params: searchParams });
        }
    }
    if ('POST' === req.method) {
        res.send(req.body);
    }
});
