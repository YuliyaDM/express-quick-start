"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const express_1 = require("express");
const servers_1 = require("../controllers/servers");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/api/sites', servers_1.SitesList);
