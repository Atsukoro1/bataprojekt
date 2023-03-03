import { useState } from "react";

type ContentInputProps = {
	title: string;
	choice: string;
	onSuccess: () => void;
	onFail: () => void;
};

const ContentInput = ({
	choice,
	title,
	onSuccess,
	onFail,
}: ContentInputProps) => {
	const [value, setValue] = useState<string>("");

	return (
		<div>
			<h1 className="text-lg text-white mb-3">{title}</h1>

			<input
				type="text"
				className="bg-slate-600 border-slate-500 p-2 border-2 rounded-lg"
				value={value?.toString()}
				onChange={(event) => setValue(event.target.value)}
			/>

            <br />

			<button
				className="p-3 text-white bg-slate-600 mt-4 rounded-lg"
				onClick={() => {
					if (value === choice) {
						onSuccess();
					} else {
						onFail();
					}
				}}
			>
				Hotovo
			</button>
		</div>
	);
};

export default ContentInput;
