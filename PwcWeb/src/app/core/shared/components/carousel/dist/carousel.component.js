"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarouselComponent = void 0;
var core_1 = require("@angular/core");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
        this.height = '50%';
        this.items = [];
        this.currentPosition = 0;
    }
    CarouselComponent.prototype.newMethod = function () {
        return "{'property': expression}";
    };
    CarouselComponent.prototype.ngOnInit = function () {
        this.items.map(function (i, index) {
            i.id = index;
            i.marginLeft = 0;
        });
    };
    CarouselComponent.prototype.setCurrentPosition = function (position) {
        this.currentPosition = position;
        this.items.find(function (i) { return i.id === 0; }).marginLeft = -100 * position;
    };
    CarouselComponent.prototype.setNext = function () {
        var finalPercentage = 0;
        var nextPosition = this.currentPosition + 1;
        if (nextPosition <= this.items.length - 1) {
            finalPercentage = -100 * nextPosition;
        }
        else {
            nextPosition = 0;
        }
        this.items.find(function (i) { return i.id === 0; }).marginLeft = finalPercentage;
        this.currentPosition = nextPosition;
    };
    CarouselComponent.prototype.setBack = function () {
        var finalPercentage = 0;
        var backPosition = this.currentPosition - 1;
        if (backPosition > 0) {
            finalPercentage = -100 * backPosition;
        }
        else {
            backPosition = this.items.length;
        }
        this.items.find(function (i) { return i.id === 0; }).marginLeft = finalPercentage;
        this.currentPosition = backPosition;
    };
    __decorate([
        core_1.Input()
    ], CarouselComponent.prototype, "height");
    __decorate([
        core_1.Input()
    ], CarouselComponent.prototype, "items");
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss']
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
