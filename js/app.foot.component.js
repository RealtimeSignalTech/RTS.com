System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FootComponent, MENU;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ;
            FootComponent = (function () {
                function FootComponent() {
                    this.menutree = MENU;
                }
                FootComponent.prototype.onClick = function (e) {
                    console.log(e);
                };
                FootComponent = __decorate([
                    core_1.Component({
                        selector: 'foot',
                        templateUrl: 'partials/menu.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FootComponent);
                return FootComponent;
            }());
            exports_1("FootComponent", FootComponent);
            MENU = [
                {
                    "text": "RTS",
                    "subnav": [
                        { "text": "About" },
                        { "text": "Clients" },
                        { "text": "Support" },
                        { "text": "Book Online" },
                        { "text": "Careers" },
                        { "text": "Blog" }
                    ]
                },
                {
                    "text": "Products",
                    "subnav": [
                        { "text": "RealGeo" },
                        { "text": "SmartPlug" }
                    ]
                },
                {
                    "text": "Services",
                    "subnav": [
                        { "text": "Communications" },
                        { "text": "Embedded Software" },
                        { "text": "DSP Codecs" }
                    ]
                },
                {
                    "text": "Training",
                    "subnav": [
                        { "text": "Embedded Systems" },
                        { "text": "Linux Device Drivers" },
                        { "text": "Digital Signal Processing" },
                        { "text": "PLC and SCADA" },
                        { "text": "Core JAVA" },
                        { "text": "Advanced JAVA" },
                        { "text": "J2EE" },
                        { "text": "Android" },
                        { "text": "PCB Design" },
                        { "text": "Python" },
                        { "text": "Perl" },
                        { "text": "Matlab" },
                        { "text": "SQL" },
                        { "text": "Oracle" },
                        { "text": "Bigdata Hadoop" },
                        { "text": "Academic Projects" }
                    ]
                }
            ];
        }
    }
});

//# sourceMappingURL=app.foot.component.js.map
