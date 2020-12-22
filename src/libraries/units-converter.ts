import { length } from "units-converter/dist/es/index.js";

export const name = "units-converter";

export default function test() {
  return length(1024).from("in").to("ft");
}
