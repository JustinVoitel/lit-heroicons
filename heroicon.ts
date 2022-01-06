import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { HeroIconName, icons } from "./generated/heroicons";

type HeroIconSize = "full" | "s" | "m" | "l";
@customElement("hero-icon")
export class Heroicon extends LitElement {
  @property()
  name: HeroIconName = "LightningBolt";

  @property({ type: Boolean })
  solid = false;

  render() {
    return html`
      <span>
        ${icons?.[this.name?.toLowerCase()]?.[
          this.solid ? "solid" : "outline"
        ] ?? html`<svg></svg>`}
      </span>
    `;
  }

  createRenderRoot() {
    return this;
  }
}
