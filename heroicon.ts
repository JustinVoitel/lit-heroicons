import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
import { HeroIconName, icons } from "./generated/heroicons";

type HeroIconSize = "full" | "s" | "m" | "l";
@customElement("hero-icon")
export class Heroicon extends LitElement {
  static styles = css`
    :host([size="full"]) {
      width: 100%;
    }
    :host([size="s"]) {
      width: 14px;
    }
    :host([size="m"]) {
      width: 18px;
    }
    :host([size="l"]) {
      width: 32px;
    }
  `;

  @property()
  name: HeroIconName = "LightningBolt";

  @property({ type: Boolean })
  solid = false;

  @property({ attribute: true })
  size: HeroIconSize = "full";

  render() {
    return (
      icons?.[this.name.toLowerCase()]?.[this.solid ? "solid" : "outline"] ??
      html`<svg></svg>`
    );
  }

  createRenderRoot() {
    return this;
  }
}
