import { toast } from 'react-toastify';
import { api } from "@/utils/api";
import Router from 'next/router';
import Image from 'next/image';

const IndexPage = () => {
    const createGameSession = api.gameSession.createSession.useMutation({
        onSuccess: (data) => {
            toast.success("Úspěšně jste vytvořili novou hru, přesměrovávání...");
        },

        onError: (err) => {
            toast.error(err.message);
        }
    });

    const gameSession = api.gameSession.fetchSession.useQuery(undefined, {
        onSuccess: (data) => {
            if(data?.stage) {
                Router.push(`/game/${data?.stage.toString()}`);
            };
        }
    });

    const onStartSession = async () => {
        if (gameSession.data) {
            toast.error("Již máte vytvořenou hru");
        } else {
            await createGameSession.mutateAsync();
        }
    }

    return (
        <main className="flex min-h-screen flex-col items-center bg-slate-800">
            <div className="m-5">
                <h1 className='text-white mb-3 text-xl font-bold'>Vítáme tě!</h1>
                <p className='text-white mb-5'>
                    Právě jsi dostal možnost zahrát si únikovou hru.
                    Tato hra byla vytvořena studenty 3. ročníku multimediální školy, ve Zlíně.
                    <br /><br />
                    Jestli si chceš zahrát rychlou detektivku a uniknout vrahovi, klikni na tlačítko START, poté dostaneš první indicie a přesměrujeme tě na první lokaci.
                    <br /><br />
                    (po zmáčknutí tlačítka START se ukáže první obrázek mapy)
                </p>
                {
                    gameSession.isLoading ? (
                        <Image
                            src={{
                                src: "/loading.gif",
                                height: 200,
                                width: 200
                            }}
                            alt='loading'
                        />
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