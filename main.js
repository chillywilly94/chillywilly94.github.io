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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/posts/post/post.component.ts");
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");











var appRoutes = [
    { path: '', component: _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_10__["PocetnaComponent"] },
    { path: 'main', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]] },
    { path: 'posts', component: _posts_posts_component__WEBPACK_IMPORTED_MODULE_4__["PostsComponent"], canActivate: [_guard_service__WEBPACK_IMPORTED_MODULE_8__["GuardService"]], children: [
            { path: ':id', component: _posts_post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"] }
        ] },
    { path: 'signup', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'signin', component: _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_6__["SigninComponent"] },
    { path: 'pagenotfound', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_7__["PagenotfoundComponent"] },
    { path: '**', redirectTo: '/pagenotfound' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">\n  <div class=\"container\">\n    <a href=\"#\" class=\"navbar-brand\">Blogger.com</a>\n    <!-- <button class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button> -->\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n      <ul class=\"navbar-nav ml-auto\">\n        <ng-template [ngIf]=\"authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/main\" class=\"nav-link\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/posts\" class=\"nav-link\">Posts</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"signOut()\">SignOut</a>\n          </li>\n        </ng-template>\n        <ng-template [ngIf]=\"!authService.authenticated()\">\n          <li class=\"nav-item\">\n            <a routerLink=\"/signin\" class=\"nav-link\">SignIn</a>\n          </li>\n          <li class=\"nav-item\">\n            <a routerLink=\"/signup\" class=\"nav-link\">SignUp</a>\n          </li>\n        </ng-template>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- <ng-template [ngIf]=\"!authService.authenticated()\">\n  \n</ng-template> -->\n\n<router-outlet></router-outlet>\n\n<footer class=\"bg-dark\" id=\"main-footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col text-center text-white\">\n        <div class=\"py-4\">\n          <h1 class=\"h3\">Blogger.com</h1>\n          <p>Copyright &copy; 2019</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        firebase__WEBPACK_IMPORTED_MODULE_4__["initializeApp"]({
            apiKey: "AIzaSyBT6lGuuTEmdwiwIMOTVn04YZicgPmH0BQ",
            authDomain: "blogeriii"
        });
    };
    AppComponent.prototype.signOut = function () {
        this.authService.signout();
        this.router.navigate(['/signin']);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bloggers/bloggers.component */ "./src/app/bloggers/bloggers.component.ts");
