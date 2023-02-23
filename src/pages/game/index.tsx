import { toast } from 'react-toastify';
import { api } from "@/utils/api";
import Router from 'next/router';

const IndexPage = () => {
    const createGameSession = api.gameSession.createSession.useMutation({
        onSuccess: () => {
            toast.success("Úspěšně jste vytvořili novou hru, přesměrovávání...")
        },

        onError: (err) => {
            toast.error(err.message);
        }
    });

    const gameSession = api.gameSession.fetchSession.useQuery(undefined, {
        onSuccess: (data) => {
            (async function() {
                await Router.push(`/game/${data?.stage.toString()}`);
            }());
        }
    });

    const onStartSession = async () => {
        if(gameSession.data) {
            toast.error("Již máte vytvořenou hru");
        } else {
            await createGameSession.mutateAsync();
        }
    }
    
    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="mt-20">
                {
                    gameSession.isLoading ? (
                        <h1 className="text-white font-bold">
                            Načítání...
                        </h1>
                    ) : (
                        <button 
                            className="bg-slate-600 text-white p-4 rounded-lg"
                            onClick={onStartSession}
                        >
                            Začít hru
                        </button>
                    )
                }
            </div>
        </main>
    )
}

export default IndexPage;