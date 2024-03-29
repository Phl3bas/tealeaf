import { TealeafValueObject } from "../types";

export const Eases: TealeafValueObject = {
  "ease-sine": {
    in: "cubic-bezier(0.12, 0, 0.39, 0)",
    out: "cubic-bezier(0.61, 1, 0.88, 1)",
    inout: "cubic-bezier(0.37, 0, 0.63, 1)",
  },
  "ease-quad": {
    in: "cubic-bezier(0.11, 0, 0.5, 0)",
    out: "cubic-bezier(0.5, 1, 0.89, 1)",
    inout: "cubic-bezier(0.45, 0, 0.55, 1)",
  },
  "ease-circ": {
    in: "cubic-bezier(0.55, 0, 1, 0.45)",
    out: "cubic-bezier(0, 0.55, 0.45, 1)",
    inout: "cubic-bezier(0.85, 0, 0.15, 1)",
  },
  "ease-cubic": {
    in: "cubic-bezier(0.32, 0, 0.67, 0)",
    out: "cubic-bezier(0.33, 1, 0.68, 1)",
    inout: "cubic-bezier(0.65, 0, 0.35, 1)",
  },
  "ease-quint": {
    in: "cubic-bezier(0.64, 0, 0.78, 0)",
    out: "cubic-bezier(0.22, 1, 0.36, 1)",
    inout: "cubic-bezier(0.83, 0, 0.17, 1)",
  },
  "ease-quart": {
    in: "cubic-bezier(0.5, 0, 0.75, 0)",
    out: "cubic-bezier(0.25, 1, 0.5, 1)",
    inout: "cubic-bezier(0.76, 0, 0.24, 1)",
  },
  "ease-expo": {
    in: "cubic-bezier(0.7, 0, 0.84, 0)",
    out: "cubic-bezier(0.16, 1, 0.3, 1)",
    inout: "cubic-bezier(0.87, 0, 0.13, 1)",
  },
  "ease-back": {
    in: "cubic-bezier(0.36, 0, 0.66, -0.56)",
    out: "cubic-bezier(0.34, 1.56, 0.64, 1)",
    inout: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
  },
};