/* harmony import */ var _bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bloggers/blogger/blogger.component */ "./src/app/bloggers/blogger/blogger.component.ts");
/* harmony import */ var _bloggers_addblogger_addblogger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bloggers/addblogger/addblogger.component */ "./src/app/bloggers/addblogger/addblogger.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_post_post_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/post/post.component */ "./src/app/posts/post/post.component.ts");
/* harmony import */ var _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/signin/signin.component */ "./src/app/auth/signin/signin.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./guard.service */ "./src/app/guard.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _store_bloggers_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/bloggers.reducer */ "./src/app/store/bloggers.reducer.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./post.service */ "./src/app/post.service.ts");
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pocetna/pocetna.component */ "./src/app/pocetna/pocetna.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"],
                _bloggers_bloggers_component__WEBPACK_IMPORTED_MODULE_9__["BloggersComponent"],
                _bloggers_blogger_blogger_component__WEBPACK_IMPORTED_MODULE_10__["BloggerComponent"],
                _bloggers_addblogger_addblogger_component__WEBPACK_IMPORTED_MODULE_11__["AddbloggerComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_12__["PostsComponent"],
                _posts_post_post_component__WEBPACK_IMPORTED_MODULE_13__["PostComponent"],
                _auth_signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"],
                _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"],
                _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_23__["PocetnaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_21__["StoreModule"].forRoot({ bloggers: _store_bloggers_reducer__WEBPACK_IMPORTED_MODULE_20__["bloggersReducer"] })
            ],
            providers: [_guard_service__WEBPACK_IMPORTED_MODULE_17__["GuardService"], _auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _bloggers_service__WEBPACK_IMPORTED_MODULE_19__["BloggersService"], _post_service__WEBPACK_IMPORTED_MODULE_22__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthService = /** @class */ (function () {
    function AuthService(router) {
        this.router = router;
    }
    AuthService.prototype.signinUser = function (email, password) {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signInWithEmailAndPassword(email, password)
            .then(function (response) {
            _this.router.navigate(['/main']);
            firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
                .then(function (token) { return _this.token = token; });
        })
            .catch(function (error) {
            console.log(error);
            alert("Wrong email or password!");
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().currentUser.getIdToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.signupUser = function (email, password) {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().createUserWithEmailAndPassword(email, password)
            .then(function (response) { return alert("Registrated Successfully"); })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.authenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.signout = function () {
        firebase__WEBPACK_IMPORTED_MODULE_1__["auth"]().signOut();
        this.token = null;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 840px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 840px;\r\n}\r\n\r\n.home-inner {\r\n    padding-top: 150px;\r\n}\r\n\r\n.card-form {\r\n    opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ25pbi9zaWduaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vaW1nL3dlbGNvbWUuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogODQwcHg7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24gLmRhcmstb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA4NDBweDtcclxufVxyXG5cclxuLmhvbWUtaW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1mb3JtIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"container home-inner\">\n      <div class=\"row\">\n        <div class=\"col-md-8 d-none d-md-block text-light\">\n          <h1 class=\"display-4\">\n            <strong>Sign In</strong>\n          </h1>\n          <p>Lorem ipsum dolor, sit amet consectetur\n             adipisicing elit. Laborum fugit id veritatis ipsum reprehenderit expedita ex optio iusto officiis, ullam \n             repudiandae at, nam aliquid illum quas ipsa voluptates accusamus corrupti?\n          </p>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card bg-success text-center card-form\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"signin(f)\" #f=\"ngForm\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"User Name\" id=\"name\" name=\"name\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control form-control-lg\" placeholder=\"Email\" ngModel>\n                </div>\n                <div class=\"form-group\">\n                  <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" ngModel>\n                </div>\n                <button type=\"submit\" class=\"btn btn-outline-light btn-block\">Sign In</button>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/auth/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.signin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signinUser(email, password);
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/auth/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/auth/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('welcome.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 840px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 840px;\r\n}\r\n\r\n.home-inner {\r\n    padding-top: 150px;\r\n}\r\n\r\n.card-form {\r\n    opacity: 0.8;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3Q0FBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNob21lLXNlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vaW1nL3dlbGNvbWUuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogODQwcHg7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24gLmRhcmstb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA4NDBweDtcclxufVxyXG5cclxuLmhvbWUtaW5uZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1mb3JtIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n      <div class=\"container home-inner\">\n        <div class=\"row\">\n          <div class=\"col-md-8 d-none d-md-block text-light\">\n            <h1 class=\"display-4\">\n              <strong>Sign Up</strong>\n            </h1>\n            <p>Lorem ipsum dolor, sit amet consectetur\n               adipisicing elit. Laborum fugit id veritatis ipsum reprehenderit expedita ex optio iusto officiis, ullam \n               repudiandae at, nam aliquid illum quas ipsa voluptates accusamus corrupti?\n            </p>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"card bg-warning text-center card-form\">\n              <div class=\"card-body\">\n                <form (ngSubmit)=\"signup(f)\" #f=\"ngForm\">\n                  <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"User Name\" id=\"name\" name=\"name\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control form-control-lg\" placeholder=\"Email\" ngModel>\n                  </div>\n                  <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control form-control-lg\" placeholder=\"Password\" ngModel>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-outline-light btn-block\">Sign Up</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>"

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/auth.service */ "./src/app/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.signupUser(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/blogger.ts":
/*!****************************!*\
  !*** ./src/app/blogger.ts ***!
  \****************************/
/*! exports provided: Blogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogger", function() { return Blogger; });
var Blogger = /** @class */ (function () {
    function Blogger(name, email, about, imgUrl) {
        this.name = name;
        this.about = about;
        this.email = email;
        this.imgUrl = imgUrl;
    }
    return Blogger;
}());



/***/ }),

/***/ "./src/app/bloggers.service.ts":
/*!*************************************!*\
  !*** ./src/app/bloggers.service.ts ***!
  \*************************************/
/*! exports provided: BloggersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersService", function() { return BloggersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");




var BloggersService = /** @class */ (function () {
    function BloggersService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    BloggersService.prototype.getAllBloggers = function () {
        var token = this.authService.getToken();
        return this.http.get('https://blogeriii.firebaseio.com/data.json?auth=' + token, {
            headers: this.headers
        });
    };
    BloggersService.prototype.saveBlogger = function (bloggers) {
        var token = this.authService.getToken();
        return this.http.put('https://blogeriii.firebaseio.com/data.json?auth=' + token, bloggers, {
            headers: this.headers
        });
    };
    BloggersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], BloggersService);
    return BloggersService;
}());



/***/ }),

/***/ "./src/app/bloggers/addblogger/addblogger.component.css":
/*!**************************************************************!*\
  !*** ./src/app/bloggers/addblogger/addblogger.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2FkZGJsb2dnZXIvYWRkYmxvZ2dlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/bloggers/addblogger/addblogger.component.html":
/*!***************************************************************!*\
  !*** ./src/app/bloggers/addblogger/addblogger.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row m-3 bg-light border\">\n  <div class=\"col-md-8\">\n    <h1>Bloggers Job</h1>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum sapiente perspiciatis in quidem voluptatem, doloremque doloribus pariatur expedita veniam.</p>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"card text-center bg-success text-white mb-3 m-auto\">\n      <div class=\"card-body\">\n        <h3>Add New Blogger</h3>\n        <h1 class=\"display-4\">\n          <i class=\"fa fa-user-plus\"></i> 6\n        </h1>\n        <button class=\"btn btn-outline-light btn-sm\" data-toggle=\"modal\" data-target=\"#addblogger\">Add Blogger</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"addblogger\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-success text-white\">\n        <h5 class=\"modal-title\">Add New Blogger</h5>\n        <button class=\"close\" data-dismiss=\"modal\">\n          <span>&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" id=\"addForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" ngModel required #nameBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">You must insert Name!!!</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ngModel required #emailBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">You must insert Email!!!</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"img\">Image</label>\n            <input type=\"text\" name=\"img\" id=\"img\" class=\"form-control\" ngModel required #imgBlogger=\"ngModel\">\n            <span class=\"help-block text-secondary\" *ngIf=\"!imgBlogger.valid && imgBlogger.touched\">Insert picture</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"about\">About Blogger</label>\n            <textarea name=\"about\" class=\"form-control\" rows=\"5\" value=\"About Blogger\" ngModel></textarea>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button (click)=\"addBlogger()\" class=\"btn btn-success\" type=\"submit\" [disabled]=\"!f.valid\" data-dismiss=\"modal\">Add</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bloggers/addblogger/addblogger.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/bloggers/addblogger/addblogger.component.ts ***!
  \*************************************************************/
/*! exports provided: AddbloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbloggerComponent", function() { return AddbloggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_blogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/blogger */ "./src/app/blogger.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_bloggers_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/bloggers.actions */ "./src/app/store/bloggers.actions.ts");







var AddbloggerComponent = /** @class */ (function () {
    function AddbloggerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    AddbloggerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    AddbloggerComponent.prototype.addBlogger = function () {
        var _this = this;
        this.store.dispatch(new _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_6__["AddBlogger"](new src_app_blogger__WEBPACK_IMPORTED_MODULE_3__["Blogger"](this.form.value.name, this.form.value.email, this.form.value.about, this.form.value.img)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        this.form.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"])
    ], AddbloggerComponent.prototype, "form", void 0);
    AddbloggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addblogger',
            template: __webpack_require__(/*! ./addblogger.component.html */ "./src/app/bloggers/addblogger/addblogger.component.html"),
            styles: [__webpack_require__(/*! ./addblogger.component.css */ "./src/app/bloggers/addblogger/addblogger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_bloggers_service__WEBPACK_IMPORTED_MODULE_5__["BloggersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AddbloggerComponent);
    return AddbloggerComponent;
}());



/***/ }),

/***/ "./src/app/bloggers/blogger/blogger.component.css":
/*!********************************************************!*\
  !*** ./src/app/bloggers/blogger/blogger.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\r\n    color: black;\r\n    font-size: 25px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ2dlcnMvYmxvZ2dlci9ibG9nZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2Jsb2dnZXIvYmxvZ2dlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bloggers/blogger/blogger.component.html":
/*!*********************************************************!*\
  !*** ./src/app/bloggers/blogger/blogger.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card\" [@bloggerState]=\"state\" (click)=\"resizeBlogger()\"  style=\"margin: 90px 60px 30px 60px; cursor: pointer;\">\n  <div class=\"card-header text-center\">\n\n    <img [src]=\"blogger.imgUrl\" alt=\"{{blogger.name}}\" class=\"img-fluid\" style=\"max-width: 150px;\">\n  </div>\n  <div class=\"card-body\">\n    <h3>{{blogger.name}}</h3>\n    <h5 class=\"text-muted\">{{blogger.email}}</h5>\n    <p>{{blogger.about}}</p>\n    <div class=\"d-flex flex-row justify-content-center\">\n      <div class=\"p-4\">\n        <a href=\"https://www.facebook.com\">\n          <i class=\"fa fa-facebook\"></i>\n        </a>\n      </div>\n      <div class=\"p-4\">\n        <a href=\"https://www.twitter.com/twitter?lang=en\">\n          <i class=\"fa fa-twitter\"></i>\n        </a>\n      </div>\n      <div class=\"p-4\">\n        <a href=\"https://www.instagram.com\">\n          <i class=\"fa fa-instagram\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-footer\" style=\"cursor: default\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-warning\" (click)=\"setIndex()\" data-toggle=\"modal\" data-target=\"#changeblogger\">Change</button>\n      </div>\n      <div class=\"col-md-6\">\n        <button class=\"btn btn-block btn-danger\" (click)=\"deleteBlogger()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"changeblogger\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header bg-warning text-white\">\n        <h5 class=\"modal-title\">Change Blogger</h5>\n        <button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n      </div>\n      <div class=\"modal-body\">\n        <form #f=\"ngForm\" id=\"changeForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input type=\"text\" name=\"name\" id=\"name\" class=\"form-control\" ngModel required #nameBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!nameBlogger.valid && nameBlogger.touched\">You must insert Name</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control\" ngModel required #emailBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!emailBlogger.valid && emailBlogger.touched\">You must insert Email</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"img\">Image</label>\n            <input type=\"text\" name=\"img\" id=\"img\" class=\"form-control\" ngModel #imgBlogger=\"ngModel\">\n            <span class=\"help-block text-danger\" *ngIf=\"!imgBlogger.valid && imgBlogger.touched\">You must insert image url</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"about\">About Blogger</label>\n            <textarea name=\"about\" rows=\"5\" class=\"form-control\" value=\"About Blogger\" ngModel></textarea>\n          </div>\n        </form>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button class=\"btn btn-warning\" type=\"submit\" (click)=\"changeBlogger(f)\" [disabled]=\"!f.valid\" data-dismiss=\"modal\">Finish Editing</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/bloggers/blogger/blogger.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/bloggers/blogger/blogger.component.ts ***!
  \*******************************************************/
/*! exports provided: BloggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggerComponent", function() { return BloggerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/blogger */ "./src/app/blogger.ts");
/* harmony import */ var src_app_bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/bloggers.actions */ "./src/app/store/bloggers.actions.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");







var BloggerComponent = /** @class */ (function () {
    function BloggerComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
        this.state = 'normal';
    }
    BloggerComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
        //this.modalIndex = this.index;
    };
    BloggerComponent.prototype.setIndex = function () {
        this.modalIndex = this.index;
        console.log(this.modalIndex);
    };
    BloggerComponent.prototype.changeBlogger = function (form) {
        var _this = this;
        // const forward = {
        //   index: this.modalIndex,
        //   blogger: new Blogger(form.value.name, form.value.email, form.value.about, form.value.img)
        // }
        // this.store.dispatch(new BloggersAction.EditBlogger(forward));
        console.log(this.modalIndex);
        this.store.dispatch(new _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["EditBlogger"]({
            index: this.index,
            blogger: new src_app_blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about, form.value.img)
        }));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        //console.log(this.index)
        form.reset();
    };
    BloggerComponent.prototype.deleteBlogger = function () {
        var _this = this;
        this.store.dispatch(new _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["DeleteBlogger"](this.index));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
    };
    BloggerComponent.prototype.resizeBlogger = function () {
        this.state === 'normal' ? this.state = 'bigger' : this.state = 'normal';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"])
    ], BloggerComponent.prototype, "blogger", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], BloggerComponent.prototype, "index", void 0);
    BloggerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blogger',
            template: __webpack_require__(/*! ./blogger.component.html */ "./src/app/bloggers/blogger/blogger.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["trigger"])('bloggerState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["state"])('bigger', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["style"])({
                        transform: 'scale(1.5)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["transition"])('normal <=> bigger', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_6__["animate"])(300))
                ])
            ],
            styles: [__webpack_require__(/*! ./blogger.component.css */ "./src/app/bloggers/blogger/blogger.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], BloggerComponent);
    return BloggerComponent;
}());



