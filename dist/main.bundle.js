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

module.exports = "<div class=\"col s12 m6\">\n  <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content\">\n        <span class=\"card-title\">Admin</span>\n        <ul class=\"collapsible\" data-collapsible=\"accordion\">\n            <li>\n              <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>Homework 1</div>\n              <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n            </li>\n            <li>\n              <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Homework 2</div>\n              <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n            </li>\n            <li>\n              <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Homework 3</div>\n              <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n            </li>\n          </ul>\n      </div>\n      <div class=\"card-action\">\n        <a href=\"#\">This is a link</a>\n        <a href=\"#\">This is a link</a>\n      </div>\n  </div>\n</div>\n\n\n  \n\n\n\n\n\n<cohort-create>\n</cohort-create>\n\n<user-create>\n</user-create>\n\n<user-list></user-list>\n\n<lesson-create>\n</lesson-create>\n\n<class-list></class-list>\n\n<homework-create>\n</homework-create>\n\n<homework-list></homework-list>\n<app-main-footer></app-main-footer>\n\n\n\n"

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
    }
    AdminCenterComponent.prototype.ngOnInit = function () {
    };
    return AdminCenterComponent;
}());
AdminCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_center_admin_center_component__ = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__student_center_student_center_component__ = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__teacher_center_teacher_center_component__ = __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_redirect_user_redirect_component__ = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */] },
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_5__admin_center_admin_center_component__["a" /* AdminCenterComponent */] },
    { path: 'classcenter', component: __WEBPACK_IMPORTED_MODULE_6__student_center_student_center_component__["a" /* StudentCenterComponent */] },
    { path: 'teachercenter', component: __WEBPACK_IMPORTED_MODULE_7__teacher_center_teacher_center_component__["a" /* TeacherCenterComponent */] },
    { path: 'redirect', component: __WEBPACK_IMPORTED_MODULE_8__user_redirect_user_redirect_component__["a" /* UserRedirectComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_3__video_center_video_center_component__["a" /* VideoCenterComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">VideoPlayer</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n    <li><a routerLink=\"/videos\" routerLinkActive=\"active\">Playlist</a></li>            \n    </ul>\n  </div>\n</nav>    \n<router-outlet></router-outlet>            \n\n"

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
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__video_detail_video_detail_component__ = __webpack_require__("../../../../../src/app/video-detail/video-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__admin_center_admin_center_component__ = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__student_center_student_center_component__ = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__teacher_center_teacher_center_component__ = __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__class_list_class_list_component__ = __webpack_require__("../../../../../src/app/class-list/class-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__homework_list_homework_list_component__ = __webpack_require__("../../../../../src/app/homework-list/homework-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_redirect_user_redirect_component__ = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__user_create_user_create_component__ = __webpack_require__("../../../../../src/app/user-create/user-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cohort_create_cohort_create_component__ = __webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__lesson_create_lesson_create_component__ = __webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__homework_create_homework_create_component__ = __webpack_require__("../../../../../src/app/homework-create/homework-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__main_footer_main_footer_component__ = __webpack_require__("../../../../../src/app/main-footer/main-footer.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__video_center_video_center_component__["a" /* VideoCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__video_list_video_list_component__["a" /* VideoListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_14__admin_center_admin_center_component__["a" /* AdminCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_15__student_center_student_center_component__["a" /* StudentCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_16__teacher_center_teacher_center_component__["a" /* TeacherCenterComponent */],
            __WEBPACK_IMPORTED_MODULE_17__class_list_class_list_component__["a" /* ClassListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__homework_list_homework_list_component__["a" /* HomeworkListComponent */],
            __WEBPACK_IMPORTED_MODULE_19__user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_20__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_21__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_22__user_redirect_user_redirect_component__["a" /* UserRedirectComponent */],
            __WEBPACK_IMPORTED_MODULE_23__user_create_user_create_component__["a" /* UserCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_24__cohort_create_cohort_create_component__["a" /* CohortCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_25__lesson_create_lesson_create_component__["a" /* LessonCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_26__homework_create_homework_create_component__["a" /* HomeworkCreateComponent */],
            __WEBPACK_IMPORTED_MODULE_27__main_footer_main_footer_component__["a" /* MainFooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatProgressBarModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/class-list/class-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/class-list/class-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  class-list works!\n</p>\n"

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'class-list',
        template: __webpack_require__("../../../../../src/app/class-list/class-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/class-list/class-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ClassListComponent);

//# sourceMappingURL=class-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/cohort-create/cohort-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cohort-create/cohort-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cohort-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/cohort-create/cohort-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CohortCreateComponent; });
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

var CohortCreateComponent = (function () {
    function CohortCreateComponent() {
    }
    CohortCreateComponent.prototype.ngOnInit = function () {
    };
    return CohortCreateComponent;
}());
CohortCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'cohort-create',
        template: __webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CohortCreateComponent);

//# sourceMappingURL=cohort-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer grey lighten-3\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col l6 s12\">\n          <h5 class=\"white-text\">ReBootcampSpot</h5>\n          <p class=\"grey-text text-lighten-4\">Making a better BootcampSpot for all of us</p>\n        </div>\n        <div class=\"col l4 offset-l2 s12\">\n          <h5 class=\"white-text\">Links</h5>\n          <ul>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">DashBoard</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Calendar</a></li>\n            <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Stats</a></li>\n            \n          </ul>\n        </div>\n      </div>\n    </div>\n    <div class=\"footer-copyright\">\n      <div class=\"container\">\n      © 2017 Copyright Caroline Bowes, Li Chen, Chris Rackley, and Adrian Fahrer\n      </div>\n    </div>\n  </footer>\n           "

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n\t\t<h1>{{title}}</h1>\n\t\t<p>This is a Video Sharing service for sentient creatures. It's not very good looking.</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = (function () {
    function HomeComponent() {
        this.title = "Welcome to Video Share!";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/homework-create/homework-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/homework-create/homework-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  homework-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/homework-create/homework-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeworkCreateComponent; });
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

var HomeworkCreateComponent = (function () {
    function HomeworkCreateComponent() {
    }
    HomeworkCreateComponent.prototype.ngOnInit = function () {
    };
    return HomeworkCreateComponent;
}());
HomeworkCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'homework-create',
        template: __webpack_require__("../../../../../src/app/homework-create/homework-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homework-create/homework-create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeworkCreateComponent);

//# sourceMappingURL=homework-create.component.js.map

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

module.exports = "<div class=\"col s12 m6\">\n      <div class=\"card blue-grey darken-1\">\n          <div class=\"card-content\">\n            <span class=\"card-title\">Homework</span>\n            <ul class=\"collapsible\" data-collapsible=\"accordion\">\n                <li>\n                  <div class=\"collapsible-header\"><i class=\"material-icons\">filter_drama</i>Homework 1</div>\n                  <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n                </li>\n                <li>\n                  <div class=\"collapsible-header\"><i class=\"material-icons\">place</i>Homework 2</div>\n                  <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n                </li>\n                <li>\n                  <div class=\"collapsible-header\"><i class=\"material-icons\">whatshot</i>Homework 3</div>\n                  <div class=\"collapsible-body\"><span>Lorem ipsum dolor sit amet.</span></div>\n                </li>\n              </ul>\n          </div>\n          <div class=\"card-action\">\n            <a href=\"#\">This is a link</a>\n            <a href=\"#\">This is a link</a>\n          </div>\n      </div>\n  </div>\n\n\n      "

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'homework-list',
        template: __webpack_require__("../../../../../src/app/homework-list/homework-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/homework-list/homework-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeworkListComponent);

//# sourceMappingURL=homework-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/lesson-create/lesson-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lesson-create/lesson-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  lesson-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/lesson-create/lesson-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LessonCreateComponent; });
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

var LessonCreateComponent = (function () {
    function LessonCreateComponent() {
    }
    LessonCreateComponent.prototype.ngOnInit = function () {
    };
    return LessonCreateComponent;
}());
LessonCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'lesson-create',
        template: __webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LessonCreateComponent);

//# sourceMappingURL=lesson-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n  margin: 40px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = " <div class=\"section grey lighten-3\">\n  <div class=\"row container\">\n    <h2 class=\"header\">ReBootcampSpot</h2>\n  <p class=\"grey-text text-darken-3 lighten-3\">A better bootcampspot, for both students and administrators</p>\n  </div>\n <div class=\"container align-center\"> \n  <h5>Sign In</h5>\t\t\t\n  <div id=\"googleBtn\" class=\"g-signin2\"></div>\n  </div>\n</div>\n\n<div [ngStyle]=\"{'background-image': getUrl()}\"></div> \n\n\n\n  "

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angular2_google_login__["b" /* AuthService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-footer/main-footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-footer/main-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer grey \">\n <div class=\"container\">\n   <div class=\"row\">\n     <div class=\"col l6 s12\">\n       <h5 class=\"white-text\">ReBootcampSpot</h5>\n       <p class=\"grey-text text-lighten-4\">Making a better BootcampSpot for all of us</p>\n     </div>\n     <div class=\"col l4 offset-l2 s12\">\n       <h5 class=\"white-text\">Links</h5>\n       <ul>\n         <li><a class=\"grey-text text-lighten-3\" href=\"#!\">DashBoard</a></li>\n         <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Calendar</a></li>\n         <li><a class=\"grey-text text-lighten-3\" href=\"#!\">Stats</a></li>\n         \n       </ul>\n     </div>\n   </div>\n </div>\n <div class=\"footer-copyright\">\n   <div class=\"container\">\n   © 2017 Copyright Caroline Bowes, Li Chen, Chris Rackley, and Adrian Fahrer\n   </div>\n </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/main-footer/main-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainFooterComponent; });
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

var MainFooterComponent = (function () {
    function MainFooterComponent() {
    }
    MainFooterComponent.prototype.ngOnInit = function () {
    };
    return MainFooterComponent;
}());
MainFooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-footer',
        template: __webpack_require__("../../../../../src/app/main-footer/main-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-footer/main-footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MainFooterComponent);

//# sourceMappingURL=main-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    return SafePipe;
}());
SafePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'safe' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

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

module.exports = "<p>\n  student-center works!\n</p>\n<div class=\"row\">\n  <homework-list></homework-list>\n</div>\n\n<app-main-footer></app-main-footer>"

/***/ }),

