"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PublicModule = void 0;
var core_1 = require("@angular/core");
var public_routing_module_1 = require("./public-routing.module");
var shared_module_1 = require("../core/shared/shared.module");
var public_component_1 = require("./public.component");
var home_component_1 = require("./home/containers/home.component");
var login_component_1 = require("./login/containers/login.component");
var register_component_1 = require("./register/containers/register.component");
var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = __decorate([
        core_1.NgModule({
            imports: [
                public_routing_module_1.PublicRoutingModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                public_component_1.PublicComponent,
                home_component_1.HomeComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
            ],
            exports: [],
            providers: []
        })
    ], PublicModule);
    return PublicModule;
}());
exports.PublicModule = PublicModule;
