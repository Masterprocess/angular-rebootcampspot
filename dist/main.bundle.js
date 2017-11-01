webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin-center/admin-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-center/admin-center.component.html":
/***/ (function(module, exports) {

module.exports = "<p>admin center works!</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin-center/admin-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminCenterComponent = (function () {
    function AdminCenterComponent() {
        this._opened = true;
        this._modeNum = 0;
        this._positionNum = 0;
        this._dock = true;
        this._closeOnClickOutside = false;
        this._closeOnClickBackdrop = false;
        this._showBackdrop = false;
        this._animate = true;
        this._trapFocus = true;
        this._autoFocus = true;
        this._keyClose = false;
        this._autoCollapseHeight = null;
        this._autoCollapseWidth = null;
        this._MODES = ['over', 'push', 'slide'];
        this._POSITIONS = ['left', 'right', 'top', 'bottom'];
    }
    AdminCenterComponent.prototype.ngOnInit = function () {
    };
    AdminCenterComponent.prototype._toggleOpened = function () {
        this._opened = !this._opened;
    };
    AdminCenterComponent.prototype._toggleMode = function () {
        this._modeNum++;
        if (this._modeNum === this._MODES.length) {
            this._modeNum = 0;
        }
    };
    AdminCenterComponent.prototype._toggleAutoCollapseHeight = function () {
        this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
    };
    AdminCenterComponent.prototype._toggleAutoCollapseWidth = function () {
        this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
    };
    AdminCenterComponent.prototype._togglePosition = function () {
        this._positionNum++;
        if (this._positionNum === this._POSITIONS.length) {
            this._positionNum = 0;
        }
    };
    AdminCenterComponent.prototype._toggleDock = function () {
        this._dock = !this._dock;
    };
    AdminCenterComponent.prototype._toggleCloseOnClickOutside = function () {
        this._closeOnClickOutside = !this._closeOnClickOutside;
    };
    AdminCenterComponent.prototype._toggleCloseOnClickBackdrop = function () {
        this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
    };
    AdminCenterComponent.prototype._toggleShowBackdrop = function () {
        this._showBackdrop = !this._showBackdrop;
    };
    AdminCenterComponent.prototype._toggleAnimate = function () {
        this._animate = !this._animate;
    };
    AdminCenterComponent.prototype._toggleTrapFocus = function () {
        this._trapFocus = !this._trapFocus;
    };
    AdminCenterComponent.prototype._toggleAutoFocus = function () {
        this._autoFocus = !this._autoFocus;
    };
    AdminCenterComponent.prototype._toggleKeyClose = function () {
        this._keyClose = !this._keyClose;
    };
    AdminCenterComponent.prototype._onOpenStart = function () {
        console.info('Sidebar opening');
    };
    AdminCenterComponent.prototype._onOpened = function () {
        console.info('Sidebar opened');
    };
    AdminCenterComponent.prototype._onCloseStart = function () {
        console.info('Sidebar closing');
    };
    AdminCenterComponent.prototype._onClosed = function () {
        console.info('Sidebar closed');
    };
    return AdminCenterComponent;
}());
AdminCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin-center',
        template: __webpack_require__("../../../../../src/app/admin-center/admin-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin-center/admin-center.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AdminCenterComponent);

//# sourceMappingURL=admin-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_center_admin_center_component__ = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__student_center_student_center_component__ = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__student_creation_student_creation_component__ = __webpack_require__("../../../../../src/app/student-creation/student-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_redirect_user_redirect_component__ = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_2__admin_center_admin_center_component__["a" /* AdminCenterComponent */] },
    { path: 'student', component: __WEBPACK_IMPORTED_MODULE_3__student_center_student_center_component__["a" /* StudentCenterComponent */] },
    { path: 'buildstudent', component: __WEBPACK_IMPORTED_MODULE_5__student_creation_student_creation_component__["a" /* StudentCreationComponent */] },
    { path: 'redirect', component: __WEBPACK_IMPORTED_MODULE_6__user_redirect_user_redirect_component__["a" /* UserRedirectComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ng-sidebar-container {\n    height: 100vh;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_calendar__ = __webpack_require__("../../../../angular-calendar/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__admin_center_admin_center_component__ = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__student_center_student_center_component__ = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__calendar_calendar_component__ = __webpack_require__("../../../../../src/app/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidebar_nav_sidebar_nav_component__ = __webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__sidebar_nav_collapsed_sidebar_nav_collapsed_component__ = __webpack_require__("../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__student_creation_student_creation_component__ = __webpack_require__("../../../../../src/app/student-creation/student-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__class_creation_class_creation_component__ = __webpack_require__("../../../../../src/app/class-creation/class-creation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__class_list_class_list_component__ = __webpack_require__("../../../../../src/app/class-list/class-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__homework_list_homework_list_component__ = __webpack_require__("../../../../../src/app/homework-list/homework-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__user_redirect_user_redirect_component__ = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__admin_center_admin_center_component__["a" /* AdminCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__student_center_student_center_component__["a" /* StudentCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sidebar_nav_sidebar_nav_component__["a" /* SidebarNavComponent */],
            __WEBPACK_IMPORTED_MODULE_15__sidebar_nav_collapsed_sidebar_nav_collapsed_component__["a" /* SidebarNavCollapsedComponent */],
            __WEBPACK_IMPORTED_MODULE_16__student_creation_student_creation_component__["a" /* StudentCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_18__class_creation_class_creation_component__["a" /* ClassCreationComponent */],
            __WEBPACK_IMPORTED_MODULE_19__class_list_class_list_component__["a" /* ClassListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__homework_list_homework_list_component__["a" /* HomeworkListComponent */],
            __WEBPACK_IMPORTED_MODULE_21__user_redirect_user_redirect_component__["a" /* UserRedirectComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_6_angular_calendar__["a" /* CalendarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_ng_sidebar__["SidebarModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatProgressBarModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<mwl-calendar-month-view\n[viewDate]=\"viewDate\"\n[events]=\"events\">\n</mwl-calendar-month-view>"

/***/ }),

/***/ "../../../../../src/app/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarComponent = (function () {
    function CalendarComponent() {
        this.viewDate = new Date();
        this.events = [];
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    return CalendarComponent;
}());
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calendar/calendar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CalendarComponent);

