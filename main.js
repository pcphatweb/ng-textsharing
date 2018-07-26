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
		var e = new Error('Cannot find module "' + req + '".');
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_container_home_container_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/container-home/container-home.component */ "./src/app/component/container-home/container-home.component.ts");
/* harmony import */ var _component_container_login_container_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/container-login/container-login.component */ "./src/app/component/container-login/container-login.component.ts");
/* harmony import */ var _component_container_register_container_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/container-register/container-register.component */ "./src/app/component/container-register/container-register.component.ts");
/* harmony import */ var _component_container_detail_container_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/container-detail/container-detail.component */ "./src/app/component/container-detail/container-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: './', pathMatch: 'full' },
    { path: './', component: _component_container_home_container_home_component__WEBPACK_IMPORTED_MODULE_2__["ContainerHomeComponent"] },
    { path: 'login', component: _component_container_login_container_login_component__WEBPACK_IMPORTED_MODULE_3__["ContainerLoginComponent"] },
    { path: 'register', component: _component_container_register_container_register_component__WEBPACK_IMPORTED_MODULE_4__["ContainerRegisterComponent"] },
    { path: 'detail/:id', component: _component_container_detail_container_detail_component__WEBPACK_IMPORTED_MODULE_5__["ContainerDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<router-outlet></router-outlet>\r\n<!-- <app-container-home></app-container-home>\r\n<app-container-login></app-container-login>\r\n<app-container-register></app-container-register>\r\n<app-container-detail></app-container-detail> -->\r\n<app-footer></app-footer>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-markdown */ "./node_modules/ngx-markdown/fesm5/ngx-markdown.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/nav/nav.component */ "./src/app/component/nav/nav.component.ts");
/* harmony import */ var _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/footer/footer.component */ "./src/app/component/footer/footer.component.ts");
/* harmony import */ var _component_container_home_container_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/container-home/container-home.component */ "./src/app/component/container-home/container-home.component.ts");
/* harmony import */ var _component_container_detail_container_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/container-detail/container-detail.component */ "./src/app/component/container-detail/container-detail.component.ts");
/* harmony import */ var _component_container_login_container_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/container-login/container-login.component */ "./src/app/component/container-login/container-login.component.ts");
/* harmony import */ var _component_container_register_container_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/container-register/container-register.component */ "./src/app/component/container-register/container-register.component.ts");
/* harmony import */ var _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/welcome/welcome.component */ "./src/app/component/welcome/welcome.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _component_container_edit_container_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/container-edit/container-edit.component */ "./src/app/component/container-edit/container-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HighlightDirective } from 'ng-highlight';












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _component_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _component_container_home_container_home_component__WEBPACK_IMPORTED_MODULE_8__["ContainerHomeComponent"],
                _component_container_detail_container_detail_component__WEBPACK_IMPORTED_MODULE_9__["ContainerDetailComponent"],
                _component_container_login_container_login_component__WEBPACK_IMPORTED_MODULE_10__["ContainerLoginComponent"],
                _component_container_register_container_register_component__WEBPACK_IMPORTED_MODULE_11__["ContainerRegisterComponent"],
                _component_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _component_container_edit_container_edit_component__WEBPACK_IMPORTED_MODULE_14__["ContainerEditComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_13__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_3__["HighlightModule"].forRoot({ theme: 'agate' }),
                ngx_markdown__WEBPACK_IMPORTED_MODULE_4__["MarkdownModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/container-detail/container-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/container-detail/container-detail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/container-detail/container-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/container-detail/container-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n\r\n    <app-welcome></app-welcome>\r\n\r\n    <h2>Paste</h2>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"container\">\r\n          <ul class=\"ss-share\">\r\n            <li class=\"ss-share-item\">\r\n              <a class=\"btn btn-primary\" (click)=\"onEdit()\">\r\n                <i class=\"fas fa-edit\"></i>&nbsp;Edit code\r\n              </a>\r\n            </li>\r\n            <li class=\"ss-share-item\">\r\n              <a class=\"btn btn-warning\" href=\"#\">\r\n                <i class=\"fas fa-flag\"></i>&nbsp;Report abuse\r\n              </a>\r\n            </li>\r\n            <!-- <li class=\"ss-share-item\">\r\n              <a class=\"ss-share-link ico-paste\" href=\"#\">\r\n                <i class=\"fas fa-flag\"></i>&nbsp;Report abuse</a>\r\n            </li> -->\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-6\">\r\n        <button onclick=\"myFunction();\" class=\"btn btn-success btn-sm\">Copy ShortURL</button>\r\n        &nbsp;\r\n        <input class=\"nothing\" id=\"shorturl\" value=\"http://bit.ly/2LvgWy8\">\r\n\r\n        <script>\r\n          function myFunction() {\r\n            var copyText = document.getElementById(\"shorturl\");\r\n            copyText.select();\r\n            document.execCommand(\"Copy\");\r\n          }\r\n        </script>\r\n      </div>\r\n\r\n      <div class=\"col-md-6 text-right\">\r\n      </div>\r\n\r\n      <div class=\"col-md-12\">\r\n        Pasted by {{userNamePaste}}</div>\r\n      <div class=\"col-md-12\">\r\n        <pre *ngIf='notMarkDown'><code highlight [textContent]=\"contentPaste\"></code></pre>\r\n\r\n        <div *ngIf='isMarkDown' style=\"border:1px solid #ccc;background-color:#fff; padding: 10px;border-radius:3px;\">\r\n          <div style=\"background-color:#333; color:#fff;padding: 10px\">\r\n            <markdown ngPreserveWhitespaces>\r\n                {{contentPaste}}\r\n                <!-- ## Publish a File\r\n\r\n                You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:\r\n                - Markdowncc: publish the Markdown text on a website that can interpret it (**GitHub** for instance),\r\n                - HTML: publish the file converted to HTML via a Handlebars template (on a blog for example). -->\r\n            </markdown>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <markdown *ngIf='isMarkDown' ngPreserveWhitespaces>\r\n            - Markdowncc: publish the Markdown text on a website that can interpret it (**GitHub** for instance),\r\n            - HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).\r\n        </markdown> -->\r\n      </div>\r\n      <p>&nbsp;</p>\r\n\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"selectedEdit\">\r\n      <h2>Enter text here</h2>\r\n      <div class=\"row\">\r\n        <form action=\"#\" class=\"form-inline text-center\" method=\"post\" accept-charset=\"utf-8\">\r\n          <div class=\"col-md-12\">\r\n            <a name=\"code\">&nbsp;</a>\r\n            Code Language\r\n            <select name=\"language\" class=\"form-control\" #codeLanguage>\r\n              <option value=\"\">Choose</option>\r\n              <option value=\"bash\">Bash</option>\r\n              <option value=\"c\">C</option>\r\n              <option value=\"csharp\">C#</option>\r\n              <option value=\"cpp\">C++</option>\r\n              <option value=\"css\">CSS</option>\r\n              <option value=\"html\">HTML</option>\r\n              <option value=\"java\">Java</option>\r\n              <option value=\"javascript\">JavaScript</option>\r\n              <option value=\"json\">JSON</option>\r\n              <option value=\"perl\">Perl</option>\r\n              <option value=\"php\">PHP</option>\r\n              <option value=\"nohighlight\">Plain Text</option>\r\n              <option value=\"python\">Python</option>\r\n              <option value=\"ruby\">Ruby</option>\r\n              <option value=\"xml\">XML</option>\r\n              <option value=\"markdown\">Markdown</option>\r\n            </select><br/><br/>\r\n            <textarea style=\"width: 100%; height: 200px;\" class=\"form-control\"  name=\"content\" #updateContent>{{contentPaste}}</textarea>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 text-center-xs\">\r\n            <div class=\"g-recaptcha\" data-sitekey=\"6LeTxmUUAAAAAJFuQkwRUmRNwI5O2edsKyoy9b87\">\r\n              <div style=\"width: 304px; height: 78px;\">\r\n                <div>\r\n                  <iframe src=\"https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeTxmUUAAAAAJFuQkwRUmRNwI5O2edsKyoy9b87&amp;co=aHR0cHM6Ly93d3cucGFzdGUub3JnOjQ0Mw..&amp;hl=en&amp;v=v1531759913576&amp;size=normal&amp;cb=lamw9k2wp2t4\"\r\n                    width=\"304\" height=\"78\" role=\"presentation\" frameborder=\"0\" scrolling=\"no\" sandbox=\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"></iframe>\r\n                </div>\r\n                <textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\" class=\"g-recaptcha-response\" style=\"width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; \"></textarea>\r\n              </div>\r\n            </div>\r\n            <script src=\"https://www.google.com/recaptcha/api.js?hl=en\" async=\"\" defer=\"\"></script>\r\n          </div>\r\n\r\n          <div class=\"col-md-12 text-left\">\r\n            <table>\r\n              <tbody>\r\n                <tr>\r\n                  <td>\r\n                    <input type=\"submit\" class=\"btn btn-success btn-sm\" (click)=\"onUpdatePaste(codeLanguage.value , updateContent.value)\" value=\"Update\">\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <p></p>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/container-detail/container-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/container-detail/container-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ContainerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerDetailComponent", function() { return ContainerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/textsharing.service */ "./src/app/service/textsharing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerDetailComponent = /** @class */ (function () {
    function ContainerDetailComponent(textSharingService, route, _router) {
        this.textSharingService = textSharingService;
        this.route = route;
        this._router = _router;
        this.selectedEdit = false;
        this.notMarkDown = false;
        this.isMarkDown = false;
    }
    ;
    ContainerDetailComponent.prototype.ngOnInit = function () {
        this.getPaste();
    };
    ContainerDetailComponent.prototype.getPaste = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.userid = id;
        this.textSharingService.getDetail(id).subscribe(function (data) {
            _this.userNamePaste = data.Name;
            _this.languagePaste = data.Language;
            _this.contentPaste = data.Content;
            if (_this.languagePaste == 'markdown')
                _this.isMarkDown = true;
            else
                _this.notMarkDown = true;
            console.log(data.Content);
        }, function (error) {
            console.log(error);
        });
        // console.log("id la " + id);
    };
    ContainerDetailComponent.prototype.onEdit = function () {
        this.selectedEdit = true;
        this.editZone.nativeElement.focus();
    };
    ContainerDetailComponent.prototype.onUpdatePaste = function (codeLanguage, contentUpdate) {
        this.textSharingService.updatePaste(this.userid, codeLanguage, contentUpdate).subscribe(function (data) {
            alert("Update Success");
            location.reload();
        }, function (error) {
            console.log(error);
        });
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('updateContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerDetailComponent.prototype, "editZone", void 0);
    ContainerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-detail',
            template: __webpack_require__(/*! ./container-detail.component.html */ "./src/app/component/container-detail/container-detail.component.html"),
            styles: [__webpack_require__(/*! ./container-detail.component.css */ "./src/app/component/container-detail/container-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__["TextsharingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContainerDetailComponent);
    return ContainerDetailComponent;
}());



/***/ }),

/***/ "./src/app/component/container-edit/container-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/container-edit/container-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/container-edit/container-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/container-edit/container-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  container-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/container-edit/container-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/container-edit/container-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContainerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerEditComponent", function() { return ContainerEditComponent; });
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

