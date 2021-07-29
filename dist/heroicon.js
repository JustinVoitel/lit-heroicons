"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroicon = void 0;
const lit_element_1 = require("lit-element");
const heroicons_1 = require("./generated/heroicons");
const pascalcase_1 = __importDefault(require("pascalcase"));
let Heroicon = class Heroicon extends lit_element_1.LitElement {
    constructor() {
        super(...arguments);
        this.solid = false;
        this.name = "LightningBolt";
    }
    render() {
        var _a, _b;
        return ((_b = (_a = heroicons_1.icons === null || heroicons_1.icons === void 0 ? void 0 : heroicons_1.icons[pascalcase_1.default(this.name)]) === null || _a === void 0 ? void 0 : _a[this.solid ? "solid" : "outline"]) !== null && _b !== void 0 ? _b : lit_element_1.html `<svg></svg>`);
    }
    createRenderRoot() {
        return this;
    }
};
__decorate([
    lit_element_1.property({ type: Boolean })
], Heroicon.prototype, "solid", void 0);
__decorate([
    lit_element_1.property({ type: String })
], Heroicon.prototype, "name", void 0);
Heroicon = __decorate([
    lit_element_1.customElement("hero-icon")
], Heroicon);
exports.Heroicon = Heroicon;
//# sourceMappingURL=heroicon.js.map