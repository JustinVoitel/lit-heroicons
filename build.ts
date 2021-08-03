import {
  writeFile,
  createWriteStream,
  readdirSync,
  readFileSync,
  mkdirSync,
  writeFileSync,
} from "fs";
import { join } from "path";
import { EOL } from "os";
import pascalcase from "pascalcase";

let enumName = "HeroIconName";
let iconsInterfaceName = "HeroIcon";
let iconTypeName = "HeroIconName";
let sourceDir = "./node_modules/heroicons";
let outputDir = "./generated/";
let outputDirIcons = join(outputDir, "heroicons.ts");
let outputDirEnum = join(outputDir, `${enumName}.java`);
let svgDict = {};

function template(svgString: string) {
  return `
import { html, TemplateResult } from "lit";

export const iconNames = [${Object.keys(svgDict)
    .map((name) => `'${name}'`)
    .join(",")}] as const

export type ${iconTypeName} = typeof iconNames[number]

interface ${iconsInterfaceName} {
  [key: string]: {
    solid:TemplateResult,
    outline:TemplateResult
  };
}

export const icons = {
  ${svgString}
} as HeroIcon;
`;
}

function main() {
  mkdirSync(outputDir, { recursive: true });
  getIconsFromDir("outline");
  getIconsFromDir("solid");

  generateTemplates();
  generateJavaEnum();
}

function generateJavaEnum() {
  const len = Object.keys(svgDict).length;
  let i = 0;
  let enumString = "";
  Object.keys(svgDict).forEach((name) => {
    const suffix = i == len - 1 ? ";" : ",";
    enumString += name + suffix;
    i++;
  });

  const enumTemplate = `
  public enum ${enumName} {
    ${enumString}
  }
  `;
  writeFileSync(outputDirEnum, enumTemplate);
}

function generateTemplates() {
  //solid icons

  let iconString = "";

  Object.keys(svgDict).forEach((name) => {
    iconString += `${name.toLowerCase()}: {solid: html\`${
      svgDict[name]["solid"]
    }\`, outline: html\`${svgDict[name]["outline"]}\`\n},`;
  });

  writeFileSync(outputDirIcons, template(iconString));
}

function getIconsFromDir(dir: string) {
  readdirSync(join(sourceDir, dir)).forEach((fileName) => {
    const key = pascalcase(fileName.replace(".svg", ""));
    let data = readFileSync(join(sourceDir, dir, fileName)).toString();
    data = transformData(data);
    if (!svgDict[key]) {
      svgDict[key] = {};
    }
    svgDict[key][dir] = data;
  });
}

function transformData(data: string): string {
  return data.slice(0, 4) + " part='svg'" + data.slice(4);
}

main();