/***/ "../../../../../src/app/student-center/student-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentCenterComponent; });
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

var StudentCenterComponent = (function () {
    function StudentCenterComponent() {
    }
    StudentCenterComponent.prototype.ngOnInit = function () {
    };
    return StudentCenterComponent;
}());
StudentCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-student-center',
        template: __webpack_require__("../../../../../src/app/student-center/student-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/student-center/student-center.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StudentCenterComponent);

//# sourceMappingURL=student-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/teacher-center/teacher-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/teacher-center/teacher-center.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  teacher-center works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/teacher-center/teacher-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherCenterComponent; });
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

var TeacherCenterComponent = (function () {
    function TeacherCenterComponent() {
    }
    TeacherCenterComponent.prototype.ngOnInit = function () {
    };
    return TeacherCenterComponent;
}());
TeacherCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-teacher-center',
        template: __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeacherCenterComponent);

//# sourceMappingURL=teacher-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-create/user-create.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-create/user-create.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-create works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-create/user-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCreateComponent; });
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

var UserCreateComponent = (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    return UserCreateComponent;
}());
UserCreateComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-create',
        template: __webpack_require__("../../../../../src/app/user-create/user-create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-create/user-create.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserCreateComponent);

//# sourceMappingURL=user-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
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

var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserListComponent);