//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/class-creation/class-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class-creation/class-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n\t<div class=\"row\"><div class=\"col s12\"><h1>Create a class!</h1></div></div>\n\t<div class=\"row\">\n\t\t\t<form class=\"col s12\" #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t<i class=\"material-icons prefix\">account_circle</i>\n\t\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" required name=\"fistname\" ngModel>\n\t\t\t\t\t\t<label for=\"first_name\">First Name</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t\t\t<input id=\"last_name\" type=\"text\" class=\"validate\" required name=\"lastname\" ngModel>\n\t\t\t\t\t\t<label for=\"last_name\">Last Name</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<i class=\"material-icons prefix\">email</i>\n\t\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" required name=\"email\" ngModel>\n\t\t\t\t\t\t<label for=\"email\">Email</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<p>\n\t\t\t\t\t\t<input name=\"group1\" type=\"radio\" id=\"test1\" required [(ngModel)]=\"usertype\" value=\"admin\"/>\n\t\t\t\t\t\t<label for=\"test1\">Admin</label>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input name=\"group1\" type=\"radio\" id=\"test2\" required [(ngModel)]=\"user.utype\" value=\"teacher\"/>\n\t\t\t\t\t\t<label for=\"test2\">Teacher</label>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"test3\" required [(ngModel)]=\"user.utype\" value=\"student\"/>\n\t\t\t\t\t\t<label for=\"test3\">Student</label>\n\t\t\t\t\t</p>\n\n\t\t\t</form>\n\n\t</div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/class-creation/class-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassCreationComponent = (function () {
    function ClassCreationComponent() {
    }
    ClassCreationComponent.prototype.ngOnInit = function () {
    };
    return ClassCreationComponent;
}());
ClassCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-class-creation',
        template: __webpack_require__("../../../../../src/app/class-creation/class-creation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/class-creation/class-creation.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClassCreationComponent);

//# sourceMappingURL=class-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/class-list/class-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <table id=\"table\" class=\"responsive-table table-hover table-mc-light-blue\">\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Date</th>\n        <th>Time</th>\n        <th>Topic</th>\n        <th>Info</th>\n      </tr>\n    </thead> \n    <tbody>\n      <tr>\n        <td data-title=\"ID\">1</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 1.1 : The Zen of Coding</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>      \n      </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">2</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 1.2 : Git'n Pro with HTML and CSS</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">3</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 1.3 : Heroes of CSS</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">4</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 2.1 : Going Live</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">5</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 2.2 : Down and Dirty CSS</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">6</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 2.3 : Layouts with Bootstrap</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">7</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 3.1 : Joys of JavaScript</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">8</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 3.2 : Jumping for JS</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">9</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 3.3 : JavaScript Juggernauts</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n        <td data-title=\"ID\">10</td>\n        <td data-title=\"Date\">11/04/2017</td>\n        <td data-title=\"Time\">6:30-9:30</td>\n        <td data-title=\"Topic\">Lesson 4.1 : jQuery Begins</td>        \n        <td data-title=\"Info\">\n        <a href=\"#\" target=\"_blank\">Info</a>\n        </td>\n      </tr>\n      <tr>\n    </tbody>\n  </table>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/class-list/class-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html {\n  background: #ffffff;\n  height: 100%; }\n\ntr {\n  background: linear-gradient(#62c8f3, #5f6568); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class-list/class-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClassListComponent = (function () {
    function ClassListComponent() {
    }
    ClassListComponent.prototype.ngOnInit = function () {
    };
    return ClassListComponent;
}());
ClassListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'class-list',
        template: __webpack_require__("../../../../../src/app/class-list/class-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/class-list/class-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ClassListComponent);

//# sourceMappingURL=class-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/homework-list/homework-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homework-list/homework-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  homework-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/homework-list/homework-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeworkListComponent = (function () {
    function HomeworkListComponent() {
    }
    HomeworkListComponent.prototype.ngOnInit = function () {
    };
    return HomeworkListComponent;
}());
HomeworkListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-homework-list',
        template: __webpack_require__("../../../../../src/app/homework-list/homework-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homework-list/homework-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeworkListComponent);

//# sourceMappingURL=homework-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section grey lighten-3\">\n  <div class=\"row container\">\n    <h2 class=\"header\">ReBootcampSpot</h2>\n  <p class=\"grey-text text-darken-3 lighten-3\">A better bootcampspot, for both students and administrators</p>\n  </div>\n <div class=\"container align-center\"> \n  <h5>Sign In</h5>\t\t\t\n  <div id=\"googleBtn\" class=\"g-signin2\"></div>\n  </div>\n</div>\n\n<div [ngStyle]=\"{'background-image': getUrl()}\"></div>\n\n   \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__ = __webpack_require__("../../../../angular2-google-login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, _googleAuth) {
        this.router = router;
        this._googleAuth = _googleAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["a" /* AppGlobals */].GOOGLE_CLIENT_ID = '480806216212-5vo6it25koaruotqbe5f9trvfssm3i4e.apps.googleusercontent.com';
    };
    LoginComponent.prototype.getUrl = function () {
        return "url('./assets/ourImages/background.jpg')";
    };
    LoginComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["a" /* AppGlobals */].GOOGLE_CLIENT_ID,
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        var _this = this;
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            localStorage.setItem('token', googleUser.getAuthResponse().id_token);
            localStorage.setItem('img', profile.getImageUrl());
            localStorage.setItem('name', profile.getName());
            localStorage.setItem('email', profile.getEmail());
            _this.router.navigate(['/admin']);
            //window.location.replace("http://localhost:8080/admin");
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.googleInit();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav>\n  \n  <ul class=\"side-nav\">\n    <li><a href=\"#!\">Dashboard</a></li>\n    <li><a href=\"#!\">Class List</a></li>\n    <li><a href=\"#!\">Stats</a></li>\n  </ul>\n</nav>\n        "

