import { LitElement } from "lit-element";
import { HeroIconName } from "./generated/heroicons";
export declare class Heroicon extends LitElement {
    solid: boolean;
    name: HeroIconName;
    render(): import("lit-element").TemplateResult;
    createRenderRoot(): this;
}
