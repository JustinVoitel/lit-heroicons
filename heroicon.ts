import { css, customElement, html, LitElement, property } from "lit-element";
import { HeroIconName, icons } from "./generated/heroicons";
import pascalcase from "pascalcase";

@customElement("hero-icon")
export class Heroicon extends LitElement {
  @property({ type: Boolean })
  solid = false;

  @property({ type: String })
  name = "LightningBolt" as HeroIconName;

  render() {
    return (
      icons?.[pascalcase(this.name)]?.[this.solid ? "solid" : "outline"] ??
      html`<svg></svg>`
    );
  }

  createRenderRoot() {
    return this;
  }
}
