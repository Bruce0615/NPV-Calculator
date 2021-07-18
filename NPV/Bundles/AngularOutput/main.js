(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/accordion-panel/accordion-panel.component.html":
/*!****************************************************************!*\
  !*** ./src/app/accordion-panel/accordion-panel.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default collapsible-panel\">\n    <div class=\"panel-heading\" (click)=\"expanded = !expanded;\" [hidden]=\"!showHeading\">\n        <div class=\"icon-container\">\n            <i class=\"panel-icon\" [class]=\"panelIcon\"></i>            \n        </div>\n        <span>{{header}}</span>\n        <i  class=\"toggle-icon fa \"[ngClass]=\"{'fa-minus': expanded, 'fa-plus': !expanded }\"></i>\n    </div>\n    <div class=\"panel-container\" [hidden]=\"!expanded\">\n        <div class=\"panel-body\">\n            <ng-content></ng-content>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/accordion-panel/accordion-panel.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/accordion-panel/accordion-panel.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel {\n  margin-bottom: 10px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-default {\n  border-color: #ddd; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.panel.collapsible-panel > .panel-heading {\n  padding-right: 30px;\n  position: relative;\n  cursor: pointer; }\n\n.panel.collapsible-panel > .panel-heading {\n  background-color: #fff;\n  color: #444;\n  border-bottom: 1px solid #f4f4f4;\n  padding-left: 45px; }\n\n.panel.collapsible-panel .panel-heading div.icon-container {\n  width: 45px;\n  position: absolute;\n  left: 0;\n  /* top: 11px; */\n  text-align: center; }\n\n.panel.collapsible-panel .panel-heading i.toggle-icon {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  font-size: 12px; }\n\n.panel-body {\n  padding: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi1wYW5lbC9DOlxcVXNlcnNcXGJ5dWVcXERvY3VtZW50c1xcUmVzZWFyY2hcXFJlcG9zaXRvcnlcXE5QVlxcTlBWXFxBbmd1bGFyXFxzcmNcXGFwcC9hY2NvcmRpb24tcGFuZWxcXGFjY29yZGlvbi1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFtQjtFQUNuQix1QkFBc0I7RUFDdEIsOEJBQTZCO0VBQzdCLG1CQUFrQjtFQUVsQiwwQ0FBcUMsRUFFeEM7O0FBRUQ7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxtQkFBa0I7RUFDbEIscUNBQW9DO0VBQ3BDLDRCQUEyQjtFQUMzQiw2QkFBNEIsRUFDL0I7O0FBRUQ7RUFDSSxvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksdUJBQXNCO0VBQ3RCLFlBQVc7RUFDWCxpQ0FBZ0M7RUFDaEMsbUJBQWtCLEVBQ3JCOztBQUVEO0VBQ0ksWUFBVztFQUNYLG1CQUFrQjtFQUNsQixRQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLG1CQUFrQjtFQUNsQixZQUFXO0VBQ1gsVUFBUztFQUNULGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksY0FBYSxFQUNoQiIsImZpbGUiOiJhY2NvcmRpb24tcGFuZWwvYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhbmVsIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDUpO1xyXG5cclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGluZyB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAzcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogM3B4O1xyXG59XHJcblxyXG4ucGFuZWwuY29sbGFwc2libGUtcGFuZWw+LnBhbmVsLWhlYWRpbmcge1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhbmVsLmNvbGxhcHNpYmxlLXBhbmVsPi5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjRmNGY0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0NXB4O1xyXG59XHJcblxyXG4ucGFuZWwuY29sbGFwc2libGUtcGFuZWwgLnBhbmVsLWhlYWRpbmcgZGl2Lmljb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIHRvcDogMTFweDsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBhbmVsLmNvbGxhcHNpYmxlLXBhbmVsIC5wYW5lbC1oZWFkaW5nIGkudG9nZ2xlLWljb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLnBhbmVsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/accordion-panel/accordion-panel.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/accordion-panel/accordion-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: AccordionPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionPanelComponent", function() { return AccordionPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccordionPanelComponent = /** @class */ (function () {
    function AccordionPanelComponent() {
        this.panelIcon = "";
        this.showHeading = true;
        this.expanded = true;
    }
    AccordionPanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionPanelComponent.prototype, "header", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AccordionPanelComponent.prototype, "panelIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AccordionPanelComponent.prototype, "showHeading", void 0);
    AccordionPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'accordion-panel',
            template: __webpack_require__(/*! ./accordion-panel.component.html */ "./src/app/accordion-panel/accordion-panel.component.html"),
            styles: [__webpack_require__(/*! ./accordion-panel.component.scss */ "./src/app/accordion-panel/accordion-panel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccordionPanelComponent);
    return AccordionPanelComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<main class=\"container\" role=\"main\"> \n    <div class=\"wrapper\">\n        <form [formGroup]=\"npvForm\" class=\"form-horizontal\"> \n            <div class=\"content-header\">\n                <h2>Net Present Value(NPV) Calculator</h2>\n            </div>\n            <div class=\"content\">\n                <div class=\"form-horizontal\">    \n                    <div class=\"panel-group\">\n                        <accordion-panel [showHeading]=\"false\">\n                                                \n                                <div class=\"form-group row\" [ngClass]=\"{'has-error': submitted && f.initialValue.errors}\">\n                                    <label class=\"col-xs-12 col-sm-3 control-label\">Initial Value</label>\n                                    <div class=\"input-group col-xs-12 col-sm-9\">\n                                        <span class=\"input-group-addon\">$</span>\n                                        <input type=\"number\" class=\"form-control\" min = 0 step=\"0.01\" formControlName=\"initialValue\" numeric decimals=\"2\">\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\" [ngClass]=\"{'has-error': submitted && f.lowerBoundDiscountRate.errors}\">\n                                    <label class=\"col-xs-12 col-sm-3 control-label\">Lower Bound Discount Rate</label>\n                                    <div class=\"input-group col-xs-12 col-sm-9\">\n                                        <input type=\"number\" class=\"form-control\" step=\"0.01\" formControlName=\"lowerBoundDiscountRate\" numeric decimals=\"2\">\n                                        <span class=\"input-group-addon\">%</span>\n                                    </div>\n                                </div>\n                                <div class=\"form-group row\" [ngClass]=\"{'has-error': submitted && f.upperBoundDiscountRate.errors}\">\n                                    <label class=\"col-xs-12 col-sm-3 control-label\">Upper Bound Discount Rate</label>\n                                    <div class=\"input-group col-xs-12 col-sm-9\">\n                                        <input type=\"number\" class=\"form-control\" step=\"0.01\" formControlName=\"upperBoundDiscountRate\" numeric decimals=\"2\">\n                                        <span class=\"input-group-addon\">%</span>  \n                                        <div *ngIf=\"submitted && f.upperBoundDiscountRate.errors\" class=\" col-xs-12 col-sm-9 invalid-feedback\">\n                                            <div *ngIf=\"f.upperBoundDiscountRate.errors.lessThan\">upper bound discounter rate should be greater than lower bound discounter rate</div>                                            \n                                        </div> \n                                    </div> \n                                </div>\n                                <div class=\"form-group row\" [ngClass]=\"{'has-error': submitted && f.discountRateIncrement.errors}\">\n                                    <label class=\"col-xs-12 col-sm-3 control-label\">Discount Rate Increment</label>\n                                    <div class=\"input-group col-xs-12 col-sm-9\">\n                                        <input type=\"number\" class=\"form-control\" step=\"0.01\" formControlName=\"discountRateIncrement\" numeric decimals=\"2\" > \n                                        <span class=\"input-group-addon\">%</span>                                     \n                                    </div>\n                                </div> \n                                <h3>Cash Flows</h3>\n                                <div *ngFor=\"let cashflow of cashflows.controls; let i=index\" formArrayName=\"cashflows\">\n                                    <div [formGroupName]=\"i\">\n                                        <div class=\"form-group row\" [ngClass]=\"{'has-error': submitted && f.cashflows.controls[i].controls.value.errors}\">\n                                            <div class=\"input-group col-xs-12\">\n                                                <span class=\"input-group-addon\">Year {{i + 1}}: $</span>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"value\">\n                                                <span class=\"input-group-addon\"><a (click)=\"removeCashflow(i)\"><i class=\"fa fa-trash-o fa-lg pull-right\"></i></a></span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>  \n                                <div class=\"form-group\">\n                                    <div class=\"col-xs-12\">\n                                        <div class=\"pull-right\">\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"addCashflow()\">Add Year</button>   \n                                            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"onSubmit()\">Calculate</button> \n                                        </div>\n                                    </div>\n                                </div>\n                        </accordion-panel> \n\n                        <accordion-panel [showHeading]=\"false\">\n                            <h3>NPV Results</h3>\n                            <table class=\"table table-striped table-bordered table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Discount Rate</th>\n                                        <th>NPV </th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <ng-container *ngIf=\"calculation\">\n                                        <tr *ngFor=\"let result of calculation.npvResults\" [ngStyle]=\"setStyle(result.npv)\">\n                                            <td>{{result.discountRate}}%</td>\n                                            <td>{{result.npv | currency}}</td>\n                                        </tr>                                        \n                                    </ng-container>\n                                   \n                                </tbody>\n                            </table>                           \n\n                        </accordion-panel>\n                       \n                    </div>\n                </div>     \n            </div>   \n        </form>        \n    </div> \n\n</main>\n    \n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _models_npv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/npv */ "./src/app/models/npv.ts");
/* harmony import */ var _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/custom-validation.service */ "./src/app/services/custom-validation.service.ts");
/* harmony import */ var _services_npv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/npv.service */ "./src/app/services/npv.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(fb, npvService, customValidator) {
        this.fb = fb;
        this.npvService = npvService;
        this.customValidator = customValidator;
        this.title = 'NPV';
        this.submitted = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.npvForm = this.fb.group({
            initialValue: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lowerBoundDiscountRate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            upperBoundDiscountRate: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            discountRateIncrement: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            cashflows: this.fb.array([
                this.fb.group({
                    value: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
                })
            ])
        });
        this.npvForm.get('upperBoundDiscountRate').setValidators(this.customValidator.greaterThan('lowerBoundDiscountRate'));
    };
    Object.defineProperty(AppComponent.prototype, "f", {
        get: function () { return this.npvForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "cashflows", {
        get: function () {
            return this.npvForm.get("cashflows");
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.npvForm.invalid) {
            return;
        }
        var parameter = new _models_npv__WEBPACK_IMPORTED_MODULE_2__["NPVParameter"]();
        parameter.cashflows = this.npvForm.value.cashflows.map(function (x) { return x.value; });
        parameter.initialValue = this.npvForm.value.initialValue;
        parameter.lowerBoundDiscountRate = this.npvForm.value.lowerBoundDiscountRate;
        parameter.upperBoundDiscountRate = this.npvForm.value.upperBoundDiscountRate;
        ;
        parameter.discountRateIncrement = this.npvForm.value.discountRateIncrement;
        this.npvService.calculate(parameter).subscribe(function (val) {
            _this.calculation = val;
        });
    };
    AppComponent.prototype.addCashflow = function () {
        this.cashflows.push(this.fb.group({
            value: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }));
    };
    AppComponent.prototype.removeCashflow = function (index) {
        this.cashflows.removeAt(index);
    };
    AppComponent.prototype.setStyle = function (npv) {
        if (npv < 0) {
            return { 'color': 'red' };
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_npv_service__WEBPACK_IMPORTED_MODULE_4__["NpvService"],
            _services_custom_validation_service__WEBPACK_IMPORTED_MODULE_3__["CustomValidationService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _accordion_panel_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accordion-panel/accordion-panel.component */ "./src/app/accordion-panel/accordion-panel.component.ts");
/* harmony import */ var _numeric_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./numeric.directive */ "./src/app/numeric.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _accordion_panel_accordion_panel_component__WEBPACK_IMPORTED_MODULE_5__["AccordionPanelComponent"],
                _numeric_directive__WEBPACK_IMPORTED_MODULE_6__["NumericDirective"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/models/npv.ts":
/*!*******************************!*\
  !*** ./src/app/models/npv.ts ***!
  \*******************************/
/*! exports provided: NPVParameter, NPVResult, Calculation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPVParameter", function() { return NPVParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NPVResult", function() { return NPVResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Calculation", function() { return Calculation; });
var NPVParameter = /** @class */ (function () {
    function NPVParameter() {
    }
    return NPVParameter;
}());

var NPVResult = /** @class */ (function () {
    function NPVResult() {
    }
    return NPVResult;
}());

var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    return Calculation;
}());



/***/ }),

/***/ "./src/app/numeric.directive.ts":
/*!**************************************!*\
  !*** ./src/app/numeric.directive.ts ***!
  \**************************************/
/*! exports provided: NumericDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumericDirective", function() { return NumericDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumericDirective = /** @class */ (function () {
    function NumericDirective(el) {
        this.el = el;
        this.decimals = 0;
    }
    NumericDirective.prototype.check = function (value) {
        if (this.decimals <= 0) {
            return String(value).match(new RegExp(/^\d+$/));
        }
        else {
            var regExpString = "^\\s*((\\d+(\\.\\d{0," +
                this.decimals +
                "})?)|((\\d*(\\.\\d{1," +
                this.decimals +
                "}))))\\s*$";
            return String(value).match(new RegExp(regExpString));
        }
    };
    NumericDirective.prototype.run = function (oldValue) {
        var _this = this;
        setTimeout(function () {
            var currentValue = _this.el.nativeElement.value;
            if (currentValue !== '' && !_this.check(currentValue)) {
                _this.el.nativeElement.value = oldValue;
            }
        });
    };
    NumericDirective.prototype.onKeyDown = function (event) {
        this.run(this.el.nativeElement.value);
    };
    NumericDirective.prototype.onPaste = function (event) {
        this.run(this.el.nativeElement.value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("decimals"),
        __metadata("design:type", Number)
    ], NumericDirective.prototype, "decimals", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("keydown", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onKeyDown", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("paste", ["$event"]),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [ClipboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumericDirective.prototype, "onPaste", null);
    NumericDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numeric]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NumericDirective);
    return NumericDirective;
}());



/***/ }),

/***/ "./src/app/services/custom-validation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validation.service.ts ***!
  \*******************************************************/
/*! exports provided: CustomValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidationService", function() { return CustomValidationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomValidationService = /** @class */ (function () {
    function CustomValidationService() {
    }
    CustomValidationService.prototype.greaterThan = function (field) {
        return function (control) {
            var group = control.parent;
            var fieldToCompare = group.get(field);
            var isLessThan = Number(fieldToCompare.value) >= Number(control.value);
            return isLessThan ? { 'lessThan': { value: control.value } } : null;
        };
    };
    CustomValidationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CustomValidationService);
    return CustomValidationService;
}());



/***/ }),

/***/ "./src/app/services/npv.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/npv.service.ts ***!
  \*****************************************/
/*! exports provided: NpvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpvService", function() { return NpvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NpvService = /** @class */ (function () {
    function NpvService(http) {
        this.http = http;
        this.apiPath = 'https://localhost:44380/';
    }
    NpvService.prototype.calculate = function (parameter) {
        return this.http.post(this.apiPath + 'api/npv/calculation', parameter);
    };
    NpvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NpvService);
    return NpvService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\byue\Documents\Research\Repository\NPV\NPV\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map