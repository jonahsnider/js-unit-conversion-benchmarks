import { convert } from "convert";

export const name = "convert";

export default function test() {
  return convert(1024).from("inch").to("foot");
}
