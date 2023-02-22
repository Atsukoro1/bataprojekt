export function convertMsToTime(milliseconds: number): string {
	const seconds = Math.floor(milliseconds / 1000);

	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	const timeStr = `${hours.toString().padStart(2, "0")}:${minutes
		.toString()
		.padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

	return timeStr;
}
