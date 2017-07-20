"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routes_1 = require("./routes/app.routes");
var angular_in_memory_web_api_1 = require("angular-in-memory-web-api");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var temperatura_component_1 = require("./temperatura/temperatura.component");
var home_component_1 = require("./home/home.component");
var nivel_component_1 = require("./nivel/nivel.component");
var informacoes_component_1 = require("./informacoes/informacoes.component");
var in_memory_data_service_1 = require("./services/in-memory-data.service");
var data_service_1 = require("./services/data.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routes_1.routes,
            http_1.HttpModule,
            angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryService, { delay: 1500 }),
        ],
        declarations: [app_component_1.AppComponent,
            temperatura_component_1.TempComponent,
            home_component_1.HomeComponent,
            nivel_component_1.NivelComponent,
            informacoes_component_1.InfoComponent,
        ],
        providers: [
            data_service_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map