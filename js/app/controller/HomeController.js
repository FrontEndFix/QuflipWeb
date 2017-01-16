/// <reference path="../../../typings/app.d.ts" />
/// <reference path="../../../typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var App;
(function (App) {
    var Controller;
    (function (Controller) {
        var HomeController = (function (_super) {
            __extends(HomeController, _super);
            function HomeController(appService, $rootScope, storageService) {
                var _this = this;
                _super.call(this, appService);
                this.$rootScope = $rootScope;
                this.storageService = storageService;
                this.popuarItems = [];
                this.itemList = [];
                this.onLoadStoreTemp = function () {
                    _this.popuarItems = [{ "id": 0, "name": "Well-Done Beef Pho", "cost": 8.95, "isRecommended": true, "isSpicy": true, "isGreen": false, "isFish": false, "isChicken": false, "isCow": true, "isPig": false, "isSheep": false }, { "id": 1, "name": "House Special Chow Mein", "cost": 10.95, "isRecommended": false, "isSpicy": false, "isGreen": false, "isFish": true, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }, { "id": 2, "name": "Tortellini Alfredo", "cost": 13.95, "isRecommended": true, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }, { "id": 3, "name": "Amante Special Pizza", "cost": 14.4, "isRecommended": false, "isSpicy": false, "isGreen": true, "isFish": false, "isChicken": false, "isCow": false, "isPig": false, "isSheep": false }];
                    _this.itemList = [{ "id": 0, "name": "MexicanNine", "stars": 3, "type": "Mexican", "status": "wait 12-15 mins", "companyLogo": "l1.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 1, "name": "Crisp", "stars": 1, "type": "American", "status": "closed", "companyLogo": "l2.png", "foodImg": "f9.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 2, "name": "Ezzel's", "stars": 5, "type": "American", "status": "available", "companyLogo": "l3.png", "foodImg": "f8.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 3, "name": "HaalaFalafel", "stars": 5, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l4.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 4, "name": "iNosh", "stars": 4, "type": "Italian", "status": "wait 12-15 mins", "companyLogo": "l5.png", "foodImg": "f6.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 5, "name": "GFF", "stars": 3, "type": "Europian", "status": "available", "companyLogo": "l6.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 6, "name": "MexicanNine", "stars": 3, "type": "Mexican", "status": "wait 12-15 mins", "companyLogo": "l1.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 7, "name": "Crisp", "stars": 4, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l2.png", "foodImg": "f9.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 8, "name": "Ezzel's", "stars": 5, "type": "American", "status": "available", "companyLogo": "l3.png", "foodImg": "f8.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 9, "name": "HaalaFalafel", "stars": 5, "type": "American", "status": "wait 12-15 mins", "companyLogo": "l4.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 10, "name": "iNosh", "stars": 4, "type": "Italian", "status": "wait 12-15 mins", "companyLogo": "l5.png", "foodImg": "f6.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }, { "id": 5, "name": "GFF", "stars": 3, "type": "Europian", "status": "available", "companyLogo": "l6.png", "foodImg": "f7.png", "comment": "Lorem ipsum dolor sit amet consectetur..." }];
                };
                this.onLoadStoreTemp();
            }
            HomeController.prototype.goToListingPage = function (cart) {
                this.$rootScope.cart = cart;
                this.storageService.setItem('truck', cart, true);
                this.appService.routerService.routeToPage('list');
            };
            HomeController.$inject = ['baseAppService', '$rootScope', 'storageService'];
            return HomeController;
        }(Controller.BaseController));
        Controller.HomeController = HomeController;
    })(Controller = App.Controller || (App.Controller = {}));
})(App || (App = {}));
