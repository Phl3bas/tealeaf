import { TealValueObject } from "../types";

export const Elevation: TealValueObject = {
  shadow: {
    "0": "none",
    "1": "0px 0px 1px 1px rgba(0, 0, 0, 0.1)",
    "2":
      "0px 6px 24px 0px rgba(0, 0, 0, 0.05),0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
    "3":
      "0px 2px 5px -2px rgba(50, 50, 93, 0.25),0px 2px 3px -1px rgba(0, 0, 0, 0.3)",
    "4":
      "0px 3px 6px -1px rgba(0, 0, 0, 0.05),0px 3px 5px -1px rgba(0, 0, 0, 0.3)",
    "5":
      "0px 6px 12px -2px rgba(50, 50, 93, 0.25),0px 3px 7px -3px rgba(0, 0, 0, 0.3)",
    "6":
      "0px 13px 27px -5px rgba(50, 50, 93, 0.25),0px 8px 16px -8px rgba(0, 0, 0, 0.3)",
    "7":
      "0px 25px 50px -12px rgba(0, 0, 0, 0.25), 0px 10px 24px -8px rgba(0, 0, 0, 0.22)",
    "8": "0px 20px 30px rgba(0, 0, 0, 0.2)",
  },
  insetshadow: {
    "1": "inset 0px 1px 3px 0px rgba(0, 0, 0, 0.1)",
    "2":
      "inset 1px 1px 3px 0px rgb(204, 219, 232),inset -1px -1px 3px 1px rgba(255, 255, 255, 0.5)",
    "3":
      "inset 2px 2px 4.5px 0px rgb(204, 219, 232),inset -2px -2px 4.5px 1px rgba(255, 255, 255, 0.5)",
    "4":
      "inset 3px 3px 6px 0px rgb(204, 219, 232),inset -3px -3px 6px 1px rgba(255, 255, 255, 0.5)",
  },
};
