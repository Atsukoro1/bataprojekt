import { api } from "@/utils/api";
import Router from "next/router";
import ReactPlayer from "react-player";

const Congrats = () => {
    const removeMutation = api.gameSession.removeSession.useMutation();

    const backToMenu = async() => {
        await removeMutation.mutateAsync();
		Router.push("/game");
	};

	return (
		<main className="flex min-h-screen flex-col items-center bg-slate-800">
			<div className="mt-20">
				<h1 className="text-white text-lg font-bold mb-5">
					Gratuluji, úspěšně jsi unikl/a vrahovi, ale bylo to jen tak tak!
				</h1>

				<ReactPlayer
					url={"https://www.youtube.com/shorts/vRM1LPdXEbs"}
					controls={true}
					playing={true}
					width={340}
					height={420}
				/>

				<button
					className="bg-slate-200 p-4 rounded-lg mt-4"
					onClick={backToMenu}
				>
					Zpátky do menu
				</button>
			</div>
		</main>
	);
};

export default Congrats;