//# sourceMappingURL=user-list.component.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-redirect',
        template: __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.css")]
    }),
    __metadata("design:paramtypes", [])
], UserRedirectComponent);

//# sourceMappingURL=user-redirect.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-sm-9\">\n\t\t<div *ngIf=\"!hidenewVideo\">\n\t\t\t<h2>New Video</h2>\n\t\t\t<form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Title</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required name=\"title\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Url</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" required name=\"url\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\" ngModel>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-success\">Save</button>\n\t\t\t</form>\n\t\t</div>\n\t\t<video-detail *ngIf=\"selectedVideo && hidenewVideo\" \n\t\t(updateVideoEvent)=\"onUpdateVideoEvent($event)\" \n\t\t(deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n\t\t [video]=\"selectedVideo\">\n\t\t</video-detail>\n\t</div>\n\t<div class=\"col-sm-3\">\n\t\t<button style=\"margin-bottom:2px;\" type=\"button\" (click)=\"newVideo()\" class=\"btn btn-success btn-block\">+ New Video</button>\n\t\t<video-list [videos]=\"videos\" (SelectVideo)=\"onSelectVideo($event)\"></video-list>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video__ = __webpack_require__("../../../../../src/app/video.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.hidenewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        console.log(this.selectedVideo);
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        console.log(this);
        console.log(video);
        console.log(__WEBPACK_IMPORTED_MODULE_2__video__["a" /* Video */]);
        console.log(this.selectedVideo);
        console.log('working');
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hidenewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdatedVideo) { return video = resUpdatedVideo; });
        this.selectedVideo = null;
    };
    ;
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
        });
        this.selectedVideo = null;
    };
    ;
    return VideoCenterComponent;
}());
VideoCenterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-video-center',
        template: __webpack_require__("../../../../../src/app/video-center/video-center.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-center/video-center.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__video_service__["a" /* VideoService */]) === "function" && _a || Object])
], VideoCenterComponent);