/***/ }),

/***/ "./src/app/bloggers/bloggers.component.css":
/*!*************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dnZXJzL2Jsb2dnZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bloggers/bloggers.component.html":
/*!**************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  \n  <app-blogger class=\"col-xs-6\"\n  [blogger]=\"blogger\"\n  [index]=\"i\"\n  *ngFor=\"let blogger of (bloggersState | async).bloggers; let i=index\"\n  >\n  \n  </app-blogger>\n  \n</div>\n\n<div style=\"height: 100px\"></div>\n\n<app-addblogger></app-addblogger>"

/***/ }),

/***/ "./src/app/bloggers/bloggers.component.ts":
/*!************************************************!*\
  !*** ./src/app/bloggers/bloggers.component.ts ***!
  \************************************************/
/*! exports provided: BloggersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloggersComponent", function() { return BloggersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogger */ "./src/app/blogger.ts");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/bloggers.actions */ "./src/app/store/bloggers.actions.ts");






var BloggersComponent = /** @class */ (function () {
    function BloggersComponent(bloggersService, store) {
        this.bloggersService = bloggersService;
        this.store = store;
    }
    BloggersComponent.prototype.ngOnInit = function () {
        this.bloggersState = this.store.select('bloggers');
    };
    BloggersComponent.prototype.addBlogger = function (form) {
        var _this = this;
        this.store.dispatch(new _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_5__["AddBlogger"](new _blogger__WEBPACK_IMPORTED_MODULE_2__["Blogger"](form.value.name, form.value.email, form.value.about, form.value.img)));
        this.bloggersState.subscribe(function (blog) {
            _this.bloggersService.saveBlogger(blog.bloggers).subscribe();
        });
        form.reset();
    };
    BloggersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bloggers',
            template: __webpack_require__(/*! ./bloggers.component.html */ "./src/app/bloggers/bloggers.component.html"),
            styles: [__webpack_require__(/*! ./bloggers.component.css */ "./src/app/bloggers/bloggers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_3__["BloggersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], BloggersComponent);
    return BloggersComponent;
}());