var ContainerEditComponent = /** @class */ (function () {
    function ContainerEditComponent() {
    }
    ContainerEditComponent.prototype.ngOnInit = function () {
    };
    ContainerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-edit',
            template: __webpack_require__(/*! ./container-edit.component.html */ "./src/app/component/container-edit/container-edit.component.html"),
            styles: [__webpack_require__(/*! ./container-edit.component.css */ "./src/app/component/container-edit/container-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerEditComponent);
    return ContainerEditComponent;
}());



/***/ }),

/***/ "./src/app/component/container-home/container-home.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/component/container-home/container-home.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/container-home/container-home.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/container-home/container-home.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n\r\n    <app-welcome></app-welcome>\r\n\r\n    <div class=\"row\">\r\n      <form action=\"#\" class=\"form-inline text-center\" method=\"post\" accept-charset=\"utf-8\">\r\n        <div class=\"col-md-12 text-center\">\r\n          Your Name:\r\n          <input class=\"form-control\" name=\"username\" #userName value=\"\"> Code Language\r\n          <select name=\"language\" class=\"form-control\" #codeLanguage>\r\n            <option value=\"\">Choose</option>\r\n            <option value=\"bash\">Bash</option>\r\n            <option value=\"c\">C</option>\r\n            <option value=\"csharp\">C#</option>\r\n            <option value=\"cpp\">C++</option>\r\n            <option value=\"css\">CSS</option>\r\n            <option value=\"html\">HTML</option>\r\n            <option value=\"java\">Java</option>\r\n            <option value=\"javascript\">JavaScript</option>\r\n            <option value=\"json\">JSON</option>\r\n            <option value=\"perl\">Perl</option>\r\n            <option value=\"php\">PHP</option>\r\n            <option value=\"nohighlight\">Plain Text</option>\r\n            <option value=\"python\">Python</option>\r\n            <option value=\"ruby\">Ruby</option>\r\n            <option value=\"xml\">XML</option>\r\n            <option value=\"markdown\">Markdown</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"col-md-12\">\r\n          <a name=\"code\">&nbsp;</a>\r\n          <textarea style=\"width: 100%; height: 200px;\" class=\"form-control\" name=\"content\" #textContent></textarea>\r\n        </div>\r\n\r\n        <div class=\"col-md-12 text-center-xs\">\r\n          <div class=\"g-recaptcha\" data-sitekey=\"6LeTxmUUAAAAAJFuQkwRUmRNwI5O2edsKyoy9b87\">\r\n            <div style=\"width: 304px; height: 78px;\">\r\n              <div>\r\n                <iframe src=\"https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LeTxmUUAAAAAJFuQkwRUmRNwI5O2edsKyoy9b87&amp;co=aHR0cHM6Ly93d3cucGFzdGUub3JnOjQ0Mw..&amp;hl=en&amp;v=v1531759913576&amp;size=normal&amp;cb=lamw9k2wp2t4\"\r\n                  width=\"304\" height=\"78\" role=\"presentation\" frameborder=\"0\" scrolling=\"no\" sandbox=\"allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox\"></iframe>\r\n              </div>\r\n              <textarea id=\"g-recaptcha-response\" name=\"g-recaptcha-response\" class=\"g-recaptcha-response\" style=\"width: 250px; height: 40px; border: 1px solid #c1c1c1; margin: 10px 25px; padding: 0px; resize: none;  display: none; \"></textarea>\r\n            </div>\r\n          </div>\r\n          <script src=\"https://www.google.com/recaptcha/api.js?hl=en\" async=\"\" defer=\"\"></script>\r\n        </div>\r\n\r\n        <div class=\"col-md-12\">\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <!-- <input type=\"submit\" class=\"btn btn-success btn-sm\" value=\"Paste Code\"> -->\r\n                <a style=\"color:#fff;\" class=\"btn btn-success btn-sm\" (click)=\"onClickPaste(userName.value, codeLanguage.value, textContent.value);\">Paste Code</a>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/container-home/container-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/container-home/container-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContainerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerHomeComponent", function() { return ContainerHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/textsharing.service */ "./src/app/service/textsharing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerHomeComponent = /** @class */ (function () {
    function ContainerHomeComponent(textSharingServer, _router) {
        this.textSharingServer = textSharingServer;
        this._router = _router;
    }
    ContainerHomeComponent.prototype.ngOnInit = function () {
    };
    ContainerHomeComponent.prototype.onClickPaste = function (username, codelanguage, content) {
        var _this = this;
        var pasteFormData = {
            "username": username,
            "language": codelanguage,
            "content": content
        };
        this.textSharingServer.addPaste(pasteFormData).subscribe(function (data) {
            _this.id = data;
            _this._router.navigate(['detail', data]);
            console.log(data);
        }, function (error) {
            console.log(error);
        });
        // console.log(username + " " + codelanguage + " " + content);
        return false;
    };
    ContainerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-home',
            template: __webpack_require__(/*! ./container-home.component.html */ "./src/app/component/container-home/container-home.component.html"),
            styles: [__webpack_require__(/*! ./container-home.component.css */ "./src/app/component/container-home/container-home.component.css")]
        }),
        __metadata("design:paramtypes", [_service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__["TextsharingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ContainerHomeComponent);
    return ContainerHomeComponent;
}());



/***/ }),