/***/ }),

/***/ "../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavCollapsedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarNavCollapsedComponent = (function () {
    function SidebarNavCollapsedComponent() {
    }
    SidebarNavCollapsedComponent.prototype.ngOnInit = function () {
    };
    return SidebarNavCollapsedComponent;
}());
SidebarNavCollapsedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar-nav-collapsed',
        template: __webpack_require__("../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-nav-collapsed/sidebar-nav-collapsed.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarNavCollapsedComponent);

//# sourceMappingURL=sidebar-nav-collapsed.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/sidebar-nav/sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarNavComponent = (function () {
    function SidebarNavComponent() {
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
    };
    return SidebarNavComponent;
}());
SidebarNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sidebar-nav',
        template: __webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-nav/sidebar-nav.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarNavComponent);

//# sourceMappingURL=sidebar-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-center/student-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-center/student-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t\t<!-- <div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<class-list [classes]=\"classes\"></class-list>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12\">\n\t\t\t\t<homework-list [homeworks]=\"homeworks\"></homework-list>\n\t\t\t</div>\n\t\t</div> -->\n\t</div>"

/***/ }),

/***/ "../../../../../src/app/student-center/student-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentCenterComponent = (function () {
    function StudentCenterComponent(_userService) {
        this._userService = _userService;
    }
    StudentCenterComponent.prototype.ngOnInit = function () {
        //this._userService.getUsers()
        //.subscribe(resUserData => this.users = resUserData);
    };
    return StudentCenterComponent;
}());
StudentCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'student-center',
        template: __webpack_require__("../../../../../src/app/student-center/student-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-center/student-center.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], StudentCenterComponent);

var _a;
//# sourceMappingURL=student-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/student-creation/student-creation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/student-creation/student-creation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row\"><div class=\"col s12\"><h1>Create a new user!</h1></div></div>\n\t<div class=\"row\">\n\t\t\t<form class=\"col s12\" #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\">\n\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t\t\t\t<i class=\"material-icons prefix\">account_circle</i>\n\t\t\t\t\t\t<input id=\"first_name\" type=\"text\" class=\"validate\" required name=\"firstname\" ngModel>\n\t\t\t\t\t\t<label for=\"first_name\">First Name</label>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t\t<div class=\"input-field col s6\">\n\t\t\t\t\t\t<input id=\"last_name\" type=\"text\" class=\"validate\" required name=\"lastname\" ngModel>\n\t\t\t\t\t\t<label for=\"last_name\">Last Name</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"input-field col s12\">\n\t\t\t\t\t\t<i class=\"material-icons prefix\">email</i>\n\t\t\t\t\t\t<input id=\"email\" type=\"email\" class=\"validate\" required name=\"email\" ngModel>\n\t\t\t\t\t\t<label for=\"email\" data-error=\"try again\" data-success=\"yep, you didn't screw up\">Email</label>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<p>\n\t\t\t\t\t\t<input name=\"group1\" type=\"radio\" id=\"test1\" required name=\"type\" ngModel value=\"admin\"/>\n\t\t\t\t\t\t<label for=\"test1\">Admin</label>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input name=\"group1\" type=\"radio\" id=\"test2\" required name=\"type\" ngModel value=\"teacher\"/>\n\t\t\t\t\t\t<label for=\"test2\">Teacher</label>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>\n\t\t\t\t\t\t<input class=\"with-gap\" name=\"group1\" type=\"radio\" id=\"test3\" required name=\"type\" ngModel value=\"student\"/>\n\t\t\t\t\t\t<label for=\"test3\">Student</label>\n\t\t\t\t\t</p>\n\t\t\t\t\t<a class=\"waves-effect waves-light btn\"><i class=\"material-icons right\">cloud</i>Submit</a>\n\t\t\t</form>\n\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/student-creation/student-creation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCreationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentCreationComponent = (function () {
    function StudentCreationComponent(_userService) {
        this._userService = _userService;
        this.hidenewUser = true;
    }
    StudentCreationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUsers()
            .subscribe(function (resUserData) { return _this.users = resUserData; });
    };
    StudentCreationComponent.prototype.onSelectUser = function (user) {
        this.selectedUser = user;
        console.log(this.selectedUser);
    };
    StudentCreationComponent.prototype.newUser = function () {
        this.hidenewUser = false;
    };
    StudentCreationComponent.prototype.onSubmitAddUser = function (user) {
        var _this = this;
        this._userService.addUser(user)
            .subscribe(function (resNewUser) {
            _this.users.push(resNewUser);
            _this.hidenewUser = true;
            _this.selectedUser = resNewUser;
        });
    };
    StudentCreationComponent.prototype.onUpdateUserEvent = function (user) {
        this._userService.updateUser(user)
            .subscribe(function (resUpdatedUser) { return user = resUpdatedUser; });
        this.selectedUser = null;
    };
    ;
    StudentCreationComponent.prototype.onDeleteUserEvent = function (user) {
        var userArray = this.users;
        this._userService.deleteUser(user)
            .subscribe(function (resDeletedUser) {
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i]._id === user._id) {
                    userArray.splice(i, 1);
                }
            }
        });
        this.selectedUser = null;
    };
    ;
    return StudentCreationComponent;
}());
StudentCreationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-creation',
        template: __webpack_require__("../../../../../src/app/student-creation/student-creation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-creation/student-creation.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], StudentCreationComponent);

var _a;
//# sourceMappingURL=student-creation.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-redirect/user-redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-redirect/user-redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row center-align\">\n\t\t<div class=\"col s12 \">\n\t\t\t<h3>Welcome to Rebootcampspot!</h3>\n\t\t</div>\n\t</div>\n\t<div class=\"row center-align\">\n\t\t<div class=\"col s12\">\n\t\t\t<mat-progress-bar\tmode=\"indeterminate\">\n\t\t\t</mat-progress-bar>\n\t\t</div>\n\t<div class=\"row center-align\">\n\t\t<div class=\"col s12\">\n\t\t\t<p>Please be patient</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-redirect/user-redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserRedirectComponent = (function () {
    function UserRedirectComponent() {
    }
    UserRedirectComponent.prototype.ngOnInit = function () {
    };
    return UserRedirectComponent;
}());
UserRedirectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-redirect',
        template: __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserRedirectComponent);

//# sourceMappingURL=user-redirect.component.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
        this._getUrl = "/api/users";
        this._postUrl = "/api/user";
        this._putUrl = "/api/user/";
        this._deleteUrl = "/api/user/";
    }
    UserService.prototype.getUsers = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.addUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.updateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + user._id, JSON.stringify(user), options)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteUser = function (user) {
        return this._http.delete(this._deleteUrl + user._id)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map