/***/ }),

/***/ "./src/app/guard.service.ts":
/*!**********************************!*\
  !*** ./src/app/guard.service.ts ***!
  \**********************************/
/*! exports provided: GuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardService", function() { return GuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");



var GuardService = /** @class */ (function () {
    function GuardService(authService) {
        this.authService = authService;
    }
    GuardService.prototype.canActivate = function (route, state) {
        return this.authService.authenticated();
    };
    GuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], GuardService);
    return GuardService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: #333;\r\n    color: #fff;\r\n}\r\n\r\n.navbar {\r\n    border-bottom: #008ed6 3px solid;\r\n    opacity: 0.8;\r\n}\r\n\r\n#home-section {\r\n    background: url('background.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 700px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 700px;\r\n}\r\n\r\n.info-header {\r\n    width: 50%;\r\n    margin: auto;\r\n    border-bottom: 1px #ddd solid;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0NBQWdDO0lBQ2hDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSwyQ0FBcUQ7SUFDckQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAjMDA4ZWQ2IDNweCBzb2xpZDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuI2hvbWUtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9pbWcvYmFja2dyb3VuZC5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuI2hvbWUtc2VjdGlvbiAuZGFyay1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG59XHJcblxyXG4uaW5mby1oZWFkZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1ib3R0b206IDFweCAjZGRkIHNvbGlkO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 text-center mx-auto text-white\">\n          <h1 class=\"display-2 mt-5 pt-5\">Find All About Our Bloggers</h1>\n          <p class=\"lead\">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis unde quis quos sit beatae dolorem.</p>\n          <div >\n            <a (click)=\"this.viewPort.scrollToAnchor('bloggers')\" class=\"btn btn-outline-secondary btn-lg text-white\">\n              <i class=\"fa fa-arrow-right\"></i> Read More\n            </a>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<section id=\"bloggers\" class=\"my-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"info-header mb-5 text-center\">\n          <h1 class=\"text-primary pb-3\">Meet The Bloggers</h1>\n          <p class=\"lead pb-3\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, blanditiis \n            quibusdam! Tenetur illum facilis velit. Modi voluptatum natus ullam laboriosam\n          </p>\n        </div>\n      </div>\n    </div>\n    <app-bloggers></app-bloggers>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bloggers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bloggers.service */ "./src/app/bloggers.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/bloggers.actions */ "./src/app/store/bloggers.actions.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var MainComponent = /** @class */ (function () {
    function MainComponent(bloggersService, store, viewPort) {
        this.bloggersService = bloggersService;
        this.store = store;
        this.viewPort = viewPort;
    }
    //bloggersState: Observable<{bloggers: Blogger[]}>;
    MainComponent.prototype.ngOnInit = function () {
        //this.bloggersState = this.store.select('bloggers'); 
        this.getAllBloggers();
    };
    MainComponent.prototype.getAllBloggers = function () {
        var _this = this;
        this.bloggersService.getAllBloggers()
            .subscribe(function (bloggers) {
            _this.store.dispatch(new _store_bloggers_actions__WEBPACK_IMPORTED_MODULE_4__["AddBloggers"](bloggers));
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_bloggers_service__WEBPACK_IMPORTED_MODULE_2__["BloggersService"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["ViewportScroller"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"margin: 390px auto\">\r\n    <div class=\"col-md-12 text-center\">\r\n        <h1>Page Not Found</h1>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pagenotfound/pagenotfound.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
  \********************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/pocetna/pocetna.component.css":
/*!***********************************************!*\
  !*** ./src/app/pocetna/pocetna.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('pocetna1.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 840px;\r\n}\r\n\r\n#home-section .dark-overlay {\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    width: 100%;\r\n    min-height: 840px;\r\n}\r\n\r\n.home-inner {\r\n    padding-top: 200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9jZXRuYS9wb2NldG5hLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5Q0FBbUQ7SUFDbkQsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BvY2V0bmEvcG9jZXRuYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtc2VjdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9pbWcvcG9jZXRuYTEuanBnXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgbWluLWhlaWdodDogODQwcHg7XHJcbn1cclxuXHJcbiNob21lLXNlY3Rpb24gLmRhcmstb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDg0MHB4O1xyXG59XHJcblxyXG4uaG9tZS1pbm5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pocetna/pocetna.component.html":
/*!************************************************!*\
  !*** ./src/app/pocetna/pocetna.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-section\">\n  <div class=\"dark-overlay\">\n    <div class=\"container home-inner\">\n      <div class=\"row\">\n        <div class=\"col-md-12 d-none d-md-block text-light text-center\">\n          <h1 class=\"display-4\">\n            <strong>Register Now!</strong>\n          </h1>\n          <p>Lorem ipsum dolor, sit amet consectetur\n             adipisicing elit. Laborum fugit id veritatis ipsum reprehenderit expedita ex optio iusto officiis, ullam \n             repudiandae at, nam aliquid illum quas ipsa voluptates accusamus corrupti?\n          </p>\n          <a [routerLink]=\"['/signup']\"  class=\"btn btn-outline-secondary btn-lg text-white my-3\">\n            Register Now!\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pocetna/pocetna.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pocetna/pocetna.component.ts ***!
  \**********************************************/
/*! exports provided: PocetnaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PocetnaComponent", function() { return PocetnaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PocetnaComponent = /** @class */ (function () {
    function PocetnaComponent() {
    }
    PocetnaComponent.prototype.ngOnInit = function () {
    };
    PocetnaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pocetna',
            template: __webpack_require__(/*! ./pocetna.component.html */ "./src/app/pocetna/pocetna.component.html"),
            styles: [__webpack_require__(/*! ./pocetna.component.css */ "./src/app/pocetna/pocetna.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PocetnaComponent);
    return PocetnaComponent;
}());



/***/ }),

/***/ "./src/app/post.service.ts":
/*!*********************************!*\
  !*** ./src/app/post.service.ts ***!
  \*********************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post */ "./src/app/post.ts");





var PostService = /** @class */ (function () {
    function PostService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.posts = [
            new _post__WEBPACK_IMPORTED_MODULE_4__["Post"]('Test 1', 'Test Category', '25.04.2019'),
            new _post__WEBPACK_IMPORTED_MODULE_4__["Post"]('Test 2', 'Test Category', '26.04.2019')
        ];
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    PostService.prototype.getAllPosts = function () {
        var token = this.authService.getToken();
        return this.http.get("https://blogeriii.firebaseio.com/posts.json?auth=" + token, {
            headers: this.headers
        });
    };
    PostService.prototype.savePosts = function (posts) {
        var token = this.authService.getToken();
        return this.http.put("https://blogeriii.firebaseio.com/posts.json?auth=" + token, posts, {
            headers: this.headers
        });
    };
    PostService.prototype.getPosts = function () {
        return this.posts;
    };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/post.ts":
/*!*************************!*\
  !*** ./src/app/post.ts ***!
  \*************************/
/*! exports provided: Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
var Post = /** @class */ (function () {
    function Post(title, category, datePosted) {
        this.title = title;
        this.category = category;
        this.datePosted = datePosted;
    }
    return Post;
}());



/***/ }),

/***/ "./src/app/posts/post/post.component.css":
/*!***********************************************!*\
  !*** ./src/app/posts/post/post.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QvcG9zdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/posts/post/post.component.html":
/*!************************************************!*\
  !*** ./src/app/posts/post/post.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"condition\" class=\"card m-3 bg-light\">\n  <div class=\"card-header text-dark\">\n    <h3>{{post.title | uppercase}}</h3>\n  </div>\n  <div class=\"card-body\">\n    <h3 class=\"text-muted\">{{post.category}}</h3>\n  </div>\n  <div class=\"card-footer text-right\">\n    <p>{{ post.datePosted}}</p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/posts/post/post.component.ts":
/*!**********************************************!*\
  !*** ./src/app/posts/post/post.component.ts ***!
  \**********************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_post_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/post.service */ "./src/app/post.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PostComponent = /** @class */ (function () {
    function PostComponent(postService, route, router) {
        this.postService = postService;
        this.route = route;
        this.router = router;
        this.condition = false;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['id'];
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            for (var index in posts) {
                if (posts[index].id == id) {
                    _this.post = posts[index];
                    _this.condition = true;
                    break;
                }
            }
        });
        this.route.params
            .subscribe(function (params) {
            var id = params['id'];
            console.log(id);
            _this.postService.getAllPosts()
                .subscribe(function (posts) {
                for (var index in posts) {
                    if (posts[index].id == id) {
                        _this.post = posts[index];
                        _this.condition = true;
                        break;
                    }
                }
            });
        });
    };
    PostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/posts/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/posts/post/post.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_post_service__WEBPACK_IMPORTED_MODULE_2__["PostService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.css":
/*!*******************************************!*\
  !*** ./src/app/posts/posts.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-section {\r\n    background: url('posts.jpg') no-repeat;\r\n    background-size: cover;\r\n    background-attachment: fixed;\r\n    min-height: 350px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFnRDtJQUNoRCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaG9tZS1zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2ltZy9wb3N0cy5qcGdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-section\">\n    <div class=\"dark-overlay\">\n  \n    </div>\n  </header>\n  \n  <div class=\"bg-light\">\n    <div class=\"container my-4\">\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"card m-3\">\n            <div class=\"card-header\">\n              <h4>Posts</h4>\n            </div>\n            <table class=\"table table-hover table-bordered text-center\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Title</th>\n                  <th>Editing</th>\n                  <th>Deleting</th>\n                  \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let post of posts; let i=index\" [@postAnim]>\n                  <td>{{i + 1}}</td>\n                  <td [routerLink]=\"['/posts', post.id]\" style=\"cursor: pointer\" >{{ post.title }}</td>\n                  <td>\n                    <button class=\"btn btn-warning btn-block\" (click)=\"idX = i;\" data-toggle=\"modal\" data-target=\"#changepost\">Edit Post</button>\n                  </td>\n                  <td>\n                    <button class=\"btn btn-danger btn-block\" (click)=\"deletePost(post.id)\">Delete Post</button>\n                  </td>\n                  \n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"container my-4\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"info-header mb-5 text-center\">\n          <h1 class=\"text-primary pb-3\">Add New Post</h1>\n          <p class=\"lead pb-3\">\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor consectetur, dolore tempore temporibus sed quaerat!\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6 bg-dark text-white mx-auto\">\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"submit()\" class=\"my-4\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input type=\"text\" id=\"title\" class=\"form-control\" formControlName=\"title\">\n            <span *ngIf=\"!addForm.get('title').valid && addForm.get('title').touched\">Enter the Title!</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"category\">Category</label>\n            <input type=\"text\" id=\"category\" class=\"form-control\" formControlName=\"category\">\n            <span *ngIf=\"!addForm.get('category').valid && addForm.get('category').touched\">Enter Category</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"date\">Posted</label>\n            <input type=\"text\" id=\"date\" class=\"form-control\" formControlName=\"date\">\n            <span *ngIf=\"!addForm.get('date').valid && addForm.get('date').touched\">Enter Date of Posting</span>\n          </div>\n          <span *ngIf=\"!addForm.valid && addForm.touched\"> Fill Form</span>\n          <br>\n          <button class=\"btn btn-outline-secondary btn-block\" type=\"submit\" [disabled]=\"!addForm.valid\">Save</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"modal fade\" id=\"changepost\">\n    <div class=\"modal-dialog modal-lg\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header bg-warning text-white\">\n          <h5 class=\"modal-title\">Change Post</h5>\n          <button class=\"close\" data-dismiss=\"modal\"><span>&times;</span></button>\n        </div>\n        <div class=\"modal-body\">\n          <form #f=\"ngForm\" id=\"changeForm\">\n            <div class=\"form-group\">\n              <label for=\"title\">Title</label>\n              <input type=\"text\" name=\"title\" id=\"title\" class=\"form-control\" ngModel required #title=\"ngModel\">\n              <span class=\"help-block text-danger\" *ngIf=\"!title.valid && title.touched\">You must insert title</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"category\">Category</label>\n              <input type=\"category\" name=\"category\" id=\"category\" class=\"form-control\" ngModel required #category=\"ngModel\">\n              <span class=\"help-block text-danger\" *ngIf=\"!category.valid && category.touched\">You must insert category</span>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"date\">Date Posted</label>\n              <input type=\"text\" name=\"date\" id=\"date\" class=\"form-control\" ngModel required #date=\"ngModel\">\n              <span class=\"help-block text-secondary\" *ngIf=\"!date.valid && date.touched\">You must insert date</span>\n            </div>\n          </form>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n            <button class=\"btn btn-warning\" type=\"submit\" (click)=\"changePost(f)\" data-dismiss=\"modal\" [disabled]=\"!f.valid\">Finish Editing</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../post.service */ "./src/app/post.service.ts");





var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
        this.posts = [];
        this.state = "normal";
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
            'category': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.postService.getAllPosts()
            .subscribe(function (posts) {
            _this.posts = posts;
        });
    };
    PostsComponent.prototype.deletePost = function (id) {
        this.posts = this.posts.filter(function (posts) { return posts.id != id; });
        this.postService.savePosts(this.posts)
            .subscribe();
    };
    PostsComponent.prototype.changePost = function (form) {
        for (var _i = 0, _a = this.posts; _i < _a.length; _i++) {
            var post = _a[_i];
            if (post.id === this.idX) {
                post.title = form.value.title;
                post.category = form.value.category;
                post.datePosted = form.value.date;
            }
        }
        this.postService.savePosts(this.posts)
            .subscribe();
        form.reset();
    };
    PostsComponent.prototype.submit = function () {
        var posts = this.posts ? this.posts : [];
        if (posts.length === 0) {
            var newPost = {
                id: 0,
                title: this.addForm.value.title,
                category: this.addForm.value.category,
                datePosted: this.addForm.value.date
            };
            posts.push(newPost);
        }
        else {
            var newPost = {
                id: posts[posts.length - 1].id + 1,
                title: this.addForm.value.title,
                category: this.addForm.value.category,
                datePosted: this.addForm.value.date
            };
            posts.push(newPost);
        }
        this.posts = posts;
        this.postService.savePosts(this.posts)
            .subscribe();
        this.addForm.reset();
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('postAnim', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('insert', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        'background-color': 'white',
                        'text-decoration': 'line-through',
                        'text-decoration-color': 'transparent',
                        opacity: 0,
                        transform: 'translateX(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                transform: 'translate(-100px)',
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0.5,
                                transform: 'translate(-70px)',
                                offset: 0.3
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0.8,
                                transform: 'translate(-40px)',
                                offset: 0.8
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 1,
                                transform: 'translate(0)',
                                offset: 1
                            })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                'background-color': 'white',
                                'text-decoration': 'line-through',
                                'text-decoration-color': 'transparent',
                                offset: 0
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                'background-color': '#fc8387',
                                'text-decoration': 'line-through',
                                'text-decoration-color': 'white',
                                offset: 0.6
                            }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                opacity: 0,
                                transform: 'translateX(100px)',
                                offset: 1
                            })
                        ])),
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./posts.component.css */ "./src/app/posts/posts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/store/bloggers.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/store/bloggers.actions.ts ***!
  \*******************************************/
