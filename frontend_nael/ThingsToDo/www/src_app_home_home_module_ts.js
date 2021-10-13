(self["webpackChunkThingsToDo"] = self["webpackChunkThingsToDo"] || []).push([["src_app_home_home_module_ts"],{

/***/ 5089:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2711:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6274);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4595);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3324);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 9460);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 5089);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 9460:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 1855);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9535);
/* harmony import */ var _services_TaskService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/TaskService */ 1812);
/* harmony import */ var _modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-popup/modal-popup.page */ 2166);
/* harmony import */ var _modal_popup_add_modal_popup_add_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-popup-add/modal-popup-add.page */ 8359);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 4595);









let HomePage = class HomePage {
    constructor(router, TaskService, modalController, modalControllerAdd) {
        this.router = router;
        this.TaskService = TaskService;
        this.modalController = modalController;
        this.modalControllerAdd = modalControllerAdd;
        this.task = [];
    }
    openIonModal(id, name, description, done) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log(description);
            const modal = yield this.modalController.create({
                component: _modal_popup_modal_popup_page__WEBPACK_IMPORTED_MODULE_3__.ModalPopupPage,
                componentProps: {
                    "Id": id,
                    'Nombre': name,
                    'Description': description,
                    'Done': done
                }
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    this.modelData = modelData.data;
                    console.log('Modal Data : ' + modelData.data);
                }
            });
            return yield modal.present();
        });
    }
    openIonModalAdd() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Entra");
            const modalAdd = yield this.modalControllerAdd.create({
                component: _modal_popup_add_modal_popup_add_page__WEBPACK_IMPORTED_MODULE_4__.ModalPopupAddPage
            });
            modalAdd.onDidDismiss().then((modelData) => {
                if (this.modelDataAdd !== null) {
                    this.modelDataAdd = modelData.data;
                    console.log('Modal Data : ' + modelData.data);
                }
            });
            return yield modalAdd.present();
        });
    }
    ngOnInit() {
        this.loadInfo();
    }
    loadInfo() {
        this.TaskService.getTask().subscribe((t) => {
            this.task = t;
        });
    }
    deleteTask(id) {
        this.TaskService.deleteTask(id).subscribe(() => this.loadInfo());
    }
    completedTask(id) {
        this.TaskService.completedTask(id);
        this.loadInfo();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _services_TaskService__WEBPACK_IMPORTED_MODULE_2__.TaskService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("@charset \"UTF-8\";\n.col {\n  text-align: center;\n  padding-bottom: 40px;\n}\n.check {\n  height: 50px;\n  margin-left: 5px;\n}\n.state {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 20px;\n}\n.btn-flotante {\n  font-size: 16px;\n  /* Cambiar el tamaño de la tipografia */\n  text-transform: uppercase;\n  /* Texto en mayusculas */\n  font-weight: bold;\n  /* Fuente en negrita o bold */\n  color: #ffffff;\n  /* Color del texto */\n  border-radius: 5px;\n  /* Borde del boton */\n  letter-spacing: 2px;\n  /* Espacio entre letras */\n  background-color: #080808;\n  /* Color de fondo */\n  padding: 18px 30px;\n  /* Relleno del boton */\n  position: fixed;\n  bottom: 40px;\n  right: 40px;\n  transition: all 300ms ease 0ms;\n  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);\n  z-index: 99;\n}\n.btn-flotante:hover {\n  background-color: #2c2fa5;\n  /* Color de fondo al pasar el cursor */\n  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.3);\n  transform: translateY(-7px);\n}\n@media only screen and (max-width: 600px) {\n  .btn-flotante {\n    font-size: 14px;\n    padding: 12px 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUNBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUVBO0VBQ0ksZUFBQTtFQUFpQix1Q0FBQTtFQUNqQix5QkFBQTtFQUEyQix3QkFBQTtFQUMzQixpQkFBQTtFQUFtQiw2QkFBQTtFQUNuQixjQUFBO0VBQWdCLG9CQUFBO0VBQ2hCLGtCQUFBO0VBQW9CLG9CQUFBO0VBQ3BCLG1CQUFBO0VBQXFCLHlCQUFBO0VBQ3JCLHlCQUFBO0VBQTJCLG1CQUFBO0VBQzNCLGtCQUFBO0VBQW9CLHNCQUFBO0VBQ3BCLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0FBU0o7QUFQSTtFQUNBLHlCQUFBO0VBQTJCLHNDQUFBO0VBQzNCLDRDQUFBO0VBQ0EsMkJBQUE7QUFXSjtBQVRJO0VBQ0E7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQVlGO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29sIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cblxuLmNoZWNrIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmJ0bi1mbG90YW50ZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgLyogQ2FtYmlhciBlbCB0YW1hw7FvIGRlIGxhIHRpcG9ncmFmaWEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgLyogVGV4dG8gZW4gbWF5dXNjdWxhcyAqL1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLyogRnVlbnRlIGVuIG5lZ3JpdGEgbyBib2xkICovXG4gIGNvbG9yOiAjZmZmZmZmO1xuICAvKiBDb2xvciBkZWwgdGV4dG8gKi9cbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAvKiBCb3JkZSBkZWwgYm90b24gKi9cbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgLyogRXNwYWNpbyBlbnRyZSBsZXRyYXMgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODtcbiAgLyogQ29sb3IgZGUgZm9uZG8gKi9cbiAgcGFkZGluZzogMThweCAzMHB4O1xuICAvKiBSZWxsZW5vIGRlbCBib3RvbiAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNDBweDtcbiAgcmlnaHQ6IDQwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBtcztcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogOTk7XG59XG5cbi5idG4tZmxvdGFudGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyZmE1O1xuICAvKiBDb2xvciBkZSBmb25kbyBhbCBwYXNhciBlbCBjdXJzb3IgKi9cbiAgYm94LXNoYWRvdzogMHB4IDE1cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtN3B4KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYnRuLWZsb3RhbnRlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMTJweCAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Things to do\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">\n        Things to do\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div class=\"container-fluid\">\n\n    <button  type=\"button\" class=\"btn-flotante\" (click)=\"openIonModalAdd()\">Añadir una nueva tarea</button>\n\n    <ion-list>\n      <div *ngFor=\"let t of task\" class=\"row\">\n\n        <div class=\"col\"> </div>\n        <div class=\"col\">\n          <h2>\n            Tarea: {{ t.name }}\n\n\n\n          </h2>\n\n          <p> Descripción: {{t.description}}</p>\n\n\n\n          <h1> Estado de la tarea: </h1>\n          <div class=\"state\">\n\n            <div *ngIf=\"t.done===1\">\n              <ion-img src=\"assets/images/Check.png\" class=\"check\"></ion-img>\n            </div>\n            <div class=\"check\" *ngIf=\"t.done===0\">\n              <ion-img src=\"assets/images/x.png\" class=\"check\"></ion-img>\n            </div>\n\n          </div>\n\n\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"openIonModal(t.id, t.name, t.description, t.done)\">Modificar tarea</button>\n\n          <button type=\"button\" class=\"btn  btn-danger\" (click)=\"deleteTask(t.id)\"> Eliminar tarea </button>\n          <button type=\"button\" class=\"btn btn-success\" *ngIf=\"t.done===0\" (click)=\"completedTask(t.id)\">Tarea completada! </button>\n\n\n         \n        </div>\n        <div class=\"div-check\">\n\n        </div>\n        <div class=\"col\"> </div>\n\n      </div>\n\n    </ion-list>\n\n\n  </div>\n\n\n\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map