import { api } from "@/utils/api";
import Router from "next/router";
import ReactPlayer from "react-player";

const GameOver = () => {
    const removeMutation = api.gameSession.removeSession.useMutation();

    const backToMenu = async() => {
        await removeMutation.mutateAsync();
        Router.push('/game');
    };

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg font-bold mb-5">
                    To snad ne. Zadal/a jsi špatný kód a vrah tě chytil, tak snad to příště vyjde! 
                </h1>

                <ReactPlayer
					url={"https://www.youtube.com/shorts/20nSNuPr5YM"}
					controls={true}
					playing={true}
					width={340}
					height={420}
				/>

                <button 
                    className="bg-slate-200 p-4 rounded-lg mt-4"
                    onClick={backToMenu}
                >
                    Zpatky do menu
                </button>
            </div>
        </main>
    )
};

export default GameOver;