/*! exports provided: ADD_BLOGGER, DELETE_BLOGGER, EDIT_BLOGGER, ADD_BLOGGERS, AddBlogger, EditBlogger, DeleteBlogger, AddBloggers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGER", function() { return ADD_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_BLOGGER", function() { return DELETE_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDIT_BLOGGER", function() { return EDIT_BLOGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_BLOGGERS", function() { return ADD_BLOGGERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBlogger", function() { return AddBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogger", function() { return EditBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogger", function() { return DeleteBlogger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddBloggers", function() { return AddBloggers; });
var ADD_BLOGGER = "ADD_BLOGGER";
var DELETE_BLOGGER = "DELETE_BLOGGER";
var EDIT_BLOGGER = "EDIT_BLOGGER";
var ADD_BLOGGERS = "ADD_BLOGGERS";
var AddBlogger = /** @class */ (function () {
    function AddBlogger(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGER;
    }
    return AddBlogger;
}());

var EditBlogger = /** @class */ (function () {
    function EditBlogger(payload) {
        this.payload = payload;
        this.type = EDIT_BLOGGER;
    }
    return EditBlogger;
}());

var DeleteBlogger = /** @class */ (function () {
    function DeleteBlogger(payload) {
        this.payload = payload;
        this.type = DELETE_BLOGGER;
    }
    return DeleteBlogger;
}());

