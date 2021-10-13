(self["webpackChunkThingsToDo"] = self["webpackChunkThingsToDo"] || []).push([["src_app_modal-popup-add_modal-popup-add_module_ts"],{

/***/ 3540:
/*!*******************************************************************!*\
  !*** ./src/app/modal-popup-add/modal-popup-add-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupAddPageRoutingModule": () => (/* binding */ ModalPopupAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _modal_popup_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popup-add.page */ 8359);




const routes = [
    {
        path: '',
        component: _modal_popup_add_page__WEBPACK_IMPORTED_MODULE_0__.ModalPopupAddPage
    }
];
let ModalPopupAddPageRoutingModule = class ModalPopupAddPageRoutingModule {
};
ModalPopupAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ModalPopupAddPageRoutingModule);



/***/ }),

/***/ 6891:
/*!***********************************************************!*\
  !*** ./src/app/modal-popup-add/modal-popup-add.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalPopupAddPageModule": () => (/* binding */ ModalPopupAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _modal_popup_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-popup-add-routing.module */ 3540);
/* harmony import */ var _modal_popup_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-popup-add.page */ 8359);







let ModalPopupAddPageModule = class ModalPopupAddPageModule {
};
ModalPopupAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _modal_popup_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModalPopupAddPageRoutingModule
        ],
        declarations: [_modal_popup_add_page__WEBPACK_IMPORTED_MODULE_1__.ModalPopupAddPage]
    })
], ModalPopupAddPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_modal-popup-add_modal-popup-add_module_ts.js.map