/***/ "./src/app/component/container-login/container-login.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/component/container-login/container-login.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/container-login/container-login.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/container-login/container-login.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n\r\n    <app-welcome></app-welcome>\r\n\r\n    <h2 class=\"text-center\">Login</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 col-md-offset-3\" style=\"background-color: #fff;padding: 15px;\">\r\n        <form action=\"#\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Username or Email address</label>\r\n            <input type=\"email\" class=\"form-control\" id=\"email\" >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"pwd\">Password:</label>\r\n            <input type=\"password\" class=\"form-control\" id=\"pwd\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <a href='#' class=\"text-primary\">Forgot password?</a>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"submit\" class=\"btn btn-success col-md-6 col-xs-6\">Login</button>\r\n            <a href=\"/login\" type=\"button\" class=\"btn btn-default col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1\">Create Account</a>\r\n          </div>\r\n          </form>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/container-login/container-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/container-login/container-login.component.ts ***!
  \************************************************************************/
/*! exports provided: ContainerLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerLoginComponent", function() { return ContainerLoginComponent; });
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

var ContainerLoginComponent = /** @class */ (function () {
    function ContainerLoginComponent() {
    }
    ContainerLoginComponent.prototype.ngOnInit = function () {
    };
    ContainerLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-login',
            template: __webpack_require__(/*! ./container-login.component.html */ "./src/app/component/container-login/container-login.component.html"),
            styles: [__webpack_require__(/*! ./container-login.component.css */ "./src/app/component/container-login/container-login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContainerLoginComponent);
    return ContainerLoginComponent;
}());



/***/ }),

