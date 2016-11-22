"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var PostDetailsComponent = (function () {
    function PostDetailsComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data.forEach(function (data) { return _this.post = data.post; });
        window.scrollTo(0, 0);
    };
    PostDetailsComponent.prototype.plainTextToHtml = function (text) {
        return "<p>" + text.replace(/\n/gi, "</p><p>") + "</p>";
    };
    return PostDetailsComponent;
}());
PostDetailsComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/components/post-details/post-details.component.html",
        styleUrls: ["./app/components/post-details/post-details.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], PostDetailsComponent);
exports.PostDetailsComponent = PostDetailsComponent;
//# sourceMappingURL=post-details.component.js.map