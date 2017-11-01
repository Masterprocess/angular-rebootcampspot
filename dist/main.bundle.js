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

module.exports = "<p>\n  admin-center works!\n</p>\n<cohort-create>\n</cohort-create>\n\n<user-create>\n</user-create>\n\n<user-list></user-list>\n\n<lesson-create>\n</lesson-create>\n\n<class-list></class-list>\n\n<homework-create>\n</homework-create>\n\n<homework-list></homework-list>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/admin-center/admin-center.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AdminCenterComponent = /** @class */ (function () {
    function AdminCenterComponent() {
    }
    AdminCenterComponent.prototype.ngOnInit = function () {
    };
    AdminCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-admin-center',
            template: __webpack_require__("../../../../../src/app/admin-center/admin-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-center/admin-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminCenterComponent);
    return AdminCenterComponent;
}());
exports.AdminCenterComponent = AdminCenterComponent;
//# sourceMappingURL=admin-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var video_center_component_1 = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var admin_center_component_1 = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
var student_center_component_1 = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
var teacher_center_component_1 = __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.ts");
var user_redirect_component_1 = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'admin', component: admin_center_component_1.AdminCenterComponent },
    { path: 'classcenter', component: student_center_component_1.StudentCenterComponent },
    { path: 'teachercenter', component: teacher_center_component_1.TeacherCenterComponent },
    { path: 'redirect', component: user_redirect_component_1.UserRedirectComponent },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'videos', component: video_center_component_1.VideoCenterComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">VideoPlayer</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n    <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n    <li><a routerLink=\"/videos\" routerLinkActive=\"active\">Playlist</a></li>            \n    </ul>\n  </div>\n</nav>    \n<div class=\"container\">\n  <router-outlet></router-outlet>            \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var forms_1 = __webpack_require__("../../../forms/@angular/forms.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
