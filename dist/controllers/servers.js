"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SitesList = exports.SITES = void 0;
exports.SITES = [
    { id: 1, name: 'YouTube', status: 'working' },
    { id: 2, name: 'Twitter', status: 'not working' },
    { id: 3, name: 'GitHub', status: 'working' }
];
function SitesList(req, res) {
    res.status(200).json(exports.SITES);
}
exports.SitesList = SitesList;
