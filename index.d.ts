declare namespace theModule {
	export interface Options {
		/**
		Lorem ipsum.

		@default rainbows
		*/
		postfix?: string
	}
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
declare function theModule(input: string, options?: theModule.Options): string

export default theModule