/***/ "./src/app/component/container-register/container-register.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/component/container-register/container-register.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/container-register/container-register.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/component/container-register/container-register.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"content\">\r\n\r\n    <app-welcome></app-welcome>\r\n\r\n    <!-- <div *ngIf=\"registerNotify\">\r\n      <h2 class=\"text-center\" [ngStyle]=\"styleSuccess\">Register Success</h2>\r\n    </div> -->\r\n\r\n      <h2 class=\"text-center\" [ngStyle]=\"styleStatus\">{{title}}</h2>\r\n      <div class=\"row\" *ngIf=\"registerForm\">\r\n        <div class=\"col-md-6 col-md-offset-3\" style=\"background-color: #fff;padding: 15px;\">\r\n          <form action=\"#\">\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Username</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"username\" #registerUsername>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"password\" #registerPassword>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"confirmpassword\">Confirm Password</label>\r\n              <input type=\"password\" class=\"form-control\" id=\"confirmpassword\" #registerConfirmPassword>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email address</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"email\" #registerEmail>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-success col-md-6 col-xs-6\" (click)=\"onClickRegister(registerUsername.value, registerPassword.value, registerConfirmPassword.value, registerEmail.value);\">Register</button>\r\n                <a href=\"/login\" type=\"button\" class=\"btn btn-default col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1\">Login</a>\r\n              </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n  \r\n  </div>\r\n</div>\r\n\r\n<!-- \r\n<div *ngIf=\"messageService.messages.length\">\r\n\r\n  <h2>Messages</h2>\r\n  <button class=\"clear\"\r\n          (click)=\"messageService.clear()\">clear</button>\r\n  <div *ngFor='let message of messageService.messages'> {{message}} </div>\r\n\r\n</div> -->"

