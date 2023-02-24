import Router from "next/router";

const Congrats = () => {
    const backToMenu = () => {
        Router.push("/game");
    };

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                <video src="https://youtube.com/shorts/qJNd9PROTxw"/>
                
                <h1 className="text-white text-lg font-bold mb-5">
                    Gratuluji, úspěšně jsi unikl/a vrahovi, ale bylo to jen tak tak! 
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

export default Congrats;