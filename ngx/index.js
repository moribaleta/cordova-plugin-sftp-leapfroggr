var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "@angular/core", "@ionic-native/core"], function (require, exports, core_1, core_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * @name Cordova Plugin Sftp Leapfroggr
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { CordovaPluginSftpLeapfroggr } from '@ionic-native/cordova-plugin-sftp-leapfroggr';
     *
     *
     * constructor(private cordovaPluginSftpLeapfroggr: CordovaPluginSftpLeapfroggr) { }
     *
     * ...
     *
     *
     * this.cordovaPluginSftpLeapfroggr.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    var CordovaPluginSftpLeapfroggr = /** @class */ (function (_super) {
        __extends(CordovaPluginSftpLeapfroggr, _super);
        function CordovaPluginSftpLeapfroggr() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * This function does something
         * @param arg1 {string} Some param to configure something
         * @param arg2 {number} Another param to configure something
         * @return {Promise<any>} Returns a promise that resolves when something happens
         */
        CordovaPluginSftpLeapfroggr.prototype.configureSFTP = function (options) {
            return; // We add return; here to avoid any IDE / Compiler errors
        };
        CordovaPluginSftpLeapfroggr.prototype.upload = function (options) {
            return;
        };
        __decorate([
            core_2.Cordova()
        ], CordovaPluginSftpLeapfroggr.prototype, "configureSFTP", null);
        __decorate([
            core_2.Cordova()
        ], CordovaPluginSftpLeapfroggr.prototype, "upload", null);
        CordovaPluginSftpLeapfroggr = __decorate([
            core_2.Plugin({
                pluginName: 'CordovaPluginSftpLeapfroggr',
                plugin: 'cordova-plugin-sftp-leapfroggr',
                pluginRef: 'cordova.plugins.CordovaPluginSftpLeapfroggr',
                repo: 'https://github.com/moribaleta/cordova-plugin-sftp-leapfroggr',
                install: '',
                installVariables: [],
                platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
            }),
            core_1.Injectable()
        ], CordovaPluginSftpLeapfroggr);
        return CordovaPluginSftpLeapfroggr;
    }(core_2.IonicNativePlugin));
    exports.CordovaPluginSftpLeapfroggr = CordovaPluginSftpLeapfroggr;
});