var _a;
//# sourceMappingURL=video-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <iframe width=\"100%\" height=\"500\" [src]=\"video.url | safe\" frameborder=\"0\" allowfullscreen>\n    </iframe>\n</div>\n<div>\n    <form>  \n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>     \n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\"\n            [(ngModel)]=\"video.title\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"input\" class=\"form-control\" name=\"url\" required placeholder=\"url\"\n            [(ngModel)]=\"video.url\">\n        </div>\n        <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"5\" name=\"desc\" [(ngModel)]=\"video.description\">\n            </textarea>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"margin-bottom: 50px;\"> \n        <button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>  \n\t\t\t\t<button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>\n\t\t\t\t</div>    \n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
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

var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    VideoDetailComponent.prototype.ngOnChanges = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    VideoDetailComponent.prototype.deleteVideo = function () {
        this.deleteVideoEvent.emit(this.video);
    };
    return VideoDetailComponent;
}());
VideoDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'video-detail',
        template: __webpack_require__("../../../../../src/app/video-detail/video-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-detail/video-detail.component.css")],
        inputs: ['video'],
        outputs: ['updateVideoEvent', 'deleteVideoEvent']
    }),
    __metadata("design:paramtypes", [])
], VideoDetailComponent);

//# sourceMappingURL=video-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n    <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a>{{video.title}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
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

var VideoListComponent = (function () {
    function VideoListComponent() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    return VideoListComponent;
}());
VideoListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'video-list',
        template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
        inputs: ['videos'],
        outputs: ['SelectVideo']
    }),
    __metadata("design:paramtypes", [])
], VideoListComponent);

//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
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



var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = "/api/videos";
        this._postUrl = "/api/video";
        this._putUrl = "/api/video/";
        this._deleteUrl = "/api/video/";
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.updateVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    return VideoService;
}());
VideoService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], VideoService);

var _a;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/app/video.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Video; });
var Video = (function () {
    function Video() {
    }
    return Video;
}());

//# sourceMappingURL=video.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map