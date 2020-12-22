import Qty from 'js-quantities';

export const name = 'js-quantities';

export default function test() {
	return Qty(1024, 'in/feet').baseScalar;
}
