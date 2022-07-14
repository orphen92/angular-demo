"use strict";
(self["webpackChunkAngular_demo"] = self["webpackChunkAngular_demo"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _store_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store/navigation */ 2177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ 3755);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







class AppComponent {
  constructor(store) {
    this.store = store;
    this.title = 'Angular-demo';
  }

  ngOnInit() {
    this.menuState$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.select)(_store_navigation__WEBPACK_IMPORTED_MODULE_0__.getMenuState));
  }

  openNav() {
    this.store.dispatch(new _store_navigation__WEBPACK_IMPORTED_MODULE_0__.NavOpen());
  }

  closeNav() {
    this.store.dispatch(new _store_navigation__WEBPACK_IMPORTED_MODULE_0__.NavClose());
  }

  toggleNav() {
    this.store.dispatch(new _store_navigation__WEBPACK_IMPORTED_MODULE_0__.NavToggle());
  }

}

AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__.Store));
};

AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 8,
  vars: 4,
  consts: [[1, "app-page"], [1, "app-wrapper"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 1)(4, "aside");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "app-main-menu");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "main");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Test ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("app-menu-open", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, ctx.menuState$));
    }
  },
  dependencies: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_2__.MainMenuComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 5405);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ 5242);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ 2322);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ 3646);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main-menu/main-menu.component */ 3755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);


// Store













const StoreDevTools = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__.StoreDevtoolsModule.instrument({ maxAge: 50 }) : [];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forRoot(_store__WEBPACK_IMPORTED_MODULE_1__.reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true
            }
        }),
        _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forRoot(_store__WEBPACK_IMPORTED_MODULE_1__.effects),
        StoreDevTools] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent,
        _components_main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_5__.MainMenuComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__.StoreDevtoolsModule] }); })();


/***/ }),

/***/ 3646:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _app_store_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/store/navigation */ 2177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







class HeaderComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {
    this.menuState$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_app_store_navigation__WEBPACK_IMPORTED_MODULE_0__.getMenuState));
  }

  toggleMenu() {
    this.store.dispatch(new _app_store_navigation__WEBPACK_IMPORTED_MODULE_0__.NavToggle());
  }

}

HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};

HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  decls: 8,
  vars: 3,
  consts: [[1, "header"], [1, "header__title"], ["routerLink", "/", 1, "app-a"], [1, "header__navigation"], [1, "button-clear", 3, "click"], [3, "innerText"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Angular demo ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "section", 3)(5, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() {
        return ctx.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "mat-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerText", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 1, ctx.menuState$) ? "menu_open" : "menu");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe],
  styles: ["section[_ngcontent-%COMP%] {\n  padding: 0.8rem 1.2rem;\n  display: flex;\n  align-items: center;\n}\n.header[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: space-between;\n  position: fixed;\n  width: 100%;\n  z-index: 4;\n  height: 6.4rem;\n}\n.header__navigation[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n}\n.header__navigation[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcY29sb3JzLnNjc3MiLCJoZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Q0FBQTtBQ0NBO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFRRjtBQUxBO0VBQ0UseUJER1c7RUNGWCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBUUY7QUFORTtFQUNFLGtCQUFBO0FBUUo7QUFQSTtFQUNFLHlCQUFBO0FBU04iLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICBHbG9iYWwgdGhlbWUgY29sb3JzXHJcbiAgLSBCYWNrZ3JvdW5kLWNvbG9yXHJcbiAgLSBQZW5kaW5nXHJcbiAgLSBFcnJvclxyXG4gIC0gU3VjY2Vzc1xyXG5cclxuKi9cclxuXHJcbiRiYXNlOiAjZmFmYWZhO1xyXG4kYmFzZS1kYXJrOiAjZTBlMGUwO1xyXG4kYmFzZS1saWdodDogI2ZmZmZmZjtcclxuJG9uLWJhc2U6ICMwMDAwMDA7XHJcblxyXG4kcHJpbWFyeTogIzAwYmNkNDtcclxuJHByaW1hcnktZGFyazogIzAwOGJhMztcclxuJHByaW1hcnktbGlnaHQ6ICM2MmVmZmY7XHJcbiRvbi1wcmltYXJ5OiAjZmZmZmZmO1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL2NvbG9ycy5zY3NzXCI7XHJcbnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IC44cmVtIDEuMnJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWxpZ2h0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA0O1xyXG4gIGhlaWdodDogNi40cmVtO1xyXG5cclxuICAmX19uYXZpZ2F0aW9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 3755:
/*!*************************************************************!*\
  !*** ./src/app/components/main-menu/main-menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainMenuComponent": () => (/* binding */ MainMenuComponent)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 3488);
/* harmony import */ var _app_store_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/store/navigation */ 2177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





class MainMenuComponent {
  constructor(store) {
    this.store = store;
  }

  ngOnInit() {
    this.menuState$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.select)(_app_store_navigation__WEBPACK_IMPORTED_MODULE_0__.getMenuState));
  }

}

MainMenuComponent.ɵfac = function MainMenuComponent_Factory(t) {
  return new (t || MainMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Store));
};

MainMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MainMenuComponent,
  selectors: [["app-main-menu"]],
  decls: 4,
  vars: 4,
  consts: [[1, "app-main-nav"]],
  template: function MainMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Coucou les amis ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("app-main-nav-open", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 2, ctx.menuState$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe],
  styles: [".app-main-nav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 300px;\n  right: 0;\n  left: initial;\n  display: flex;\n  background: red;\n  z-index: 6;\n  flex-direction: column;\n  height: 100%;\n  overflow: hidden;\n  transform: translateX(100%);\n  transition-property: transform;\n  -webkit-backdrop-filter: none;\n          backdrop-filter: none;\n}\n.app-main-nav-open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n  left: initial;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0FBQ0Y7QUFBRTtFQUNFLHdCQUFBO0VBQ0EsYUFBQTtBQUVKIiwiZmlsZSI6Im1haW4tbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbWFpbi1uYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogaW5pdGlhbDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICB6LWluZGV4OiA2O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IG5vbmU7XHJcbiAgJi1vcGVuIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIGxlZnQ6IGluaXRpYWw7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
});

/***/ }),

/***/ 2322:
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "effects": () => (/* binding */ effects),
/* harmony export */   "reducers": () => (/* binding */ reducers)
/* harmony export */ });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ 2177);

const reducers = {
    navigation: _navigation__WEBPACK_IMPORTED_MODULE_0__.reducer
};
const effects = [];


/***/ }),

/***/ 2177:
/*!*******************************************!*\
  !*** ./src/app/store/navigation/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastUrl": () => (/* reexport safe */ _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.LastUrl),
/* harmony export */   "NavClose": () => (/* reexport safe */ _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.NavClose),
/* harmony export */   "NavOpen": () => (/* reexport safe */ _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.NavOpen),
/* harmony export */   "NavToggle": () => (/* reexport safe */ _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.NavToggle),
/* harmony export */   "Types": () => (/* reexport safe */ _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.Types),
/* harmony export */   "getLastUrl": () => (/* reexport safe */ _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__.getLastUrl),
/* harmony export */   "getMenuState": () => (/* reexport safe */ _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__.getMenuState),
/* harmony export */   "getNavigationState": () => (/* reexport safe */ _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__.getNavigationState),
/* harmony export */   "reducer": () => (/* reexport safe */ _navigation_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer)
/* harmony export */ });
/* harmony import */ var _navigation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.actions */ 8008);
/* harmony import */ var _navigation_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.reducer */ 2015);
/* harmony import */ var _navigation_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation.models */ 6198);
/* harmony import */ var _navigation_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation.selectors */ 1354);






/***/ }),

/***/ 8008:
/*!********************************************************!*\
  !*** ./src/app/store/navigation/navigation.actions.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LastUrl": () => (/* binding */ LastUrl),
/* harmony export */   "NavClose": () => (/* binding */ NavClose),
/* harmony export */   "NavOpen": () => (/* binding */ NavOpen),
/* harmony export */   "NavToggle": () => (/* binding */ NavToggle),
/* harmony export */   "Types": () => (/* binding */ Types)
/* harmony export */ });
var Types;
(function (Types) {
    Types["NAV_OPEN"] = "[Global] NAV: open";
    Types["NAV_CLOSE"] = "[Global] NAV: close";
    Types["NAV_TOGGLE"] = "[Global] NAV: toggle";
    Types["LAST_URL"] = "[Global] NAV: Last url";
})(Types || (Types = {}));
class NavOpen {
    constructor() {
        this.type = Types.NAV_OPEN;
    }
}
class NavClose {
    constructor() {
        this.type = Types.NAV_CLOSE;
    }
}
class NavToggle {
    constructor() {
        this.type = Types.NAV_TOGGLE;
    }
}
class LastUrl {
    constructor(payload) {
        this.payload = payload;
        this.type = Types.LAST_URL;
    }
}


/***/ }),

/***/ 6198:
/*!*******************************************************!*\
  !*** ./src/app/store/navigation/navigation.models.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 2015:
/*!********************************************************!*\
  !*** ./src/app/store/navigation/navigation.reducer.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _navigation_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation.actions */ 8008);

const initialState = {
    entities: {
        isNavOpen: false,
        lastUrlVisited: '/'
    },
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.Types.NAV_OPEN: {
            return { ...state, entities: { ...state.entities, isNavOpen: true } };
        }
        case _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.Types.NAV_CLOSE: {
            return { ...state, entities: { ...state.entities, isNavOpen: false } };
        }
        case _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.Types.NAV_TOGGLE: {
            return { ...state, entities: { ...state.entities, isNavOpen: !state.entities.isNavOpen } };
        }
        case _navigation_actions__WEBPACK_IMPORTED_MODULE_0__.Types.LAST_URL: {
            return { ...state, entities: action.payload };
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ 1354:
/*!**********************************************************!*\
  !*** ./src/app/store/navigation/navigation.selectors.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLastUrl": () => (/* binding */ getLastUrl),
/* harmony export */   "getMenuState": () => (/* binding */ getMenuState),
/* harmony export */   "getNavigationState": () => (/* binding */ getNavigationState)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 3488);

const getNavigationState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createFeatureSelector)('navigation');
const getNavigation = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getNavigationState, (state) => {
    console.log('state: ', state);
    return state.entities;
});
const getLastUrl = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getNavigationState, (state) => state.entities.lastUrlVisited);
const getMenuState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(getNavigation, (state) => state.isNavOpen);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    name: 'dev'
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map