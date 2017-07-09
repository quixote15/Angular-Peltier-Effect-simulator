"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var temperatura_component_1 = require("../temperatura/temperatura.component");
var nivel_component_1 = require("../nivel/nivel.component");
var informacoes_component_1 = require("../informacoes/informacoes.component");
exports.router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'temperatura', component: temperatura_component_1.TempComponent },
    { path: 'nivel', component: nivel_component_1.NivelComponent },
    { path: 'informacoes', component: informacoes_component_1.InfoComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.routes.js.map