var AddBloggers = /** @class */ (function () {
    function AddBloggers(payload) {
        this.payload = payload;
        this.type = ADD_BLOGGERS;
    }
    return AddBloggers;
}());



/***/ }),

/***/ "./src/app/store/bloggers.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/store/bloggers.reducer.ts ***!
  \*******************************************/
/*! exports provided: bloggersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloggersReducer", function() { return bloggersReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bloggers.actions */ "./src/app/store/bloggers.actions.ts");


var initialState = {
    bloggers: [
    //new Blogger('Blogger 1', 'blogger1@gmail.com','About Blogger 1', 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=4k-wallpaper-blur-buildings-1236701.jpg&fm=jpg' )
    ]
};
function bloggersReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGER"]:
            var blogg = state.bloggers ? state.bloggers : [];
            //console.log(blogg)
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, blogg, { bloggers: blogg.concat([action.payload]) });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["DELETE_BLOGGER"]:
            var oldBloggers = state.bloggers.slice();
            oldBloggers.splice(action.payload, 1);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: oldBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["EDIT_BLOGGER"]:
            // console.log(state.bloggers[action.payload.index]);
            // const blogger = state.bloggers[action.payload.index];
            // const editedBlogger = {
            //     ...blogger,
            //     ...action.payload.blogger
            // };
            // const beforeEditingBloggers = [...state.bloggers];
            // beforeEditingBloggers[action.payload.index] = editedBlogger;
            // console.log(action.payload.index);
            // return {
            //     ...state,
            //     bloggers: beforeEditingBloggers
            // }
            var beforeEditingBloggers = state.bloggers.slice();
            beforeEditingBloggers[action.payload.index] = action.payload.blogger;
            console.log(action.payload.index);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: beforeEditingBloggers });
        case _bloggers_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_BLOGGERS"]:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { bloggers: action.payload });
        default:
            return state;
    }
}
//new Blogger('Blogger 1', 'blogger1@gmail.com','About Blogger 1', 'https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?cs=srgb&dl=4k-wallpaper-blur-buildings-1236701.jpg&fm=jpg' ),
//new Blogger('Blogger 2', 'blogger2@gmail.com','About Blogger 2', 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?cs=srgb&dl=beautiful-beauty-blurred-background-1239291.jpg&fm=jpg' )


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

module.exports = __webpack_require__(/*! D:\angular\Bloggers\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map