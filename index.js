export default function theModule(input, {postfix = 'rainbows'} = {}) {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return `${input} & ${postfix}`;
}
