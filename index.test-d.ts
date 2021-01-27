import { expectType } from "tsd"
import theModule from "./index.js"

expectType<string>(theModule("unicorns"))