/***/ }),

/***/ "./src/app/component/container-register/container-register.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/component/container-register/container-register.component.ts ***!
  \******************************************************************************/
/*! exports provided: ContainerRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerRegisterComponent", function() { return ContainerRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/textsharing.service */ "./src/app/service/textsharing.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContainerRegisterComponent = /** @class */ (function () {
    function ContainerRegisterComponent(textSharingService) {
        this.textSharingService = textSharingService;
        this.title = 'Register';
        this.registerForm = true;
        this.styleStatus = { "color": "black" };
    }
    ContainerRegisterComponent.prototype.ngOnInit = function () {
    };
    ContainerRegisterComponent.prototype.onClickRegister = function (username, password, confirmpassword, email) {
        var _this = this;
        if (username == "" || password == "" || confirmpassword == "" || email == "") {
            alert("The input field can't be empty");
        }
        else {
            var isEmail = function check(email) {
                var regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                var test = regexp.test(email);
                return test;
            };
            if (password.length < 5) {
                alert("The Password field must be at least 5 characters in length.");
                this.inputPassword.nativeElement.focus();
            }
            else if (password !== confirmpassword) {
                alert("The Password field does not match the Confirm Password field.");
                this.inputConfirmPassword.nativeElement.focus();
            }
            else if (isEmail(email) == false) {
                alert("The Email field must contain a valid email address.");
                this.inputEmail.nativeElement.focus();
            }
            else {
                var registerFormData = {
                    "username": username,
                    "password": password,
                    "email": email
                };
                this.textSharingService.addGuest(registerFormData).subscribe(function (data) {
                    if (data.status == 'available') {
                        _this.title = 'Available Username';
                        _this.styleStatus = { "color": "red" };
                    }
                    else {
                        _this.title = 'Register Success';
                        _this.styleStatus = { "color": "green" };
                        _this.registerForm = false;
                    }
                }, function (error) { console.log(error); });
            }
        }
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerPassword'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerRegisterComponent.prototype, "inputPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerConfirmPassword'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerRegisterComponent.prototype, "inputConfirmPassword", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registerEmail'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContainerRegisterComponent.prototype, "inputEmail", void 0);
    ContainerRegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-container-register',
            template: __webpack_require__(/*! ./container-register.component.html */ "./src/app/component/container-register/container-register.component.html"),
            styles: [__webpack_require__(/*! ./container-register.component.css */ "./src/app/component/container-register/container-register.component.css")]
        }),
        __metadata("design:paramtypes", [_service_textsharing_service__WEBPACK_IMPORTED_MODULE_1__["TextsharingService"]])
    ], ContainerRegisterComponent);
    return ContainerRegisterComponent;
}());



