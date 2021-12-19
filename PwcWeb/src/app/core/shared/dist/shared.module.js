"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SharedModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var router_1 = require("@angular/router");
var not_found_component_1 = require("./components/not-found/not-found.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var select_1 = require("@angular/material/select");
var input_1 = require("@angular/material/input");
var button_1 = require("@angular/material/button");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var carousel_component_1 = require("./components/carousel/carousel.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
            ],
            declarations: [
                not_found_component_1.NotFoundComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.CarouselComponent,
            ],
            exports: [
                common_1.CommonModule,
                http_1.HttpClientModule,
                router_1.RouterModule,
                not_found_component_1.NotFoundComponent,
                header_component_1.HeaderComponent,
                footer_component_1.FooterComponent,
                carousel_component_1.CarouselComponent,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                select_1.MatSelectModule,
                input_1.MatInputModule,
                button_1.MatButtonModule,
            ],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
