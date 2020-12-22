import { feet, inches, Measure } from "safe-units";

export const name = "safe-units";

export default function test() {
  return Measure.of(1024, inches).per(feet);
}
