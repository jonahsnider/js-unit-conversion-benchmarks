import {Unit} from 'uom';
import {Units} from 'uom-units';

export const name = 'uom';

export default function test() {
	return Unit.convert(1024, Units.Inch, Units.Foot);
}
