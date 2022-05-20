"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoute {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.json({ message: 'API REST at : http://localhost:3000/api/games' }));
    }
}
const indexRoute = new IndexRoute();
exports.default = indexRoute.router;
