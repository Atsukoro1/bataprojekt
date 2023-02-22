import { QrScanner } from "@yudiel/react-qr-scanner";
import { useMemo } from "react";

type CodeReaderProps = {
	onResult: (value: string) => void;
	questNumber: number;
	open: boolean;
};

const QrCodeScanner = ({ onResult, open, questNumber }: CodeReaderProps) => {
	const visible = useMemo(() => open, [open]);

	return (
		<div className={`
            top-0 left-0 bottom-0 right-0 m-auto absolute backdrop-blur pt-20
            ${visible ? "" : "hidden"}
        `}>
			<div className="text-center text-white text-2xl font-bold mb-5">
				Naskenujte QR kód
			</div>

            <button onClick={() => onResult("df")}>Next</button>

			<QrScanner
				onResult={(result) => {
					const text = result.getText();

					if(parseInt(text) === questNumber) {
						onResult(result.getText())
					} else {
						alert("nah");
					}
				}}
				onError={(error) => {
					console.log(error);
				}}
				constraints={{
					facingMode: "environment",
					aspectRatio: { min: 0.5, max: 1 },
				}}
				scanDelay={1000}
			/>
		</div>
	);
}

export default QrCodeScanner;