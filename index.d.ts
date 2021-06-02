export interface Options {
	/**
	Lorem ipsum.

	@default rainbows
	*/
	postfix?: string
}

/**
My awesome module.

@param input Lorem ipsum.

@example
```
import theModule from "the-module"

theModule("unicorns")
//=> "unicorns & rainbows"
```
*/
export default function theModule(input: string, options?: Options): string
