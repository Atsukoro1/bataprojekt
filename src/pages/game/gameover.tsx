import Router from "next/router";

const GameOver = () => {
    const backToMenu = () => {
        Router.push('/game');
    };

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <h1 className="text-white text-lg font-bold mb-5">
                    Game over
                </h1>

                <p className="text-white text-md font-medium">
                    Bohužel jsi prohrál, můžeš to ale zkusit znovu
                </p>

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