import Typewriter from "typewriter-effect";
import "../App.css";

export function TypewritterTitle() {
	return (<Typewriter
		options={{
			strings: ['FULL STACK', 'BACKEND', 'FRONTEND'],
			autoStart: true,
			loop: true,
		}}

	/>)
}
