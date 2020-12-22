import {convert} from '@favware/converter';

export const name = '@favware/converter';

export default function test() {
	return convert(1024, 'in', 'ft');
}
