import { kebabCase } from "lodash";

export const slugify = (string) => {
  return kebabCase(string);
};