var animations_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
var angular2_materialize_1 = __webpack_require__("../../../../angular2-materialize/dist/index.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var video_center_component_1 = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
var video_list_component_1 = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
var video_detail_component_1 = __webpack_require__("../../../../../src/app/video-detail/video-detail.component.ts");
var safe_pipe_1 = __webpack_require__("../../../../../src/app/safe.pipe.ts");
var admin_center_component_1 = __webpack_require__("../../../../../src/app/admin-center/admin-center.component.ts");
var student_center_component_1 = __webpack_require__("../../../../../src/app/student-center/student-center.component.ts");
var teacher_center_component_1 = __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.ts");
var class_list_component_1 = __webpack_require__("../../../../../src/app/class-list/class-list.component.ts");
var homework_list_component_1 = __webpack_require__("../../../../../src/app/homework-list/homework-list.component.ts");
var user_list_component_1 = __webpack_require__("../../../../../src/app/user-list/user-list.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var user_redirect_component_1 = __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.ts");
var user_create_component_1 = __webpack_require__("../../../../../src/app/user-create/user-create.component.ts");
var cohort_create_component_1 = __webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.ts");
var lesson_create_component_1 = __webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.ts");
var homework_create_component_1 = __webpack_require__("../../../../../src/app/homework-create/homework-create.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                video_center_component_1.VideoCenterComponent,
                video_list_component_1.VideoListComponent,
                video_detail_component_1.VideoDetailComponent,
                safe_pipe_1.SafePipe,
                admin_center_component_1.AdminCenterComponent,
                student_center_component_1.StudentCenterComponent,
                teacher_center_component_1.TeacherCenterComponent,
                class_list_component_1.ClassListComponent,
                homework_list_component_1.HomeworkListComponent,
                user_list_component_1.UserListComponent,
                footer_component_1.FooterComponent,
                login_component_1.LoginComponent,
                user_redirect_component_1.UserRedirectComponent,
                user_create_component_1.UserCreateComponent,
                cohort_create_component_1.CohortCreateComponent,
                lesson_create_component_1.LessonCreateComponent,
                homework_create_component_1.HomeworkCreateComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                angular2_materialize_1.MaterializeModule,
                material_1.MatSidenavModule,
                material_1.MatButtonModule,
                material_1.MatCheckboxModule,
                material_1.MatProgressBarModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var ClassListComponent = /** @class */ (function () {
    function ClassListComponent() {
    }
    ClassListComponent.prototype.ngOnInit = function () {
    };
    ClassListComponent = __decorate([
        core_1.Component({
            selector: 'class-list',
            template: __webpack_require__("../../../../../src/app/class-list/class-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/class-list/class-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClassListComponent);
    return ClassListComponent;
}());
exports.ClassListComponent = ClassListComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var CohortCreateComponent = /** @class */ (function () {
    function CohortCreateComponent() {
    }
    CohortCreateComponent.prototype.ngOnInit = function () {
    };
    CohortCreateComponent = __decorate([
        core_1.Component({
            selector: 'cohort-create',
            template: __webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cohort-create/cohort-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CohortCreateComponent);
    return CohortCreateComponent;
}());
exports.CohortCreateComponent = CohortCreateComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = "Welcome to Video Share!";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeworkCreateComponent = /** @class */ (function () {
    function HomeworkCreateComponent() {
    }
    HomeworkCreateComponent.prototype.ngOnInit = function () {
    };
    HomeworkCreateComponent = __decorate([
        core_1.Component({
            selector: 'homework-create',
            template: __webpack_require__("../../../../../src/app/homework-create/homework-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homework-create/homework-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeworkCreateComponent);
    return HomeworkCreateComponent;
}());
exports.HomeworkCreateComponent = HomeworkCreateComponent;
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

module.exports = "<p>\n  homework-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/homework-list/homework-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var HomeworkListComponent = /** @class */ (function () {
    function HomeworkListComponent() {
    }
    HomeworkListComponent.prototype.ngOnInit = function () {
    };
    HomeworkListComponent = __decorate([
        core_1.Component({
            selector: 'homework-list',
            template: __webpack_require__("../../../../../src/app/homework-list/homework-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/homework-list/homework-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeworkListComponent);
    return HomeworkListComponent;
}());
exports.HomeworkListComponent = HomeworkListComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var LessonCreateComponent = /** @class */ (function () {
    function LessonCreateComponent() {
    }
    LessonCreateComponent.prototype.ngOnInit = function () {
    };
    LessonCreateComponent = __decorate([
        core_1.Component({
            selector: 'lesson-create',
            template: __webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lesson-create/lesson-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LessonCreateComponent);
    return LessonCreateComponent;
}());
exports.LessonCreateComponent = LessonCreateComponent;
//# sourceMappingURL=lesson-create.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section grey lighten-3\">\n  <div class=\"row container\">\n    <h2 class=\"header\">ReBootcampSpot</h2>\n  <p class=\"grey-text text-darken-3 lighten-3\">A better bootcampspot, for both students and administrators</p>\n  </div>\n <div class=\"container align-center\"> \n  <h5>Sign In</h5>\t\t\t\n  <div id=\"googleBtn\" class=\"g-signin2\"></div>\n  </div>\n</div>\n\n<div [ngStyle]=\"{'background-image': getUrl()}\"></div>\n\n   \n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var angular2_google_login_1 = __webpack_require__("../../../../angular2-google-login/index.ts");
var router_1 = __webpack_require__("../../../router/@angular/router.es5.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, _googleAuth) {
        this.router = router;
        this._googleAuth = _googleAuth;
    }
    LoginComponent.prototype.ngOnInit = function () {
        angular2_google_login_1.AppGlobals.GOOGLE_CLIENT_ID = '480806216212-5vo6it25koaruotqbe5f9trvfssm3i4e.apps.googleusercontent.com';
    };
    LoginComponent.prototype.getUrl = function () {
        return "url('./assets/ourImages/background.jpg')";
    };
    LoginComponent.prototype.googleInit = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: angular2_google_login_1.AppGlobals.GOOGLE_CLIENT_ID,
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
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [angular2_google_login_1.AuthService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof angular2_google_login_1.AuthService !== "undefined" && angular2_google_login_1.AuthService) === "function" && _b || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        core_1.Pipe({ name: 'safe' }),
        __metadata("design:paramtypes", [typeof (_a = typeof platform_browser_1.DomSanitizer !== "undefined" && platform_browser_1.DomSanitizer) === "function" && _a || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
exports.SafePipe = SafePipe;
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

module.exports = "<p>\n  student-center works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/student-center/student-center.component.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var StudentCenterComponent = /** @class */ (function () {
    function StudentCenterComponent() {
    }
    StudentCenterComponent.prototype.ngOnInit = function () {
    };
    StudentCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-student-center',
            template: __webpack_require__("../../../../../src/app/student-center/student-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/student-center/student-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StudentCenterComponent);
    return StudentCenterComponent;
}());
exports.StudentCenterComponent = StudentCenterComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var TeacherCenterComponent = /** @class */ (function () {
    function TeacherCenterComponent() {
    }
    TeacherCenterComponent.prototype.ngOnInit = function () {
    };
    TeacherCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-teacher-center',
            template: __webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/teacher-center/teacher-center.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TeacherCenterComponent);
    return TeacherCenterComponent;
}());
exports.TeacherCenterComponent = TeacherCenterComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent() {
    }
    UserCreateComponent.prototype.ngOnInit = function () {
    };
    UserCreateComponent = __decorate([
        core_1.Component({
            selector: 'user-create',
            template: __webpack_require__("../../../../../src/app/user-create/user-create.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-create/user-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserCreateComponent);
    return UserCreateComponent;
}());
exports.UserCreateComponent = UserCreateComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            template: __webpack_require__("../../../../../src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var UserRedirectComponent = /** @class */ (function () {
    function UserRedirectComponent() {
    }
    UserRedirectComponent.prototype.ngOnInit = function () {
    };
    UserRedirectComponent = __decorate([
        core_1.Component({
            selector: 'app-user-redirect',
            template: __webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-redirect/user-redirect.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserRedirectComponent);
    return UserRedirectComponent;
}());
exports.UserRedirectComponent = UserRedirectComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var video_service_1 = __webpack_require__("../../../../../src/app/video.service.ts");
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var video_1 = __webpack_require__("../../../../../src/app/video.ts");
var VideoCenterComponent = /** @class */ (function () {
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
        console.log(video_1.Video);
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
    VideoCenterComponent = __decorate([
        core_1.Component({
            selector: 'app-video-center',
            template: __webpack_require__("../../../../../src/app/video-center/video-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-center/video-center.component.css")],
            providers: [video_service_1.VideoService]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof video_service_1.VideoService !== "undefined" && video_service_1.VideoService) === "function" && _a || Object])
    ], VideoCenterComponent);
    return VideoCenterComponent;
    var _a;
}());
exports.VideoCenterComponent = VideoCenterComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var VideoDetailComponent = /** @class */ (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new core_1.EventEmitter();
        this.deleteVideoEvent = new core_1.EventEmitter();
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
    VideoDetailComponent = __decorate([
        core_1.Component({
            selector: 'video-detail',
            template: __webpack_require__("../../../../../src/app/video-detail/video-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-detail/video-detail.component.css")],
            inputs: ['video'],
            outputs: ['updateVideoEvent', 'deleteVideoEvent']
        }),
        __metadata("design:paramtypes", [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
exports.VideoDetailComponent = VideoDetailComponent;
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
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
        this.SelectVideo = new core_1.EventEmitter();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoListComponent = __decorate([
        core_1.Component({
            selector: 'video-list',
            template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
            inputs: ['videos'],
            outputs: ['SelectVideo']
        }),
        __metadata("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());
exports.VideoListComponent = VideoListComponent;
//# sourceMappingURL=video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var http_1 = __webpack_require__("../../../http/@angular/http.es5.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var VideoService = /** @class */ (function () {
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
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.updateVideo = function (video) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], VideoService);
    return VideoService;
    var _a;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.service.js.map

/***/ }),

/***/ "../../../../../src/app/video.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());
exports.Video = Video;
//# sourceMappingURL=video.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/@angular/core.es5.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map