/***/ }),

/***/ "./src/app/component/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\r\n  <p>Copyright 2018 - Text Sharing</p>\r\n</div>"

/***/ }),

/***/ "./src/app/component/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/component/nav/nav.component.css":
/*!*************************************************!*\
  !*** ./src/app/component/nav/nav.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/nav/nav.component.html":
/*!**************************************************!*\
  !*** ./src/app/component/nav/nav.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-header\" style=\"padding-top: 10px;\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n        aria-controls=\"navbar\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a href=\"./\">\r\n        Text Sharing\r\n      </a>\r\n    </div>\r\n\r\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li>\r\n          <a routerLink=\"./\">Home</a>\r\n        </li>\r\n        <li>\r\n          <a routerLink=\"/view\">Contact</a>\r\n        </li>\r\n      </ul>\r\n      <a class=\"nav-login-register\" routerLink=\"/register\"><span class=\"nav navbar-right navbar-text hidden-xs\" style=\"padding-right: 25px;\">Register</span></a>\r\n      <a class=\"nav-login-register\" routerLink=\"/login\"><span class=\"nav navbar-right navbar-text hidden-xs\" style=\"padding-right: 25px;\">Login</span></a>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/component/nav/nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/component/nav/nav.component.ts ***!
  \************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/component/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/component/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/component/welcome/welcome.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/welcome/welcome.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-12 col-sm-12 col-xs-12 text-center\">\r\n    Welcome, guest!\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-12 text-center hidden-sm hidden-xs\">\r\n    [ Pastes: 94153 ]\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/welcome/welcome.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/welcome/welcome.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/component/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/component/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/service/textsharing.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/textsharing.service.ts ***!
  \************************************************/
/*! exports provided: TextsharingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextsharingService", function() { return TextsharingService; });
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


//const httpOptions = {
//headers: new HttpHeaders({ 'Content-Type': 'application/json' })
//};
var TextsharingService = /** @class */ (function () {
    function TextsharingService(http) {
        this.http = http;
        // private registerURL = 'http://localhost:8888/textsharing/text-sharing-php/register.php';
        // private pasteURL = 'http://localhost:8888/textsharing/text-sharing-php/paste.php';
        // private detailURL = 'http://localhost:8888/textsharing/text-sharing-php/detail.php';
        // private updateURL = 'http://localhost:8888/textsharing/text-sharing-php/update.php';
        this.registerURL = 'http://pcphat.000webhostapp.com/textsharing/register.php';
        this.pasteURL = 'http://pcphat.000webhostapp.com/textsharing/paste.php';
        this.detailURL = 'http://pcphat.000webhostapp.com/textsharing/detail.php';
        this.updateURL = 'http://pcphat.000webhostapp.com/textsharing/update.php';
    }
    TextsharingService.prototype.addGuest = function (registerData) {
        return this.http.post(this.registerURL, registerData);
    };
    TextsharingService.prototype.addPaste = function (pasteData) {
        return this.http.post(this.pasteURL, pasteData);
    };
    TextsharingService.prototype.getDetail = function (id) {
        return this.http.post(this.detailURL, id);
    };
    TextsharingService.prototype.updatePaste = function (id, language, content) {
        console.log(id + " " + content);
        return this.http.post(this.updateURL, { "id": id, "language": language, "content": content });
    };
    TextsharingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TextsharingService);
    return TextsharingService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\WEB\PROJECT\textsharing\text-sharing\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map