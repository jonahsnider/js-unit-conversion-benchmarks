import Tinu from 'tinu';

export const name = 'tinu';

export default function test() {
	return Tinu.distance(1024, 'in').to('ft').value;
}
