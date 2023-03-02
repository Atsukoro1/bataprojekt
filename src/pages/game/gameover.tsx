import Router from "next/router";

const GameOver = () => {
    const backToMenu = () => {
        Router.push('/game');
    };

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <video src="https://www.youtube.com/shorts/20nSNuPr5YM"/>
                

                <h1 className="text-white text-lg font-bold mb-5">
                    To snad ne. Zadal/a jsi špatný kód a vrah tě chytil, tak snad to příště vyjde! 
                </h1>

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