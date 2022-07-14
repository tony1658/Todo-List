export default function isValidInput(input: string): boolean {
	// Checks for if the input only contains spaces
	const regex = /^\s*$/;
	return Boolean(input) && !regex.test(input);
}
