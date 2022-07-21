declare module '@ceteio/chakra-capsize';
declare module '@ceteio/chakra-capsize/theme';

// // Capsize
// import { Ref } from "react";
// import { TextProps, HeadingProps, ResponsiveValue, ThemeTypings } from "@chakra-ui/react";
// declare module '@ceteio/chakra-capsize';
// export declare type CappedProps = {
//     capHeight?: ResponsiveValue<ThemeTypings extends {
//         capHeights: any;
//     } ? ThemeTypings["capHeights"] | number | (string & {}) : number | (string & {})>;
//     lineGap?: ResponsiveValue<ThemeTypings["space"] | number | (string & {})>;
//     leading?: ResponsiveValue<ThemeTypings["sizes"] | number | (string & {})>;
//     truncatedRef?: Ref<HTMLDivElement>;
// };
// export declare type CappedTextProps = TextProps & CappedProps;
// export declare const CappedText: import("@chakra-ui/react").ComponentWithAs<"p", CappedTextProps>;
// export declare type CappedHeadingProps = HeadingProps & CappedProps;
// export declare const CappedHeading: import("@chakra-ui/react").ComponentWithAs<"h2", CappedHeadingProps>;

// // Theme
// import { FontMetrics } from "@capsizecss/core";
// import { ThemeOverride, TypographyProps } from "@chakra-ui/react";
// export declare type CappedTextThemeExtension = {
//     fontMetrtics: Record<string, FontMetrics>;
//     htmlFontSize: number;
// };
// export declare type WithCappedTextConfig = {
//     defaultFontSize?: TypographyProps["fontSize"];
//     htmlFontSize?: number;
//     fontMetrics: Record<string, FontMetrics>;
// };
// export declare const withCappedText: ({ defaultFontSize, htmlFontSize, fontMetrics, }: WithCappedTextConfig) => ThemeOverride<CappedTextThemeExtension>;

// // Utils
// export function useCappedText(props: any): {};
