import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";

const baseStyle = defineStyle({
  fontFamily: "heading",
  fontWeight: "bold",
});

const sizes = {
  "h1": defineStyle({
    fontSize: ["DisplayXl", null, "Display2xl"],
    lineHeight: ['5.625rem'],
  }),
  "h2": defineStyle({
    fontSize: ["DisplayLg", null, "DisplayXl"],
    lineHeight: ['4.5rem'],
  }),
  "h3": defineStyle({
    fontSize: ["DisplayMd", null, "DisplayLg"],
    lineHeight: ['2.75rem'],
  }),
  "h4": defineStyle({
    fontSize: ["DisplaySm", null, "DisplayMd"],
    lineHeight: ['2.375rem'],
  }),
  "h5": defineStyle({
    fontSize: ["DisplayXs", null, "DisplaySm"],
    lineHeight: ['2rem'],
  }),
  "h6": defineStyle({
    fontSize: ["DisplayXs", null, "DisplayXs"],
    lineHeight: ['1.875rem'],
  }),
};

export const Heading = defineStyleConfig({
  baseStyle,
  sizes,
});