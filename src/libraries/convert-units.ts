import convert from "convert-units";

export const name = "convert-units";

export default function test() {
  return convert(1024).from("in").to("ft");
}
