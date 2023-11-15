export interface TypographyProps {
  fontSize?: FontSizeKey;
  fontFamily?: FontFamilyKey;
  fontWeight?: FontWeightKey;
  textAlign?: TextAlignKey;
  color?: any;
  classNameT?: string;
  italic?: boolean;
  style?: Record<string, string>;
  element?: TextElement;
  ellipsis?: boolean;
}

type FontSizeKey = "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
export type FontWeightKey =
  | "Light"
  | "Regular"
  | "Medium"
  | "SemiBold"
  | "Bold"
  | "ExtraBold"
  | "Black";
export type FontFamilyKey = "Nunito" | "Spartan";
type TextAlignKey = "left" | "center" | "right" | "justify";

interface FontSize {
  xs: "text-xs";
  sm: "text-sm";
  base: "text-base";
  lg: "text-lg";
  xl: "text-xl";
  "2xl": "text-2xl";
  "3xl": "text-3xl";
}

export interface FontWeight {
  Light: "font-light";
  Regular: "font-regular";
  Medium: "font-medium";
  SemiBold: "font-semibold";
  Bold: "font-bold";
  ExtraBold: "font-extrabold";
  Black: "font-black";
}

interface TextAlign {
  left: "text-left";
  center: "text-center";
  right: "text-right";
  justify: "text-justify";
}

export interface TypographyMap {
  fontSize: FontSize;
  fontWeight: FontWeight;
  textAlign: TextAlign;
}

type TextElement =
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label"
  | "pre"
  | "span";
